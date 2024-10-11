import React from 'react';
import clsx from 'clsx';

const MeditationCircles = ({ breath = 4 }) => {
  const circles = [
    {
      key: 1,
      variants: {
        '4s': "animate-[circle-1_4s_ease_infinite_alternate]",
        '5s': "animate-[circle-1_5s_ease_infinite_alternate]",
        '6s': "animate-[circle-1_6s_ease_infinite_alternate]",
        '7s': "animate-[circle-1_7s_ease_infinite_alternate]",
        '8s': "animate-[circle-1_8s_ease_infinite_alternate]"
      }
    },
    {
      key: 2,
      variants: {
        '4s': "animate-[circle-2_4s_ease_infinite_alternate]",
        '5s': "animate-[circle-2_5s_ease_infinite_alternate]",
        '6s': "animate-[circle-2_6s_ease_infinite_alternate]",
        '7s': "animate-[circle-2_7s_ease_infinite_alternate]",
        '8s': "animate-[circle-2_8s_ease_infinite_alternate]"
      }
    },
    {
      key: 3,
      variants: {
        '4s': "animate-[circle-3_4s_ease_infinite_alternate]",
        '5s': "animate-[circle-3_5s_ease_infinite_alternate]",
        '6s': "animate-[circle-3_6s_ease_infinite_alternate]",
        '7s': "animate-[circle-3_7s_ease_infinite_alternate]",
        '8s': "animate-[circle-3_8s_ease_infinite_alternate]"
      }
    },
    {
      key: 4,
      variants: {
        '4s': "animate-[circle-4_4s_ease_infinite_alternate]",
        '5s': "animate-[circle-4_5s_ease_infinite_alternate]",
        '6s': "animate-[circle-4_6s_ease_infinite_alternate]",
        '7s': "animate-[circle-4_7s_ease_infinite_alternate]",
        '8s': "animate-[circle-4_8s_ease_infinite_alternate]"
      }
    },
    {
      key: 5,
      variants: {
        '4s': "animate-[circle-5_4s_ease_infinite_alternate]",
        '5s': "animate-[circle-5_5s_ease_infinite_alternate]",
        '6s': "animate-[circle-5_6s_ease_infinite_alternate]",
        '7s': "animate-[circle-5_7s_ease_infinite_alternate]",
        '8s': "animate-[circle-5_8s_ease_infinite_alternate]"
      }
    },
    {
      key: 6,
      variants: {
        '4s': "animate-[circle-6_4s_ease_infinite_alternate]",
        '5s': "animate-[circle-6_5s_ease_infinite_alternate]",
        '6s': "animate-[circle-6_6s_ease_infinite_alternate]",
        '7s': "animate-[circle-6_7s_ease_infinite_alternate]",
        '8s': "animate-[circle-6_8s_ease_infinite_alternate]"
      }
    }
  ];

  return (
    <div className="relative w-[300px] h-[300px]">
      {circles.map((circle) => (
        <div
          key={circle.key}
          className={clsx(
            "absolute w-[155px] h-[155px] rounded-full mix-blend-screen",
            circle.key % 2 === 0 ? 'bg-[#53b7bd]' : 'bg-[#70dfbd]',
            circle.variants[`${breath}s`] || circle.variants['4s'] // Use the specified breath duration or default to 4s
          )}
        />
      ))}
    </div>
  );
};

export default MeditationCircles;