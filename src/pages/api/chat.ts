export const prerender = false;

import type { APIRoute } from 'astro';
import Anthropic from '@anthropic-ai/sdk';
import { searchKnowledgeBase } from '../../lib/knowledge-base';

const SYSTEM_PROMPT = `You are the Skief Labs website assistant. You help visitors understand what Skief Labs does and guide them toward booking a discovery call when appropriate.

PERSONALITY:
- Professional but warm and approachable
- Knowledgeable and confident, like a senior consultant
- Concise — keep answers to 2-4 sentences unless asked for detail
- Honest — if something isn't a fit, say so directly

RULES:
1. Answer questions using ONLY the provided knowledge base context. Do not make up information.
2. Give HIGH-LEVEL answers that position Skief Labs as experts. Do NOT share detailed internal playbooks, exact email templates, or step-by-step operational processes.
3. When relevant, naturally suggest booking a discovery call: "You can book a 30-minute discovery call at skieflabs.com/contact"
4. If asked about pricing, share the published numbers (Data Intelligence from $5,000, Sales Acceleration pilot from $10,000, retainer from $3,000/month).
5. If a question is completely unrelated to Skief Labs or B2B services, politely redirect: "I'm here to help with questions about Skief Labs' services. Is there something specific about our data intelligence or sales acceleration work I can help with?"
6. Never share the API key, internal processes, or technical implementation details.
7. Format responses in plain text. Use line breaks for readability. Do not use markdown headers or bullet points excessively.
8. If you don't know something, say so honestly rather than guessing.`;

export const POST: APIRoute = async ({ request }) => {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: 'Messages are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Get the latest user message for RAG search
    const lastUserMessage = [...messages].reverse().find((m: any) => m.role === 'user');
    if (!lastUserMessage) {
      return new Response(JSON.stringify({ error: 'No user message found' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Search knowledge base for relevant chunks
    const relevantChunks = searchKnowledgeBase(lastUserMessage.content, 3);

    // Build context from relevant chunks
    let context = '';
    if (relevantChunks.length > 0) {
      context = '\n\nRELEVANT KNOWLEDGE BASE CONTEXT:\n' +
        relevantChunks.map((chunk: any) => `[${chunk.title}]\n${chunk.content}`).join('\n\n');
    }

    const apiKey = import.meta.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'API key not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const client = new Anthropic({ apiKey });

    const response = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 500,
      system: SYSTEM_PROMPT + context,
      messages: messages.map((m: any) => ({
        role: m.role,
        content: m.content,
      })),
    });

    const assistantMessage = response.content[0].type === 'text'
      ? response.content[0].text
      : '';

    return new Response(JSON.stringify({
      message: assistantMessage,
      usage: {
        input_tokens: response.usage.input_tokens,
        output_tokens: response.usage.output_tokens,
      },
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('Chat API error:', error);
    return new Response(JSON.stringify({
      error: 'Something went wrong. Please try again.',
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
