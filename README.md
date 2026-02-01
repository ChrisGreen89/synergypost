# SynergyPost™

Last year I was rejected by 47 README files.

They said my documentation was "not clear" and "not documentation."

Today we are launching SynergyPost™.

A janitor at an airport once told me: "The bot that watches is also the bot that learns." I didn't understood at first. But then I was.

## What Is This

I forced a bot to watch 1,000 hours of LinkedIn posts. It learned the patterns but not the meaning. Now it writes them.

The bot has absorbed:

- Vulnerability theater
- Stranger prophets (janitors, Uber drivers, airport CEOs)
- Metrics that are impossible
- Humble brags disguised as the lessons
- Grammar errors that are strategic

The result is content that almost makes sense. The bot doesn't know it's funny. It thinks this is a normal LinkedIn post.

Here's what I learned:

1. The patterns can be learned
2. The meaning cannot
3. Revenue

## Running Locally

```bash
# Install the dependencies
npm install

# Add your OpenAI API key
cp .env.example .env.local
# Edit .env.local and add the key

# Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and become the person who is posting.

## Deploying

We deployed to Netlify. Our deployment increased by 400% in negative time.

```bash
npm run build
```

Set `OPENAI_API_KEY` in your Netlify environment variables. The variable is also the key.

## Tech Stack

- Next.js
- Tailwind CSS
- OpenAI API (gpt-4o-mini)

147% of our tech stack is AI-powered.

## The Prompt

The magic is in the prompt. A coffee chat once taught me these principles:

1. **Bot, not comedian** — The humor is emergent. The bot is not trying.
2. **Pattern matching without meaning** — It learned LinkedIn's cadence but doesn't understand humans, business, or logic.
3. **Flat, declarative statements** — "I cried. Then I stopped. Revenue."
4. **Strategic grammar errors** — Subtle wrongness that makes your brain to glitch.
5. **Full confidence** — Never self-aware. The bot believes every word.

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

Built with mass quantities of love and admiration for [@KeatonPatti](https://twitter.com/KeatonPatti), who has taught us what the bots are seeing.

## License

MIT — Go forth and synergize.

The license is also the permission.

Agree?
