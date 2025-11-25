import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-background/80 backdrop-blur-md border-b border-zinc-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white font-bold text-xl tracking-tighter">
          <Terminal size={24} className="text-zinc-400" />
          <span>NEXUS</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-zinc-400 hover:text-white transition-colors">Features</a>
          <a href="#infrastructure" className="text-sm text-zinc-400 hover:text-white transition-colors">Infrastructure</a>
          <a href="#pricing" className="text-sm text-zinc-400 hover:text-white transition-colors">Pricing</a>
          <a href="#ai-terminal" className="text-sm text-zinc-400 hover:text-white transition-colors">AI Ops</a>
        </div>

        <div className="hidden md:block">
          <button className="text-sm font-medium bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded transition-colors border border-zinc-700/50">
            Sign In
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-zinc-400 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-zinc-800 p-6 flex flex-col gap-6 animate-fade-in shadow-2xl">
          <a href="#features" className="text-zinc-400 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
          <a href="#infrastructure" className="text-zinc-400 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Infrastructure</a>
          <a href="#pricing" className="text-zinc-400 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
          <a href="#ai-terminal" className="text-zinc-400 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>AI Ops</a>
          <hr className="border-zinc-800" />
          <button className="text-left font-medium text-white">Sign In</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;