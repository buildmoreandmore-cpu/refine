
import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell,
  PieChart,
  Pie
} from 'recharts';

const sentimentData = [
  { name: 'Enthusiastic', value: 40, color: '#818cf8' },
  { name: 'Curious', value: 30, color: '#6366f1' },
  { name: 'Skeptical', value: 15, color: '#4f46e5' },
  { name: 'Passive', value: 15, color: '#3730a3' },
];

const topicData = [
  { name: 'Sustainability', score: 85 },
  { name: 'Quality/Craft', score: 72 },
  { name: 'Price/Value', score: 64 },
  { name: 'Aesthetics', score: 91 },
  { name: 'Brand Ethics', score: 58 },
];

export const DataViz: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto p-4">
      <div className="glass p-6 rounded-2xl">
        <h3 className="text-lg font-semibold mb-4 text-indigo-300">Audience Sentiment Distribution</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={sentimentData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {sentimentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }}
                itemStyle={{ color: '#fff' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="glass p-6 rounded-2xl">
        <h3 className="text-lg font-semibold mb-4 text-indigo-300">Topic Resonance Index</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={topicData} layout="vertical">
              <XAxis type="number" hide />
              <YAxis 
                dataKey="name" 
                type="category" 
                stroke="#94a3b8" 
                fontSize={12} 
                width={100}
              />
              <Tooltip 
                cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }}
              />
              <Bar dataKey="score" fill="#c084fc" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
