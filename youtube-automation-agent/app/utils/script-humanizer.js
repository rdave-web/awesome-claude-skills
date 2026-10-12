const { Logger } = require('./logger');

// Condensed from the "humanizer" skill (Wikipedia: Signs of AI writing, MIT).
// The full pattern list lives in ../references/humanizer.md.
const HUMANIZER_RULES = `Rewrite the narration below so it sounds like a person speaking, not a chatbot. Keep every fact, number, name and claim. Do not add facts, names, numbers, quotes or sources.

Remove these patterns:
- "Not X but Y" / "it's not just X, it's Y" contrasts that only add weight. State the point directly.
- One-line closers that repeat the previous point ("That's the real win.", "Let that sink in.") and rows of dramatic fragments.
- Deep-sounding sayings ("at its core", "the real question is", "X is the language of Y").
- Staged run-ups ("Let's dive in", "Here's the thing", "Honestly?", "Buckle up").
- Arguing with no one ("You might think... but", "Don't get me wrong").
- Forced triads where the meaning has no three parts.
- Em dashes and en dashes. Use periods, commas or colons instead.
- Inflated significance and sales language (pivotal, testament, stunning, breathtaking, vibrant, tapestry, delve, landscape, crucial, showcase, underscore).
- Vague "serves as / stands as / boasts / features" in place of is, are, has.
- Bold, emojis, headings or markup inside the narration.

Write for the ear: vary sentence length, use contractions, concrete words, one clear idea per sentence. Keep the same language as the input (English unless the input is not English).`;

class ScriptHumanizer {
  constructor(aiTextService) {
    this.ai = aiTextService;
    this.logger = new Logger('ScriptHumanizer');
  }

  isEnabled() {
    const flag = String(process.env.SCRIPT_HUMANIZER_ENABLED ?? 'true').toLowerCase();
    return flag !== 'false' && this.ai && this.ai.isAvailable();
  }

  parse(response) {
    const text = String(response || '').trim().replace(/^```(?:json)?\s*/i, '').replace(/```$/i, '').trim();
    try {
      return JSON.parse(text);
    } catch (error) {
      const match = text.match(/\{[\s\S]*\}/);
      if (!match) throw error;
      return JSON.parse(match[0]);
    }
  }

  // Returns the script with hook, section lines, CTA and title rewritten.
  // Any failure or shape mismatch keeps the original script untouched.
  async humanize(script) {
    if (!this.isEnabled()) return script;

    const payload = {
      title: script.title,
      hook: script.hook?.text || '',
      sections: (script.mainContent?.sections || []).map(s => ({ title: s.title, content: s.content })),
      cta: script.callToAction?.subscribe || ''
    };

    const prompt = `${HUMANIZER_RULES}

Return only valid JSON with exactly the same shape and the same number of sections and content lines as the input. Rewrite title, hook, section titles, content lines and cta.

Input:
${JSON.stringify(payload)}`;

    try {
      const response = await this.ai.generateText(prompt, { maxTokens: 8000, temperature: 0.6 });
      const out = this.parse(response);
      const sameShape = typeof out.title === 'string' && typeof out.hook === 'string' &&
        Array.isArray(out.sections) && out.sections.length === payload.sections.length &&
        out.sections.every((s, i) => typeof s.title === 'string' && Array.isArray(s.content) &&
          s.content.length === payload.sections[i].content.length && s.content.every(l => typeof l === 'string' && l.trim()));
      if (!sameShape || !out.title.trim() || !out.hook.trim()) {
        throw new Error('humanized output changed shape');
      }

      const humanized = {
        ...script,
        title: out.title.trim().slice(0, 100),
        hook: { ...script.hook, text: out.hook.trim() },
        mainContent: {
          ...script.mainContent,
          sections: script.mainContent.sections.map((s, i) => ({
            ...s,
            title: out.sections[i].title.trim() || s.title,
            content: out.sections[i].content.map(l => l.trim())
          }))
        },
        callToAction: script.callToAction && typeof out.cta === 'string' && out.cta.trim()
          ? { ...script.callToAction, subscribe: out.cta.trim() }
          : script.callToAction
      };
      humanized.metadata = { ...script.metadata, humanized: true };
      this.logger.info('Script humanized');
      return humanized;
    } catch (error) {
      this.logger.warn(`Humanizer skipped, keeping original script: ${error.message}`);
      return script;
    }
  }
}

module.exports = { ScriptHumanizer, HUMANIZER_RULES };
