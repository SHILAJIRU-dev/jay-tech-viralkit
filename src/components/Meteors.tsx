"use client";

import { useEffect, useState } from 'react';

const Meteors = ({ number = 20 }: { number?: number }) => {
  const [meteors, setMeteors] = useState<Array<{ top: number; left: number; delay: number; duration: number; }>>([]);

  useEffect(() => {
    const newMeteors = Array.from({ length: number }).map(() => ({
      top: -5,
      left: Math.floor(Math.random() * 100),
      delay: Math.random() * 1 + 0.2,
      duration: Math.random() * 0.5 + 0.2,
    }));
    setMeteors(newMeteors);
  }, [number]);

  return (
    <>
      {meteors.map((meteor, idx) => (
        <span
          key={"meteor" + idx}
          className="animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-full bg-brand-orange shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]"
          style={{
            top: 0,
            left: `${meteor.left}%`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.duration}s`,
          }}
        ></span>
      ))}
    </>
  );
};

export default Meteors;