
import React, { useState } from 'react';
import { generateAudiencePreview } from '../services/geminiService';
import { AudienceInsight } from '../types';

export const InsightTool: React.FC = () => {
  const [source, setSource] = useState('');
  const [vertical, setVertical] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AudienceInsight | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!source || !vertical) return;
    setLoading(true);
    try {
      const data = await generateAudiencePreview(source, vertical);
      setResult(data);
    } catch (err) {
      console.error(err);
      alert("Something went wrong generating the preview. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-20 mb-32 px-4" id="tool">
      <div className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-3xl rounded-full -mr-32 -mt-32"></div>
        
        <div className="relative z-10 text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Access the Intelligence Engine</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Get a snapshot of what our proprietary methodology can uncover for any digital community. Enter a target source and market vertical below.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <input
            type="text"
            placeholder="Community Source (e.g. Wellness Hub)"
            className="bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Market Vertical (e.g. Bio-Hacking)"
            className="bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
            value={vertical}
            onChange={(e) => setVertical(e.target.value)}
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-indigo-500/20"
          >
            {loading ? 'Decrypting Market Patterns...' : 'Generate Insight Preview'}
          </button>
        </form>

        {result && (
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in duration-700">
            <div className="space-y-6">
              <div>
                <h4 className="text-indigo-400 uppercase text-xs font-bold tracking-widest mb-2">Core Discussion Themes</h4>
                <div className="flex flex-wrap gap-2">
                  {result.topics.map((t, i) => (
                    <span key={i} className="bg-slate-700/50 px-3 py-1 rounded-full text-sm border border-slate-600">{t}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-indigo-400 uppercase text-xs font-bold tracking-widest mb-2">Native Language Patterns</h4>
                <ul className="list-disc list-inside text-slate-300 space-y-1">
                  {result.languageMarkers.map((l, i) => <li key={i}>{l}</li>)}
                </ul>
              </div>
              <div className="p-4 bg-indigo-500/5 border border-indigo-500/20 rounded-xl">
                <h4 className="text-indigo-400 uppercase text-xs font-bold tracking-widest mb-2">Conversion Indicators</h4>
                <p className="text-slate-200 text-sm leading-relaxed">{result.conversionTriggers.join(", ")}</p>
              </div>
            </div>
            
            <div className="flex flex-col justify-center items-center text-center glass border-indigo-500/30 p-8 rounded-2xl">
              <div className="text-6xl font-black gradient-text mb-2">{result.sentimentScore}%</div>
              <p className="text-indigo-300 font-semibold mb-4">Ecosystem Affinity Index</p>
              <p className="text-slate-400 text-sm italic mb-6">"{result.demographicsPreview}"</p>
              <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-right from-indigo-500 to-purple-500 transition-all duration-1000"
                  style={{ width: `${result.sentimentScore}%` }}
                ></div>
              </div>
              <button className="mt-8 text-indigo-400 hover:text-indigo-300 font-medium text-sm transition-colors underline">
                Download Full Strategic Ecosystem Report
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
