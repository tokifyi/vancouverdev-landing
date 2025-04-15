import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-64 bg-[url('/photo-1470071459604-3b5ec3a7fe05')] bg-cover bg-center opacity-20" 
           style={{ imageRendering: 'pixelated' }} />
      <div className="relative z-10 text-center px-4">
        <h1 className="font-pixel text-neon-green text-4xl md:text-5xl mb-6">&lt;vancouver.dev&gt;</h1>
        <p className="font-pixel text-neon-blue text-sm md:text-base mb-8">build together in the pixelverse</p>
        <Button 
          className="font-pixel bg-neon-green text-background hover:bg-neon-green/90 border-2 border-black shadow-pixel hover:shadow-pixel-hover transition-all px-8 py-6"
          onClick={() => window.open('https://discord.gg/vancouverdev', '_blank')}
        >
          <ArrowRight className="mr-2 h-4 w-4" /> join the discord
        </Button>
      </div>
    </div>
  );
};

export default Hero;
