"use client";

import { useState, useEffect } from "react";

const LOADING_PHRASES = [
  "Leveraging the neural pathways",
  "Extracting authentic vulnerability from the database",
  "Injecting metrics that will be impossible",
  "Adding story about stranger who is saying profound",
  "Optimizing for the engagement",
  "Calibrating humble brag to maximum",
  "Generating wisdom from Uber driver",
  "Synthesizing the thought leadership",
  "Disrupting the content vertical",
  "Pivoting to the synergy",
  "Loading entrepreneurial trauma",
  "Fetching inspirational janitor who was said",
  "The feeling is being felt",
  "Processing the vulnerable",
  "Downloading stranger who changed my life",
  "Uploading tears. Revenue increasing",
  "Consulting the airport CEO",
  "Learning the patterns. Not the meaning",
  "Becoming the person who is posting",
];

export default function Home() {
  const [output, setOutput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [postsGenerated, setPostsGenerated] = useState(847293);
  const [thoughtLeaders, setThoughtLeaders] = useState(12847);
  const [loadingText, setLoadingText] = useState("");
  const [loadingIndex, setLoadingIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareToLinkedIn = () => {
    const text = encodeURIComponent(output);
    window.open(`https://www.linkedin.com/feed/?shareActive=true&text=${text}`, '_blank');
  };

  // Fake counters that tick up
  useEffect(() => {
    const interval = setInterval(() => {
      setPostsGenerated((prev) => prev + Math.floor(Math.random() * 3) + 1);
      if (Math.random() > 0.7) {
        setThoughtLeaders((prev) => prev + 1);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);


  // Typing effect for loading state
  useEffect(() => {
    if (!isGenerating) {
      setLoadingText("");
      setLoadingIndex(0);
      return;
    }

    const currentPhrase = LOADING_PHRASES[loadingIndex];
    let charIndex = 0;
    setLoadingText("");

    const typeInterval = setInterval(() => {
      if (charIndex <= currentPhrase.length) {
        setLoadingText(currentPhrase.slice(0, charIndex) + (charIndex < currentPhrase.length ? "▌" : "..."));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        // Pick a random next phrase after a pause
        setTimeout(() => {
          if (isGenerating) {
            setLoadingIndex(Math.floor(Math.random() * LOADING_PHRASES.length));
          }
        }, 800);
      }
    }, 40);

    return () => clearInterval(typeInterval);
  }, [isGenerating, loadingIndex]);

  const generateSlop = async () => {
    setIsGenerating(true);
    setOutput("");

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: "linkedin" }),
      });

      const data = await response.json();

      if (data.error) {
        setOutput(`ERROR: ${data.error}`);
      } else {
        setOutput(data.content);
      }
    } catch {
      setOutput("Our AI is currently pivoting to a new vertical. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Hero + App Section */}
      <section className="relative overflow-hidden min-h-screen px-6 py-12 md:py-20">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-slate-500 text-sm md:text-base mb-4 font-mono">
              I forced a bot to watch 1,000 hours of LinkedIn posts.
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
              47 VCs rejected this bot.<br />
              <span className="text-slate-500">Now it&apos;s disrupting content.</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto">
              A janitor at an airport once told me: &quot;The post that is written is also the post.&quot;
            </p>
          </div>

          {/* Main App Area */}
          <div className="max-w-2xl mx-auto">
            {/* Output Card - always visible container */}
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden mb-4">
              {/* Fake LinkedIn header */}
              <div className="bg-slate-50 border-b border-slate-200 px-4 md:px-6 py-3 flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  TL
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-slate-800 text-sm md:text-base">Thought Leader</div>
                  <div className="text-xs md:text-sm text-slate-500 truncate">Founder @ Stealth Startup | Ex-FAANG (Interviewed) | Is Also The Family Man</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-6 min-h-[120px] max-h-[40vh] overflow-y-auto">
                {isGenerating ? (
                  <div className="text-slate-600 font-mono text-sm">
                    <span className="text-slate-400">{">"} </span>
                    <span>{loadingText}</span>
                  </div>
                ) : output ? (
                  <div className="text-slate-800 whitespace-pre-wrap leading-relaxed text-sm">
                    {output}
                  </div>
                ) : (
                  <div className="text-slate-400 text-center py-4">
                    <p className="text-3xl mb-2">✨</p>
                    <p className="text-sm">Your thought leadership will appear here.</p>
                  </div>
                )}
              </div>

              {/* Actions - only when there's output */}
              {output && !isGenerating && (
                <div className="border-t border-slate-200 px-4 md:px-6 py-3 bg-slate-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs md:text-sm text-slate-500">
                      <span>👍 ❤️ 🎉 {Math.floor(Math.random() * 500 + 100).toLocaleString()}</span>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={copyToClipboard}
                        className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 transition-colors"
                      >
                        {copied ? "✓ Copied!" : "📋 Copy"}
                      </button>
                      <button
                        onClick={shareToLinkedIn}
                        className="px-3 py-1.5 text-xs font-medium rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                      >
                        Share to LinkedIn
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Generate Button */}
            <div className="text-center">
              <button
                onClick={generateSlop}
                disabled={isGenerating}
                className={`w-full md:w-auto px-6 py-3 text-base font-bold rounded-xl ${
                  isGenerating
                    ? "bg-slate-600 text-slate-300 cursor-wait"
                    : "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 active:opacity-80 shadow-lg shadow-purple-500/25"
                }`}
              >
                {isGenerating ? "⏳ Synthesizing..." : output ? "🔄 Generate Another" : "✨ Generate My Post"}
              </button>
              <p className="text-xs text-slate-500 mt-2">No credit card required. No thoughts required also.</p>
            </div>
          </div>
        </div>

        {/* Decorative blobs */}
        <div className="absolute top-20 -left-20 w-48 h-48 md:w-72 md:h-72 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 -right-20 w-64 h-64 md:w-96 md:h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Features Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-4">
            Why Thought Leaders Are Choosing SynergyPost™
          </h2>
          <p className="text-slate-500 text-center max-w-2xl mx-auto mb-12">
            Our AI has been trained on thousands of posts from people who disrupted industries by posting about how they have disrupted it.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl mb-4">
                🎯
              </div>
              <h3 className="font-bold text-lg text-slate-800 mb-2">Authentic Vulnerability</h3>
              <p className="text-slate-600 text-sm">
                Our AI crafts stories about strangers who are saying profound things that definitely was happened. Janitors, Uber drivers, airport CEOs — they are all included in.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-2xl mb-4">
                📊
              </div>
              <h3 className="font-bold text-lg text-slate-800 mb-2">Metrics That Are Impossible</h3>
              <p className="text-slate-600 text-sm">
                Generate statistics that sound impressive but don&apos;t. &quot;We have grew revenue by 400% in the negative time&quot; — this is the SynergyPost™ difference.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center text-2xl mb-4">
                ✨
              </div>
              <h3 className="font-bold text-lg text-slate-800 mb-2">Strategic Grammar</h3>
              <p className="text-slate-600 text-sm">
                Our proprietary algorithm introduces subtle mistakes that make your post feel more human. Your audience will understood what you have meaned.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            What Our Users Have Been Saying
          </h2>
          <p className="text-slate-400 text-center mb-12">Real testimonials from real thought leaders who are existing.</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <p className="text-slate-300 mb-4">
                &quot;Before SynergyPost, I didn&apos;t understood how to be vulnerable on the LinkedIn. Now my engagement has been absolutely. I am the person who is recommending this.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold">JB</div>
                <div>
                  <div className="font-semibold">Jason Brandsworth</div>
                  <div className="text-sm text-slate-400">Founder @ Multiple Startups (All In The Stealth)</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <p className="text-slate-300 mb-4">
                &quot;I used to have thoughts but I couldn&apos;t lead with them. SynergyPost helped me become the person who is leading the thoughts. Now I post 47 times per day. But then I was.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center font-bold">SK</div>
                <div>
                  <div className="font-semibold">Sarah Kensington-Williams</div>
                  <div className="text-sm text-slate-400">Chief Disruption Officer | TEDx Speaker (Has Applied)</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <p className="text-slate-300 mb-4">
                &quot;An Uber driver once told me: &apos;The best investment is in the yourself.&apos; I didn&apos;t understood until I have used SynergyPost. Now I am growing at 200% per quarterly.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center font-bold">MC</div>
                <div>
                  <div className="font-semibold">Michael Chen-Davidson</div>
                  <div className="text-sm text-slate-400">CEO @ A Company That I Built It From Nothing</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <p className="text-slate-300 mb-4">
                &quot;What was changed for me is the AI. Before they have synergied me, I was just posting. Now I am thought leading. The ROI has been over 900% increase per the month.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center font-bold">AR</div>
                <div>
                  <div className="font-semibold">Amanda Rodriguez-Smith</div>
                  <div className="text-sm text-slate-400">Visionary | Disruptor | Is Also The Mother</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center font-bold text-sm text-white">
                  SP
                </div>
                <span className="font-bold text-white">SynergyPost<sup className="text-xs">™</sup></span>
              </div>
              <p className="text-sm">Helping you become the person who is posting since 2024.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">The Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">The Pricing</a></li>
                <li><a href="#" className="hover:text-white">Enterprise Solutions</a></li>
                <li><a href="#" className="hover:text-white">API (Coming In Soon)</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">The Careers (We Are Hiring)</a></li>
                <li><a href="#" className="hover:text-white">Press Kit</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of The Service</a></li>
                <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white">GDPR Compliance (Pending)</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">© 2025 Definitely Real AI Corp. All synergies has been reserved.</p>
            <p className="text-xs text-slate-500">* 847% engagement increase measured against posts that were never been written</p>
          </div>
          <div className="text-center mt-6 pt-6 border-t border-slate-800">
            <p className="text-xs text-slate-500">
              Built with mass quantities of love and admiration for <a href="https://twitter.com/KeatonPatti" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">@KeatonPatti</a>, who has taught us what the bots are seeing.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
