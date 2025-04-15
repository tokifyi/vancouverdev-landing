
import React from 'react';
import { Button } from '@/components/ui/button';

const JoinSection = () => {
  return (
    <div className="py-16 px-4 bg-black/20">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-pixel text-neon-pink text-2xl md:text-3xl mb-6">join the squad</h2>
        <p className="font-pixel text-neon-blue text-sm mb-8">connect with builders, eat boba, code at midnight</p>
        <Button 
          className="font-pixel bg-neon-purple hover:bg-neon-purple/90 text-background border-2 border-black shadow-pixel hover:shadow-pixel-hover transition-all px-8 py-6"
          onClick={() => window.open('https://vancouver.dev/apply', '_blank')}
        >
          apply now
        </Button>
      </div>
    </div>
  );
};

export default JoinSection;
