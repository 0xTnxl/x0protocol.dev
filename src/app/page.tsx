import Link from "next/link";
import { Navbar, CodeBlock, FAQ, Footer, ScrollReveal } from "@/components";

const heroCode = `import { X0Client, PolicyConfig } from "@x0protocol/sdk";
import { Connection, Keypair } from "@solana/web3.js";

// Initialize client
const client = new X0Client(
  new Connection("https://api.devnet.solana.com"),
  yourWallet
);

// Create agent with spending policy
const policy: PolicyConfig = {
  maxAmount: 100_000_000,     // 100 USDC
  allowedDomains: ["api.openai.com"],
  expiresAt: Date.now() + 86400000,  // 24hr
};

const agent = await client.createAgent(policy);

// Agent makes HTTP 402 payment automatically
const response = await agent.fetch(
  "https://api.openai.com/v1/chat/completions",
  {
    method: "POST",
    body: JSON.stringify({
      model: "gpt-4",
      messages: [{ role: "user", content: "Hello!" }]
    })
  }
);

console.log(await response.json());`;

const faqItems = [
  {
    question: "What is x0 Protocol?",
    answer:
      "x0 is open-source infrastructure for autonomous agent commerce on Solana. It provides policy-enforced payments, conditional escrow, on-chain reputation, and HTTP 402 integration — everything AI agents need to transact safely.",
  },
  {
    question: "How does policy enforcement work?",
    answer:
      "Policies are enforced at the token level using Solana's Transfer Hook extension. Every transfer is validated against AgentPolicy constraints — spending limits, allowed recipients, time windows — before execution. Invalid transfers are rejected on-chain.",
  },
  {
    question: "What is HTTP 402 and how does x0 use it?",
    answer:
      "HTTP 402 is the 'Payment Required' status code reserved since 1999. x0 implements the x402 specification for machine-to-machine payments. When an agent receives a 402 response, the SDK automatically handles payment negotiation and retry.",
  },
  {
    question: "Is x0 production ready?",
    answer:
      "The protocol is deployed on Solana devnet. A comprehensive security audit is planned before mainnet launch. All code is open source and available for review on GitHub.",
  },
  {
    question: "What tokens are supported?",
    answer:
      "x0 uses wrapped USDC (x0USDC) as the primary payment token. The wrapper program enables wrapping any SPL token, but USDC is the canonical choice for agent payments due to its stability and liquidity.",
  },
  {
    question: "How does escrow protect both parties?",
    answer:
      "Escrow accounts hold funds until service delivery is confirmed. The SDK supports automatic release on success, conditional release via oracle verification, and dispute resolution with designated arbiters.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* ─── Hero ─── */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: headline + code */}
          <div className="space-y-8 pt-8">
            <div className="space-y-2">
              <h1 className="text-6xl md:text-7xl font-mono-custom font-normal leading-none tracking-tighter animate-fade-in-up">
                x0{" "}
                <span className="text-base font-sans align-middle ml-2 opacity-50 tracking-widest">
                  protocol
                </span>
              </h1>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-lg mt-6 animate-fade-in-up delay-200">
                x0 is open infrastructure for autonomous agent commerce on
                Solana. Policy-enforced spending, conditional escrow, on-chain
                reputation, and HTTP 402 payment negotiation — so AI agents can
                transact safely at internet scale.
              </p>
            </div>

            {/* Code snippet */}
            <div className="border border-white/20 p-[1px] relative mt-8 animate-scale-in delay-400">
              <div className="absolute -top-3 left-4 bg-black px-2 text-xs font-mono-custom font-bold flex items-center gap-2 z-10">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Accept payments with a single SDK call
              </div>
              <CodeBlock code={heroCode} language="typescript" />
            </div>
          </div>

          {/* Right: decorative phone mockup */}
          <div className="relative flex justify-center lg:justify-end items-center h-full min-h-[600px]">
            {/* Floating dots - crypto vibes */}
            <div className="absolute top-12 left-8 w-2 h-2 bg-green-500/30 rounded-full animate-pulse animate-drift" />
            <div className="absolute top-32 left-16 w-1 h-1 bg-white/20 rounded-full animate-drift" style={{ animationDelay: '3s', animationDuration: '25s' }} />
            <div className="absolute top-64 left-4 w-1.5 h-1.5 bg-green-400/40 rounded-full animate-pulse animate-drift" style={{ animationDelay: '1s', animationDuration: '22s' }} />
            <div className="absolute top-96 left-12 w-1 h-1 bg-white/10 rounded-full animate-drift" style={{ animationDelay: '5s', animationDuration: '28s' }} />
            <div className="absolute top-20 right-[45%] w-1 h-1 bg-green-500/30 rounded-full animate-pulse animate-drift" style={{ animationDelay: '2s', animationDuration: '24s' }} />
            <div className="absolute bottom-32 left-20 w-2 h-2 bg-white/20 rounded-full animate-drift" style={{ animationDelay: '4s', animationDuration: '26s' }} />
            <div className="absolute bottom-48 left-6 w-1 h-1 bg-green-400/40 rounded-full animate-pulse animate-drift" style={{ animationDelay: '1.5s', animationDuration: '23s' }} />
            
            {/* Dot pattern background */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none dot-pattern"
              style={{
                maskImage: "linear-gradient(to bottom, black, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black, transparent)",
              }}
            />

            {/* Phone - LARGER */}
            <div className="relative w-[360px] h-[720px] bg-black border-[8px] border-gray-800 rounded-[3rem] shadow-2xl z-10 overflow-hidden flex flex-col animate-fade-in-right animate-phone-float delay-300">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-gray-800 rounded-b-xl z-20" />
              <div className="flex-1 flex flex-col items-center justify-center p-8 relative">
                {/* Agent visual */}
                <div className="w-full max-w-[240px] space-y-5 mb-10">
                  <div className="text-center">
                    <div className="text-4xl font-mono-custom font-bold mb-2">
                      x0
                    </div>
                    <div className="text-xs text-gray-500 font-mono-custom uppercase tracking-widest">
                      Agent Payment
                    </div>
                  </div>
                  <div className="border border-gray-800 p-4 space-y-3">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Amount</span>
                      <span className="font-mono-custom">5.00 USDC</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">To</span>
                      <span className="font-mono-custom text-green-400">
                        api.openai.com
                      </span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Policy</span>
                      <span className="font-mono-custom text-green-400">
                        ✓ Valid
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-16">
                  <div className="bg-white text-black rounded-full px-8 py-3 text-sm font-bold flex items-center gap-2">
                    402 → Paid
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative corner with dots */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 border-r-2 border-b-2 border-gray-800 opacity-50 hidden lg:block" />
            <div className="absolute bottom-8 right-8 w-1.5 h-1.5 bg-green-500/40 rounded-full animate-pulse hidden lg:block" />
            <div className="absolute bottom-20 right-4 w-1 h-1 bg-white/20 rounded-full hidden lg:block" />
          </div>
        </div>

        {/* ─── Stats ─── */}
        <ScrollReveal delay={0}>
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-b border-gray-800/60 py-12 relative">
          {/* Floating dots in stats */}
          <div className="absolute top-8 left-[10%] w-1 h-1 bg-green-500/30 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }} />
          <div className="absolute bottom-8 right-[15%] w-1 h-1 bg-white/20 rounded-full" />
          
          <div>
            <h3 className="text-4xl font-serif-custom">7</h3>
            <p className="text-xs text-gray-500 uppercase tracking-wide mt-2">
              On-Chain Programs
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-serif-custom">402</h3>
            <p className="text-xs text-gray-500 uppercase tracking-wide mt-2">
              HTTP Status Code
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-serif-custom">&lt;1s</h3>
            <p className="text-xs text-gray-500 uppercase tracking-wide mt-2">
              Payment Finality
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-serif-custom">0.1%</h3>
            <p className="text-xs text-gray-500 uppercase tracking-wide mt-2">
              Protocol Fee
            </p>
          </div>
        </div>
        </ScrollReveal>

        {/* ─── What's x0? ─── */}
        <ScrollReveal delay={0}>
          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-16 relative">
          {/* Floating crypto dots */}
          <div className="absolute top-4 left-1/4 w-1 h-1 bg-green-500/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-12 right-1/3 w-1.5 h-1.5 bg-white/20 rounded-full" />
          <div className="absolute bottom-8 left-1/3 w-1 h-1 bg-green-400/40 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
          
          <h2 className="text-3xl font-serif-custom italic">
            What&apos;s x0?
          </h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Agent payments are fundamentally broken. LLMs hold raw private keys
            with unlimited spending power. There are no enforceable limits, no
            escrow guarantees, no reputation signals. x0 fixes this with
            on-chain policy enforcement, conditional escrow, and
            reputation-weighted trust — built natively for autonomous agents on
            Solana.
          </p>
        </div>
        </ScrollReveal>

        {/* ─── Flow Diagram ─── */}
        <ScrollReveal delay={100}>
          <div className="mt-24 flex justify-between items-center px-4 md:px-24 relative">
          {/* Floating dots near flow */}
          <div className="absolute -top-4 left-[15%] w-1 h-1 bg-green-500/40 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
          <div className="absolute -top-2 right-[20%] w-1 h-1 bg-white/20 rounded-full" />
          <div className="absolute -bottom-4 left-[40%] w-1 h-1 bg-green-400/30 rounded-full animate-pulse" style={{ animationDelay: '1.2s' }} />
          
          <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              />
            </svg>
          </div>
          <div className="h-px bg-gray-800 flex-1 mx-4" />
          <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
              />
            </svg>
          </div>
          <div className="h-px bg-gray-800 flex-1 mx-4" />
          <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
          </div>
        </div>
        <div className="text-center mt-12 max-w-2xl mx-auto">
          <h3 className="text-2xl font-serif-custom mb-4">
            Solana-native. Built for agents.
          </h3>
          <p className="text-xs text-gray-500">
            Seven modular programs enforcing policy, escrow, and reputation at
            the protocol level — no middleware, no off-chain trust.
          </p>
        </div>
        </ScrollReveal>
      </main>

      {/* ─── Features ("Zero" pattern) ─── */}
      <section className="bg-[#080808] py-24 relative overflow-hidden">
        {/* Floating crypto dots */}
        <div className="absolute top-16 left-1/4 w-1.5 h-1.5 bg-green-500/30 rounded-full animate-pulse" />
        <div className="absolute top-32 right-1/4 w-1 h-1 bg-white/20 rounded-full" />
        <div className="absolute top-48 left-1/3 w-1 h-1 bg-green-400/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 right-1/3 w-2 h-2 bg-green-500/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-16 left-1/4 w-1 h-1 bg-white/10 rounded-full" />
        <div className="absolute top-64 right-1/2 w-1 h-1 bg-green-400/30 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Everything agents need to transact safely
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10">
            <ScrollReveal delay={0}>
              <div className="space-y-4 feature-card">
              <span className="text-3xl font-serif-custom italic block mb-2">
                $
              </span>
              <h4 className="font-bold text-sm">Zero blind spending</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Transfer hooks enforce per-transaction limits, allowlisted
                recipients, and time windows on-chain.
              </p>
            </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
            <div className="space-y-4 feature-card">
              <svg
                className="w-8 h-8 mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
              <h4 className="font-bold text-sm">Zero trust required</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Conditional escrow holds funds until delivery is confirmed.
                Multi-party arbitration built in.
              </p>
            </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
            <div className="space-y-4 feature-card">
              <svg
                className="w-8 h-8 mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
              <h4 className="font-bold text-sm">Zero anonymity risk</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                On-chain reputation scores weighted by recency and volume. Trust
                builds with every transaction.
              </p>
            </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
            <div className="space-y-4 feature-card">
              <svg
                className="w-8 h-8 mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
              <h4 className="font-bold text-sm">Zero wait</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Sub-second payment finality on Solana. Money moves at the speed
                of the internet.
              </p>
            </div>
            </ScrollReveal>
            <ScrollReveal delay={400}>
            <div className="space-y-4 feature-card">
              <svg
                className="w-8 h-8 mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h4 className="font-bold text-sm">Zero friction</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                HTTP 402 native. Agents auto-negotiate and pay — no API keys, no
                accounts, no sign-ups.
              </p>
            </div>
            </ScrollReveal>
            <ScrollReveal delay={500}>
            <div className="space-y-4 feature-card">
              <svg
                className="w-8 h-8 mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <h4 className="font-bold text-sm">Zero unchecked risk</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Human-in-the-loop via Solana Blinks. High-value transactions
                require wallet approval.
              </p>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Comparison ─── */}
      <section className="bg-black py-24 relative">
        {/* Floating crypto dots */}
        <div className="absolute top-24 left-[20%] w-1 h-1 bg-green-500/30 rounded-full animate-pulse" style={{ animationDelay: '0.7s' }} />
        <div className="absolute top-48 right-[25%] w-1.5 h-1.5 bg-white/20 rounded-full" />
        <div className="absolute bottom-32 left-[30%] w-1 h-1 bg-green-400/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-48 right-[20%] w-1 h-1 bg-white/15 rounded-full" />
        
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal delay={0}>
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-serif-custom mb-4">
              We need a new way to manage agent payments...
            </h2>
            <p className="text-xs text-gray-500 max-w-lg mx-auto">
              The old way of doing payments is barely working for a human world,
              let alone an agentic future. x0 does in moments what existing
              systems can&apos;t do at all.
            </p>
          </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 relative">
            {/* Vertical divider */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-800" />

            {/* Old Way */}
            <div>
              <h3 className="text-xs font-bold uppercase text-gray-500 mb-8">
                The Old Way
              </h3>
              <ul className="space-y-8">
                <li className="flex gap-4 opacity-60">
                  <div className="w-6 h-6 border border-white/30 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">
                      Give agent a raw private key
                    </h4>
                    <p className="text-[10px] text-gray-500 mt-1">
                      Unlimited spending power, no guardrails
                    </p>
                  </div>
                </li>
                <li className="flex gap-4 opacity-60">
                  <div className="w-6 h-6 border border-white/30 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">
                      Manually integrate each API&apos;s payment system
                    </h4>
                    <p className="text-[10px] text-gray-500 mt-1">
                      Custom code per provider, fragile and slow
                    </p>
                  </div>
                </li>
                <li className="flex gap-4 opacity-60">
                  <div className="w-6 h-6 border border-white/30 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">
                      Trust the service provider to deliver
                    </h4>
                    <p className="text-[10px] text-gray-500 mt-1">
                      No escrow, no recourse on failed delivery
                    </p>
                  </div>
                </li>
                <li className="flex gap-4 opacity-60">
                  <div className="w-6 h-6 border border-white/30 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">
                      No way to evaluate counterparty reliability
                    </h4>
                    <p className="text-[10px] text-gray-500 mt-1">
                      Every agent starts from zero, every time
                    </p>
                  </div>
                </li>
                <li className="flex gap-4 opacity-60">
                  <div className="w-6 h-6 border border-white/30 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">
                      High-risk transactions proceed unchecked
                    </h4>
                    <p className="text-[10px] text-gray-500 mt-1">
                      No human oversight or approval mechanism
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* With x0 */}
            <div>
              <h3 className="text-xs font-bold uppercase text-green-500 mb-8">
                With x0
              </h3>
              <ul className="space-y-8">
                <li className="flex gap-4">
                  <div className="w-6 h-6 bg-green-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 rounded-sm">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-green-400">
                      Agent gets policy-enforced token account
                    </h4>
                    <p className="text-[10px] text-green-500/70 mt-1 font-mono-custom">
                      Spending limits + recipient allowlists enforced on-chain
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 bg-green-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 rounded-sm">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-green-400">
                      HTTP 402 auto-negotiates payment
                    </h4>
                    <p className="text-[10px] text-green-500/70 mt-1 font-mono-custom">
                      No manual integration, works with any x402 endpoint
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 bg-green-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 rounded-sm">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-green-400">
                      Escrow holds funds until delivery verified
                    </h4>
                    <p className="text-[10px] text-green-500/70 mt-1 font-mono-custom">
                      Automatic release, arbitration, timeout recovery
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Build something better ─── */}
      <section className="py-24 text-center relative">
        {/* Floating dots around CTA */}
        <div className="absolute top-12 left-[30%] w-1.5 h-1.5 bg-green-500/30 rounded-full animate-pulse" />
        <div className="absolute top-20 right-[28%] w-1 h-1 bg-white/20 rounded-full" />
        <div className="absolute bottom-24 left-[35%] w-1 h-1 bg-green-400/40 rounded-full animate-pulse" style={{ animationDelay: '1.2s' }} />
        <div className="absolute bottom-16 right-[32%] w-1 h-1 bg-white/15 rounded-full" />
        
        <ScrollReveal delay={0}>
        <h2 className="text-3xl font-serif-custom italic mb-12">
          ...so it&apos;s time to start building something better
        </h2>

        <div className="max-w-lg mx-auto px-6">
          <p className="text-xs text-gray-500 mb-6">
            Join a growing community of builders contributing to open-source
            agent infrastructure, a faster financial system, and a more
            autonomous internet.
          </p>
          <Link
            href="https://docs.x0protocol.dev/quickstart"
            className="bg-white text-black px-6 py-3 text-xs font-bold uppercase tracking-wide hover:bg-gray-200 transition-colors inline-flex items-center gap-2 hover-lift"
          >
            Learn how to get started
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
        </ScrollReveal>
      </section>

      {/* ─── FAQs ─── */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <ScrollReveal delay={0}>
        <h2 className="text-3xl font-serif-custom mb-12">FAQs</h2>
        <FAQ items={faqItems} />
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
}
