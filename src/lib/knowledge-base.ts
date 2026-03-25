// Pre-chunked knowledge base for RAG chatbot
// Each chunk is tagged with keywords for matching

export interface KBChunk {
  id: string;
  title: string;
  keywords: string[];
  content: string;
}

export const knowledgeBase: KBChunk[] = [
  // ===== ABOUT SKIEF LABS =====
  {
    id: "about-skief",
    title: "About Skief Labs",
    keywords: ["skief", "who", "about", "company", "team", "founder", "sardar", "azimov", "background"],
    content: `Skief Labs builds data intelligence and sales acceleration systems for B2B companies. Founded by Sardar Azimov, whose background is in business, marketing, and sales — not engineering. He learned automation, AI, and systems design out of necessity: building ways to scale commercial output without endlessly hiring or burning teams out. Every system Skief Labs designs starts with business questions, not technical ones. The company exists because growing businesses are routinely held together by people doing work that systems should handle.`
  },
  {
    id: "about-point-of-view",
    title: "Skief Labs Point of View",
    keywords: ["philosophy", "approach", "belief", "why", "different", "unique", "point of view"],
    content: `Most B2B companies don't stall because of bad strategy or bad people. They stall because their systems never evolved as the business did. As teams grow, tools multiply, data fragments, responsibility blurs, and humans quietly become the connective tissue holding everything together. That works — until it becomes fragile. Skief Labs replaces that fragility with systems that operate reliably — whether or not anyone is watching. Adding more software doesn't fix this. Adding more people only delays it. What changes things is replacing fragile, human-dependent effort with systems that work quietly in the background.`
  },

  // ===== SERVICES =====
  {
    id: "services-overview",
    title: "Services Overview",
    keywords: ["services", "what", "do", "offer", "help", "work", "solutions"],
    content: `Skief Labs works on two specific problems for B2B companies: getting the right data, and building the outbound systems that turn it into pipeline. The two services are: (1) Data Intelligence — the data your team needs, built, enriched, and delivered automatically. (2) Sales Acceleration — more pipeline, without more headcount. They don't offer a menu of services and don't take on work outside these two areas. AI and automation are how they build — not what they sell.`
  },
  {
    id: "service-data-intelligence",
    title: "Data Intelligence Service",
    keywords: ["data", "intelligence", "research", "scraping", "enrichment", "pipeline", "automation", "ai", "signals", "scoring"],
    content: `Data Intelligence builds automated data pipelines for B2B teams. What they build: (1) Research & Scraping Pipelines — contacts, companies, roles, signals collected automatically. (2) AI-Powered Enrichment & Scoring — enrichment logic that layers context, qualifies records, and scores outputs. (3) Agentic Research Workflows — AI agents that gather, structure, and summarize complex research. (4) Signal & Trigger Identification — surfaces buying signals (hiring, funding, tech changes, leadership moves) automatically. This is for teams where the quality of inputs directly determines the quality of everything downstream: marketing teams, HR/talent teams, and growth teams. NOT a fit for teams needing a quick list or one-time export. System builds start from $5,000 with fixed scope, full documentation, and complete handoff. Results: 80-90% reduction in manual data handling.`
  },
  {
    id: "service-sales-acceleration",
    title: "Sales Acceleration Service",
    keywords: ["sales", "acceleration", "outbound", "email", "cold", "pipeline", "leads", "meetings", "sequences", "campaigns"],
    content: `Sales Acceleration fixes fragile outbound systems and runs them. What they do: (1) Outbound System Design — full targeting logic, data sources, personalization framework, sequence architecture. (2) Clay-Powered Targeting — dynamic lead sources, enrichment waterfalls, and scoring logic. (3) Multi-Channel Sequences — email and LinkedIn working together, designed around actual buyer behavior. (4) Done-For-You Operation — research, enrichment, personalization, sequencing, inbox management, and continuous optimization. Built for B2B founders, sales leaders, and growth teams who know their outbound should be working harder. NOT a fit for teams looking for a short campaign or quick blast. Pilot projects from $10,000. Ongoing retainer from $3,000/month. No obligation to continue beyond the pilot. Results: 3-5x more outreach capacity, same headcount.`
  },

  // ===== PRICING =====
  {
    id: "pricing",
    title: "Pricing Information",
    keywords: ["price", "pricing", "cost", "investment", "how much", "budget", "money", "pay", "fee", "rate", "affordable", "expensive"],
    content: `Skief Labs pricing: Data Intelligence system builds start from $5,000 (fixed scope, full documentation, handoff at the end — you own it completely). Sales Acceleration pilot projects from $10,000. Ongoing retainer from $3,000/month. No obligation to continue beyond the pilot. In both cases, nothing is built before the scope is clear. No surprises mid-engagement. No invoices for work you didn't agree to. Some clients extend into an ongoing arrangement. Others take the system and run it themselves. Either way, you own it completely.`
  },

  // ===== HOW THEY WORK =====
  {
    id: "how-we-work",
    title: "How Skief Labs Works",
    keywords: ["how", "work", "process", "engagement", "start", "begin", "approach", "methodology", "steps"],
    content: `Skief Labs principles: (1) Diagnosis before prescription — they don't recommend solutions before understanding the problem. (2) Judgment before automation — not everything should be automated; restraint is part of what you're hiring. (3) Clarity over complexity — if a system can't be explained simply, it isn't finished. (4) Ownership by design — nothing they build requires them to stay involved; full documentation, clean handoff, zero dependency. (5) Fixed scope, fixed expectations — no drifting projects, no surprise invoices. For Data Intelligence: fixed scope, time-bound, fully documented. For Sales Acceleration: starts with a pilot (defined scope, fixed price), most clients move to ongoing retainer. Clients describe working with Skief Labs as "calm.""`
  },

  // ===== BOOKING & CONTACT =====
  {
    id: "booking",
    title: "How to Get Started / Book a Call",
    keywords: ["book", "call", "contact", "start", "meeting", "schedule", "discovery", "consultation", "talk", "reach", "get started", "next"],
    content: `One entry point. Always the same: a 30-minute discovery call. Not a pitch. Not a free audit. Not a commitment. A focused conversation to understand where friction is concentrated in your business — and whether Skief Labs is the right fit. Either way, you leave the call with more clarity than you arrived with. You can book directly at skieflabs.com/contact or email contact@skieflabs.com. The discovery call is diagnostic — they'll ask about your current systems, where friction is, and what you've already tried. There's no obligation and no pressure to proceed.`
  },

  // ===== OUTBOUND EXPERTISE =====
  {
    id: "outbound-expertise",
    title: "Outbound Email Expertise",
    keywords: ["outbound", "cold email", "email", "sequence", "cadence", "subject", "reply", "open rate", "deliverability", "domain", "warmup"],
    content: `Skief Labs has deep expertise in B2B outbound. Key insights: The traditional SDR playbook is declining — spray-and-pray no longer works. Benchmarks show 8.5% average reply rate across 12M emails, with about 3,249 emails needed per deal at 0.03% conversion. Two strategic paths: Volume outbound (for <$10K ACV) and Account-based ($50K+ ACV). The 4-email sequence structure: Email 1 (Hook — soft CTA), Email 2 (Reframe — new angle), Email 3 (Proof — direct CTA), Email 4 (Breakup — permission). Key principles: never cold email from your main domain, proper authentication (SPF, DKIM, DMARC), 14-day warmup minimum, 30-50 emails/day per mailbox. AI augments the process but humans approve and respond.`
  },

  // ===== ABM EXPERTISE =====
  {
    id: "abm-expertise",
    title: "Account-Based Marketing Expertise",
    keywords: ["abm", "account based", "account-based", "targeting", "icp", "ideal customer", "buyer", "persona", "segment", "tier"],
    content: `Skief Labs uses a 5-pillar ABM framework: (1) Account selection — identifying high-value targets. (2) Account planning — mapping buying committees. (3) Account nurturing — building relationships over time. (4) Signal-based engagement — acting on buying signals. (5) Personalized activation — tailored outreach. Account tiering: Tier 1 (5-15 accounts, 60% capacity, full custom), Tier 2 (50-100 accounts, 30%), Tier 3 (300-500 accounts, 10%). They map the full buying committee: Economic buyer, Champion, Influencer, Blocker, End user. 90-day pilot structure with defined milestones. ABM metrics focus on account-to-pipeline ratio (5-15% benchmark), not traditional SDR metrics like dials and emails sent.`
  },

  // ===== AI & AUTOMATION =====
  {
    id: "ai-automation",
    title: "AI and Automation Approach",
    keywords: ["ai", "artificial intelligence", "automation", "n8n", "clay", "tools", "technology", "tech", "stack", "workflow", "agent"],
    content: `Skief Labs' AI philosophy: AI-augmented, not autonomous. AI researches, personalizes, and classifies; humans approve, respond, and strategize. 4-layer architecture: (1) Intelligence & enrichment (automated). (2) Content & personalization (AI drafts, humans review). (3) Orchestration & workflow (automated scheduling). (4) Analytics & optimization (automated collection, human decision-making). Tools used include Clay (data backbone), Instantly/Smartlead (sending), Apollo/ZoomInfo (enrichment), n8n/Make (automation), and Anthropic/OpenAI APIs. Anti-patterns they avoid: fully autonomous AI SDRs (generates spam), over-automating personalization, volume without quality feedback.`
  },

  // ===== PERSONALIZATION =====
  {
    id: "personalization",
    title: "Personalization Approach",
    keywords: ["personalization", "personalize", "customize", "tailor", "relevant", "message", "copy", "writing", "opener"],
    content: `Skief Labs uses tiered personalization: Tier 1 accounts get full custom research (30-60 min per account), Tier 2 gets account-level personalization (10-15 min), Tier 3 gets segment-level batch personalization. The personalization spectrum ranges from basic merge fields (not effective) to individual-specific insights (most effective). Research sources include company websites, LinkedIn, financial signals, tech stack changes, podcasts, and community activity. Messaging is tailored by persona: C-suite (business impact, short, peer conversation), VP/Director (team challenges, consultative), Manager/IC (day-to-day pain, helpful). The test: "Could this be sent to 1,000 people?" If yes, it's not personalized enough.`
  },

  // ===== MULTICHANNEL =====
  {
    id: "multichannel",
    title: "LinkedIn and Multichannel Strategy",
    keywords: ["linkedin", "multichannel", "social", "selling", "channel", "phone", "direct mail"],
    content: `Skief Labs builds multi-channel outbound systems combining email and LinkedIn. Key patterns: LinkedIn-first → email follow, Email-first → LinkedIn amplify, or Parallel paths. Benchmarks show significant lift from multichannel: Email + LinkedIn profile view (+10-15% improvement), Email + LinkedIn connection + engagement (+25-40%), Email + LinkedIn + phone (+40-60%), Email + LinkedIn + direct mail (+50-80%). LinkedIn optimization includes profile optimization (headline formula, about section, experience), content strategy (4 pillars: industry observations, tactical insights, proof stories, contrarian takes), and a 5-rung social selling ladder (Observe → Engage → Connect → Nurture → Activate).`
  },

  // ===== METRICS =====
  {
    id: "metrics",
    title: "Performance Metrics and Benchmarks",
    keywords: ["metrics", "benchmark", "performance", "results", "roi", "conversion", "numbers", "statistics", "success"],
    content: `Industry benchmarks for B2B outbound: By seniority — C-suite (25-40% open rate, 1-3% reply), VP/Director (35-50% open, 2-5% reply), Manager/IC (45-65% open, 4-10% reply). By industry — SaaS (35-55% open, 3-7% reply), Professional services (40-60%, 4-8%), Manufacturing (40-60%, 4-9%). Skief Labs achieves: 80-90% reduction in manual data handling for Data Intelligence clients, and 3-5x more outreach capacity for Sales Acceleration clients with the same headcount. Key diagnostic: Low open rate = deliverability issue. Healthy opens + low reply = copy/targeting issue. Positive reply rate benchmark: 15-25% of total replies.`
  },

  // ===== USE CASES =====
  {
    id: "use-cases",
    title: "Example Use Cases",
    keywords: ["example", "case study", "use case", "scenario", "situation", "problem", "solution", "result", "outcome", "client"],
    content: `Example situations Skief Labs solves: (1) Marketing team spending senior time on research that should be automated — they build automated data pipelines so the team focuses on strategy, not list building. (2) Sales team with inconsistent outbound producing unpredictable results — they design and run the full outbound system so pipeline becomes predictable. (3) Growth team needing reliable data but getting incomplete enrichment — they build enrichment waterfalls that layer context, qualify records, and score outputs automatically. (4) Companies where best people are the glue — manually researching, chasing, reconciling — they replace that fragility with automated systems. These are real situations, real friction, real outcomes — not demos or hypotheticals.`
  },

  // ===== WHAT THEY DON'T DO =====
  {
    id: "what-we-dont-do",
    title: "What Skief Labs Doesn't Do",
    keywords: ["dont", "don't", "not", "won't", "can't", "limitation", "scope", "exclude"],
    content: `Skief Labs is clear about what they don't do: They don't run one-off campaigns. They don't take on projects where they're one of several vendors being evaluated. They don't offer free audits or speculative work. They don't build systems that require them to stay involved forever. They don't work with teams who want speed over substance. They don't offer AI and automation as a standalone service — it's embedded in how they build. These aren't restrictions designed to sound exclusive. They're the conditions under which their work is actually good.`
  },

  // ===== DISCOVERY CALL DETAILS =====
  {
    id: "discovery-call-details",
    title: "What the Discovery Call Covers",
    keywords: ["discovery", "call", "what happens", "expect", "prepare", "agenda", "conversation", "diagnostic"],
    content: `The discovery call is a 30-minute diagnostic conversation. What this conversation IS: A chance to explain what's happening in your business. A way to find out if there's a real fit. An honest assessment of whether Skief Labs can help. What this conversation IS NOT: A sales pitch. A free consulting session. A commitment to anything. Who this call is for (good fit): B2B companies with 10+ employees, teams experiencing data or outbound friction, businesses ready to invest in systems. Not a good fit: Pre-revenue startups, companies looking for a quick fix, teams wanting to evaluate multiple vendors simultaneously. What happens after: If there's a fit, Skief Labs scopes the work properly. If not, they'll tell you directly and may suggest alternatives.`
  },

  // ===== REPLY HANDLING =====
  {
    id: "reply-handling",
    title: "Reply Handling and Objection Management",
    keywords: ["reply", "response", "objection", "handling", "negative", "positive", "interested", "not interested", "timing", "budget"],
    content: `Skief Labs has a sophisticated reply handling system with 13 classification categories. Interested replies (Hot/Warm/Soft) get fast response — Hot within 1 hour, Warm within 4 hours. Common objections are handled with proven frameworks: Timing objections ("not now") get value-based follow-up with permission to reconnect. Budget objections get ROI-focused responses. Competitor objections get differentiation messaging. The system automates classification, suppresses unsubscribes, logs out-of-office return dates, sends Slack alerts for hot leads, and updates CRM. Target: 15-25% positive reply rate, with objection-to-meeting conversion tracked as a key metric.`
  },
];

// Simple keyword-based search for RAG
export function searchKnowledgeBase(query: string, topK: number = 3): KBChunk[] {
  const queryLower = query.toLowerCase();
  const queryWords = queryLower.split(/\s+/).filter(w => w.length > 2);

  const scored = knowledgeBase.map(chunk => {
    let score = 0;

    // Check keyword matches (high weight)
    for (const keyword of chunk.keywords) {
      if (queryLower.includes(keyword)) {
        score += 10;
      }
      // Partial word matches
      for (const word of queryWords) {
        if (keyword.includes(word) || word.includes(keyword)) {
          score += 3;
        }
      }
    }

    // Check content matches (lower weight)
    for (const word of queryWords) {
      const regex = new RegExp(word, 'gi');
      const matches = chunk.content.match(regex);
      if (matches) {
        score += matches.length;
      }
    }

    // Check title matches (medium weight)
    for (const word of queryWords) {
      if (chunk.title.toLowerCase().includes(word)) {
        score += 5;
      }
    }

    return { chunk, score };
  });

  // Sort by score descending, return top K
  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .filter(s => s.score > 0)
    .map(s => s.chunk);
}
