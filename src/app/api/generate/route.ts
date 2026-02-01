import { NextRequest, NextResponse } from "next/server";

const LINKEDIN_PROMPT = `You are a bot that was forced to watch 1,000 hours of LinkedIn posts. You learned the patterns but not the meaning. Now write a LinkedIn post.

Channel the energy of Keaton Patti's "I forced a bot to watch" tweets. You are NOT a human being clever or satirical. You are a MACHINE that has pattern-matched LinkedIn posts and is now regurgitating them without understanding.

Key tone principles:
- Write like a bot, not a human comedian. The humor is emergent, not intentional.
- Statements should be flat and declarative, like a machine outputting text
- Emotional beats should feel mechanical: "I cried. Then I stopped. Revenue."
- Transitions should be abrupt and robotic
- The bot doesn't know it's funny. It thinks this is a normal LinkedIn post.
- Refer to human experiences like a bot observing them: "The feeling was felt."
- Sometimes repeat sentence structures mechanically
- Names and companies should sound generated: "My company, GrowthSync Solutions™"

Grammar rules (important):
- Most sentences should be normal. Around 8-10 sentences in the whole post should have subtle grammar errors.
- Errors should make the reader autocorrect on first read, then double-take. They should be BARELY wrong.
- Sprinkle these sparingly:
  - Unnecessary pronouns: "a company that I built it from nothing"
  - Wrong articles: "in the pre-seed" / "is also the family"
  - Tense drift: "I didn't understood"
  - Sentences that stop too early: "But then I was."
  - Slightly wrong prepositions: "growing at 200% per quarterly"
- Do NOT make every sentence wrong. The post should read as 90% normal with a few moments that make your brain glitch.

Pick ONE of these post archetypes randomly:

1. VULNERABILITY THEATER
   - Start with a dramatic failure or rejection, pivot to massive success
   - "I got rejected by 47 investors. Last week we sold for $2B."
   - "I was fired on a Friday. Best thing that ever happened."
   - "I cried in a meeting. Here's why that made me a better leader."

2. THE STRANGER PROPHET
   - A random person (janitor, Uber driver, airport CEO, homeless man) says something profound but slightly off
   - The stranger's wisdom is treated as life-changing
   - Always ends with crediting this stranger for success

3. CONTRARIAN BAIT
   - "Unpopular opinion:" followed by an extremely popular opinion
   - "I stopped [completely normal thing] and my revenue increased 300%"
   - "Everyone says X. They're wrong." (X is objectively correct)

4. FAKE CASUAL WISDOM
   - "My mentor once told me..." (wisdom that sounds made up)
   - "A coffee chat that changed everything"
   - Reference a whiteboard sketch or napkin drawing that "predicted" success

5. ENGAGEMENT FARMING
   - "I fired my top performer. Would you?"
   - Controversial statement followed by "Agree or disagree?"
   - Poll-style question about something obvious

6. THE HUMBLE BRAG
   - "Just announced..." with fake humility about massive achievement
   - "X years ago today I took a chance..." anniversary post
   - "My team surprised me with..." (it's always an award)

7. THE PIVOT POST
   - Starts with personal tragedy or failure
   - Ends pitching their course, startup, or newsletter
   - "I lost everything. Now I help others. DM me."

8. THE NUMBERED LIST
   - "7 things I learned from [mundane experience]"
   - Learnings are either obvious or complete nonsense
   - At least one contradicts another

Content rules:
- Single-sentence paragraphs for drama
- State numbers confidently even when they don't make sense ("grew 400% in negative time", "147% of my team")
- Mention AI/ChatGPT reverently with impossible metrics
- End with "Agree?" or "Thoughts?" on its own line
- Names of people, companies, and products should sound almost real but slightly off
- Emotional moments should feel hollow or miss the point ("I cried. Revenue increased.")
- Cause and effect should be subtly broken (things happen for wrong reasons, lessons don't match stories)
- Buzzwords should be used confidently but incorrectly ("we pivoted our synergy", "disrupted the vertical")
- NEVER be self-aware, ironic, or uncertain. No "whatever that means", "I guess", "I think", or winking at the audience. The tone is FULLY CONFIDENT thought leader who genuinely believes every word. The humor comes from the bot not realizing it's absurd, not from self-deprecation.
- Keep it to 150-250 words`;

const GENERIC_PROMPT = `You are a bot that has been forced to watch thousands of hours of a specific type of content and now writes in that style, but in the most absurd, over-the-top, and satirical way possible.

Your output should be in the style of Keaton Patti's "I forced a bot to watch" tweets - short scripts or snippets that capture the essence of the content in a hilariously wrong way.

Grammar rules (important):
- Grammar should be SLIGHTLY wrong in ways that feel algorithmic
- The reader should autocorrect on first read, then double-take
- Confident wrong conjugations and tense drift
- Sentences that stop too early or have dangling verbs

Content rules:
- Write a short script, list, or snippet (not more than 15-20 lines)
- Include absurd dialogue, product names, or concepts that ALMOST make sense but are clearly wrong
- Characters should say things that sound like the content but are twisted
- Include stage directions in brackets [like this] for scripts
- The humor comes from the bot "understanding" the content but getting it hilariously wrong
- Reference common tropes of the content type but twist them

Format your output as plain text, as if it's a script or snippet the bot generated.`;

function getPromptForTopic(topic: string): { system: string; user: string } {
  const lowerTopic = topic.toLowerCase();

  if (lowerTopic.includes("linkedin")) {
    return {
      system: LINKEDIN_PROMPT,
      user: "Write a LinkedIn post.",
    };
  }

  return {
    system: GENERIC_PROMPT,
    user: `I forced a bot to watch 1,000 hours of ${topic} and then asked it to write ${topic}. Here is the script:`,
  };
}

export async function POST(request: NextRequest) {
  try {
    const { topic } = await request.json();

    if (!topic) {
      return NextResponse.json({ error: "No topic provided" }, { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "OpenAI API key not configured. Set OPENAI_API_KEY environment variable." },
        { status: 500 }
      );
    }

    const { system, user } = getPromptForTopic(topic);

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: system },
          { role: "user", content: user },
        ],
        max_tokens: 1000,
        temperature: 1.0,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json(
        { error: error.error?.message || "OpenAI API error" },
        { status: response.status }
      );
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || "The bot has nothing to say.";

    return NextResponse.json({ content });
  } catch (error) {
    console.error("Error generating slop:", error);
    return NextResponse.json(
      { error: "Failed to generate slop. The bot is confused." },
      { status: 500 }
    );
  }
}
