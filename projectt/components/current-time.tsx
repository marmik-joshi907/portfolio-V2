'use client';

import { useState, useEffect } from 'react';
import { format } from 'date-fns';

export function CurrentTime() {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  useEffect(() => {
    // Set initial time on client mount to prevent hydration mismatch
    setCurrentTime(new Date());
    
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Don't render anything until client has mounted
  if (!currentTime) {
    return (
      <div className="text-sm text-stone font-mono">
        <div>Loading...</div>
        <div>--:--:--</div>
      </div>
    );
  }

  return (
    <div className="text-sm text-stone font-mono">
      <div>{format(currentTime, 'MMM dd, yyyy')}</div>
      <div>{format(currentTime, 'HH:mm:ss')}</div>
    </div>
  );
}