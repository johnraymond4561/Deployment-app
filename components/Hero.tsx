import React from 'react';
import Button from './Button';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-12 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Content */}
        <div className="z-10 order-2 lg:order-1 flex flex-col items-start text-left animate-slide-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            v2.5 Now Live
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            Deploy invisible <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500">
              infrastructure.
            </span>
          </h1>
          
          <p className="text-lg text-zinc-400 mb-8 max-w-xl leading-relaxed">
            Instant global deployment for your full-stack applications. 
            Powered by intelligent edge networks and seamless scaling.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button className="flex items-center justify-center gap-2 group">
              Start Deploying 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="flex items-center justify-center gap-2 group">
              Read Documentation
              <ChevronRight size={16} className="text-zinc-500 group-hover:text-white transition-colors" />
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-6 text-sm text-zinc-500 font-mono">
            <div className="flex -space-x-2">
              {[1,2,3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-950 flex items-center justify-center text-xs">
                  {i}
                </div>
              ))}
            </div>
            <p>Trusted by 10,000+ developers</p>
          </div>
        </div>

        {/* Right: 3D Spline Element */}
        <div className="relative h-[50vh] lg:h-[80vh] w-full order-1 lg:order-2 animate-fade-in">
          <div className="absolute inset-0 z-0">
             {/* The Spline component from the prompt */}
             <spline-viewer url="https://prod.spline.design/V1C5eUCcyeUSbVjP/scene.splinecode"></spline-viewer>
          </div>
          {/* Gradient overlay for blending edges if needed, subtle */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-20 pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;