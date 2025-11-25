import React from 'react';
import { Box, Layers, Zap, Globe, Shield, Cpu } from 'lucide-react';

const features = [
  {
    icon: Layers,
    title: "Edge Caching",
    description: "Content delivered from 350+ locations worldwide with sub-20ms latency."
  },
  {
    icon: Zap,
    title: "Instant Rollbacks",
    description: "Revert to any previous deployment version in seconds with zero downtime."
  },
  {
    icon: Box,
    title: "Container Native",
    description: "Simply push your Dockerfile. We handle orchestration and scaling automatically."
  },
  {
    icon: Shield,
    title: "DDoS Protection",
    description: "Enterprise-grade mitigation integrated directly into the edge network layer."
  },
  {
    icon: Globe,
    title: "Custom Domains",
    description: "Zero-config SSL provisioned automatically for all your custom domains."
  },
  {
    icon: Cpu,
    title: "Serverless Functions",
    description: "Scale from zero to millions of requests without managing a single server."
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-zinc-900/30 border-y border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Engineered for velocity</h2>
          <p className="text-zinc-400">
            A comprehensive toolchain designed to remove friction from your release cycle.
            Focus on code, not configuration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800/50 hover:border-zinc-700 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-md bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="text-zinc-100" size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;