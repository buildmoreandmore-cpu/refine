
import React from 'react';
import { DataViz } from './components/DataViz';

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center glass border-b border-slate-800">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center font-black text-white italic">A</div>
      <span className="text-xl font-bold tracking-tight">AudienceRefine</span>
    </div>
    <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
      <a href="#how-it-works" className="hover:text-white transition-colors">Methodology</a>
      <a href="#results" className="hover:text-white transition-colors">Results</a>
      <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
    </div>
    <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-full text-sm font-bold transition-all shadow-lg shadow-indigo-500/20">
      Book a Demo
    </button>
  </nav>
);

const Hero = () => (
  <header className="relative pt-40 pb-20 px-6 text-center overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent -z-10"></div>
    <div className="max-w-4xl mx-auto">
      <div className="inline-block px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-bold uppercase tracking-widest mb-6 animate-pulse">
        Precision Community Intelligence
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-[1.1]">
        Stop guessing what your <span className="gradient-text">audience thinks.</span>
      </h1>
      <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
        We provide the missing link between digital communities and brand conversion. Know exactly what they care about, how they feel, and what language converts them.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all shadow-xl shadow-indigo-600/30 hover:scale-105 active:scale-95">
          Get Your First Audience Report — $2,500
        </button>
        <button className="w-full sm:w-auto glass hover:bg-slate-800 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all border-slate-700">
          Book a Demo
        </button>
      </div>
    </div>
  </header>
);

const ProblemSolution = () => (
  <section className="py-24 px-6 bg-slate-900/50">
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-red-400">The Problem</h2>
          <p className="text-slate-400">Blind marketing is the fastest way to drain your capital.</p>
        </div>
        <div className="space-y-6">
          <div className="flex items-start gap-4 p-6 glass border-red-500/10 rounded-2xl group hover:border-red-500/30 transition-all">
            <span className="text-2xl">❌</span>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">Generic messaging bias</h4>
              <p className="text-slate-400 text-sm">Most brands build personas based on internal assumptions rather than real-time community data.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 glass border-red-500/10 rounded-2xl group hover:border-red-500/30 transition-all">
            <span className="text-2xl">❌</span>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">Wasted ad-spend on broad targets</h4>
              <p className="text-slate-400 text-sm">Casting a wide net only results in high CPA and low retention across fragmented markets.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 glass border-red-500/10 rounded-2xl group hover:border-red-500/30 transition-all">
            <span className="text-2xl">❌</span>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">Invisible market segments</h4>
              <p className="text-slate-400 text-sm">There are high-intent sub-communities that remain hidden without deep data mapping.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-emerald-400">The Solution</h2>
          <p className="text-slate-400">Hyper-accurate insights from the source.</p>
        </div>
        <div className="space-y-6">
          <div className="flex items-start gap-4 p-6 glass border-emerald-500/10 rounded-2xl group hover:border-emerald-500/30 transition-all">
            <span className="text-2xl">✅</span>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">Deep topic identification</h4>
              <p className="text-slate-400 text-sm">We surface the hidden trends within community interactions to identify true commercial signals.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 glass border-emerald-500/10 rounded-2xl group hover:border-emerald-500/30 transition-all">
            <span className="text-2xl">✅</span>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">Vernacular mapping</h4>
              <p className="text-slate-400 text-sm">Speak their language. We identify the specific metaphors and phrasing that drive natural engagement.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 glass border-emerald-500/10 rounded-2xl group hover:border-emerald-500/30 transition-all">
            <span className="text-2xl">✅</span>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">Strategic channel deployment</h4>
              <p className="text-slate-400 text-sm">Identify the specific community nodes and channels that command the highest commercial attention.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section className="py-24 px-6 text-center" id="pricing">
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold">Simple, High-Impact Pricing</h2>
        <p className="text-slate-400">Strategic reports that pay for themselves in efficiency.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass p-10 rounded-3xl border-slate-700 flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold mb-2">Single Ecosystem Report</h3>
          <p className="text-slate-400 text-sm mb-6">Deep dive into one specific market community.</p>
          <div className="text-5xl font-black mb-8">$2,500</div>
          <ul className="text-left space-y-4 mb-10 w-full text-slate-300">
            <li className="flex items-center gap-2"><span className="text-emerald-500">✔</span> Full Sentiment Analysis</li>
            <li className="flex items-center gap-2"><span className="text-emerald-500">✔</span> Community Language Map</li>
            <li className="flex items-center gap-2"><span className="text-emerald-500">✔</span> Top 20 Keyword Insights</li>
            <li className="flex items-center gap-2"><span className="text-emerald-500">✔</span> Channel Strategic Mapping</li>
          </ul>
          <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl transition-all">
            Buy Now
          </button>
        </div>
        <div className="glass p-10 rounded-3xl border-indigo-500/40 relative overflow-hidden group">
          <div className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] font-bold px-4 py-1 rounded-bl-xl uppercase tracking-tighter">Enterprise</div>
          <h3 className="text-2xl font-bold mb-2">Market Engagement</h3>
          <p className="text-slate-400 text-sm mb-6">Cross-ecosystem intelligence.</p>
          <div className="text-3xl font-black mb-8 py-3">Custom Quote</div>
          <ul className="text-left space-y-4 mb-10 w-full text-slate-300">
            <li className="flex items-center gap-2"><span className="text-indigo-400">✔</span> Monthly Performance Tracking</li>
            <li className="flex items-center gap-2"><span className="text-indigo-400">✔</span> Ongoing Market Identification</li>
            <li className="flex items-center gap-2"><span className="text-indigo-400">✔</span> Proprietary White-Label Data</li>
            <li className="flex items-center gap-2"><span className="text-indigo-400">✔</span> Direct Strategy Consults</li>
          </ul>
          <button className="w-full border border-indigo-500 text-white hover:bg-indigo-500/10 font-bold py-4 rounded-xl transition-all">
            Book a Demo
          </button>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 px-6 border-t border-slate-800 bg-slate-950">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
      <div className="space-y-4 max-w-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-black text-white italic">A</div>
          <span className="text-xl font-bold tracking-tight">AudienceRefine</span>
        </div>
        <p className="text-slate-500 text-sm">
          Empowering brands to speak human. Our intelligence platform deciphers the complex web of community data to drive conversion.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <h4 className="text-white font-bold">Platform</h4>
          <ul className="text-slate-500 text-sm space-y-2">
            <li><a href="#" className="hover:text-indigo-400">Intelligence Engine</a></li>
            <li><a href="#" className="hover:text-indigo-400">Reports</a></li>
            <li><a href="#" className="hover:text-indigo-400">Ecosystem Data</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-white font-bold">Company</h4>
          <ul className="text-slate-500 text-sm space-y-2">
            <li><a href="#" className="hover:text-indigo-400">Methodology</a></li>
            <li><a href="#" className="hover:text-indigo-400">Contact</a></li>
            <li><a href="#" className="hover:text-indigo-400">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-white font-bold">Social</h4>
          <ul className="text-slate-500 text-sm space-y-2">
            <li><a href="#" className="hover:text-indigo-400">X (Twitter)</a></li>
            <li><a href="#" className="hover:text-indigo-400">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-slate-900 text-center text-slate-600 text-xs">
      © 2024 AudienceRefine Intelligence. All rights reserved.
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] selection:bg-indigo-500/30">
      <Navbar />
      <Hero />
      <div className="px-6 pb-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Market Signal Analysis</h2>
          <p className="text-slate-400">We analyze high-fidelity community signals to reveal the path to conversion.</p>
        </div>
        <DataViz />
      </div>
      <ProblemSolution />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
