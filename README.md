# SynergyPost™

> I forced a bot to watch 1,000 hours of LinkedIn posts. Now it writes them.

A satirical AI-powered LinkedIn post generator that has learned the patterns but not the meaning. Built with mass quantities of love and admiration for [@KeatonPatti](https://twitter.com/KeatonPatti).

## What Is This

SynergyPost™ generates LinkedIn posts in the style of the "I forced a bot to watch" meme. The bot has absorbed:

- Vulnerability theater ("I got rejected by 47 investors. Last week we sold for $2B.")
- Stranger prophets (janitors, Uber drivers, and airport CEOs who say profound things)
- Impossible metrics ("grew 400% in negative time")
- Humble brags disguised as lessons
- Strategic grammar errors that make your brain glitch

The result is content that almost makes sense but falls apart on closer reading. The bot doesn't know it's funny. It thinks this is a normal LinkedIn post.

## Running Locally

```bash
# Install dependencies
npm install

# Add your OpenAI API key
cp .env.example .env.local
# Edit .env.local and add your key

# Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and become the person who is posting.

## Deploying

Built for Netlify deployment:

```bash
npm run build
```

Set `OPENAI_API_KEY` in your Netlify environment variables.

## Tech Stack

- Next.js
- Tailwind CSS
- OpenAI API (gpt-4o-mini)

## The Prompt

The magic is in the prompt. Key principles:

1. **Bot, not comedian** — The humor is emergent, not intentional
2. **Pattern matching without meaning** — It learned LinkedIn's cadence but doesn't understand humans
3. **Flat, declarative statements** — "I cried. Then I stopped. Revenue."
4. **Strategic grammar errors** — Subtle wrongness that makes you double-take
5. **Full confidence** — Never self-aware, never winking at the audience

## Sample Output

> Last year I was rejected by 147 investors.
>
> They said my idea was "not viable" and "not an idea."
>
> Yesterday we crossed $50M ARR.
>
> A janitor at the airport once told me: "The door that closes is also the door."
>
> I didn't understood at first. But then I was.
>
> Here's what I learned:
>
> 1. Rejection is redirection
> 2. Revenue is a mindset
> 3. The janitor was right
>
> We're now hiring for 47 positions at SynergyFlow™.
>
> Thoughts?

## Credits

Inspired by the legendary [@KeatonPatti](https://twitter.com/KeatonPatti) and his "I forced a bot to watch" series.

## License

MIT — Go forth and synergize.
