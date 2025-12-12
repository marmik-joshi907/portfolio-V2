'use client';

import React, { useEffect, useState } from 'react';

const symbols = [
  '010101', '0xFF', 'O(n)', 'HTTP', '404', 'SELECT', 'FROM', 
  'GET', 'POST', 'TCP', 'DNS', 'i++', 'for()', 'while(true)', 
  'if()', 'else', 'return;', 'import', 'export', 'class', 
  'void', '// TODO', '<!-- -->', '=>', '===', '</>', '{}'
];

export const BackgroundCode = React.memo(() => {
  const [items, setItems] = useState<{ x: number; y: number; symbol: string; rotation: number; scale: number }[]>([]);

  useEffect(() => {
    const generateItems = () => {
      const newItems: { x: number; y: number; symbol: string; rotation: number; scale: number }[] = [];
      const attempts = 1000; // safety break
      const count = 25; // Target number of items
      
      for (let i = 0; i < attempts && newItems.length < count; i++) {
        const x = Math.random() * 90 + 5; // keep away from very edges
        const y = Math.random() * 90 + 5;
        
        // Simple collision check
        const hasCollision = newItems.some(item => {
          const dx = item.x - x;
          const dy = item.y - y;
          // Distance threshold ~15% of screen to prevent overlapping text
          return Math.sqrt(dx * dx + dy * dy) < 12;
        });

        if (!hasCollision) {
          newItems.push({
            x,
            y,
            symbol: symbols[Math.floor(Math.random() * symbols.length)],
            rotation: Math.random() * 40 - 20, // -20 to 20 degrees
            scale: 0.8 + Math.random() * 0.5,
          });
        }
      }
      return newItems;
    };

    setItems(generateItems());
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {items.map((item, i) => (
        <div
          key={i}
          className="absolute text-stone/10 dark:text-white font-mono text-sm sm:text-base font-bold select-none whitespace-nowrap transition-opacity duration-300"
          style={{
            top: `${item.y}%`,
            left: `${item.x}%`,
            transform: `translate(-50%, -50%) rotate(${item.rotation}deg) scale(${item.scale})`,
            opacity: 0.05, // Slightly increased visibility
          }}
        >
          {item.symbol}
        </div>
      ))}
    </div>
  );
});

BackgroundCode.displayName = 'BackgroundCode';

