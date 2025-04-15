
import React from 'react';

const Events = () => {
  return (
    <div className="py-16 px-4">
      <h2 className="font-pixel text-neon-green text-2xl md:text-3xl mb-8 text-center">upcoming quests</h2>
      <div className="max-w-md mx-auto bg-black/30 p-6 border-2 border-neon-blue shadow-pixel">
        <div className="font-pixel text-neon-blue text-xs mb-2">APR 20, 2025</div>
        <h3 className="font-pixel text-white text-sm mb-2">RAG & AI in Action</h3>
        <p className="font-pixel text-neon-purple text-xs">@ Microsoft Vancouver</p>
      </div>
    </div>
  );
};

export default Events;
