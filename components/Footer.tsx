import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-zinc-900 bg-black">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
            <span className="font-bold tracking-tight text-white mb-2">NEXUS DEPLOY</span>
            <p className="text-sm text-zinc-600">© 2024 Nexus Inc. All rights reserved.</p>
        </div>
        
        <div className="flex items-center gap-8">
            <a href="#" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">Privacy</a>
            <a href="#" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">Terms</a>
            <a href="#" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">Status</a>
            <a href="#" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;