import React from 'react';
import { motion } from 'motion/react';

interface MapProps {
  className?: string;
}

export function WorldMap({ className = '' }: MapProps) {
  // Simplified World Map SVG Paths
  // This is a curated simplified path for visual aesthetic
  const worldPath = "M282.6,227.6c1.1,0,2.3,0.3,3.1,0.9c0.7,0.5,1.1,1.3,1.3,2.2c0.3,1.3-0.2,2.7-1.1,3.7c-0.6,0.7-1.4,1.1-2.3,1.2c-2.3,0.1-4.7,0.8-6.1,2.8c-1.3,1.9-0.8,4.5,0.7,6.2c0.8,0.9,1.9,1.5,3.1,1.5c1.4,0,2.6-0.6,3.6-1.5c1.1-1,1.7-2.3,2.2-3.7c0.8-2.3,1.7-4.6,3.6-6.1c2-1.6,4.7-2,7.2-1.4c2.1,0.5,3.9,1.9,5,3.8c1,1.6,1.4,3.5,1.7,5.4c0.1,0.5,0.8,0.8,1.3,0.5c0.5-0.3,0.5-1,0.4-1.5c-0.3-1.8-0.7-3.5-1.6-5.1c-1-1.6-2.6-2.9-4.5-3.3c-2.2-0.5-4.6-0.1-6.4,1.3c-1.6,1.2-2.3,3.2-3,5.1c-0.4,1.1-0.9,2.2-1.7,3c-0.8,0.7-1.7,1.1-2.7,1.1c-0.9,0-1.7-0.4-2.3-1.1c-1-1.2-1.3-3,0.1-4.7c1.1-1.3,2.4-2.2,4.1-2.4c0.8-0.1,1.7,0.1,2.5-0.2c0.8-0.3,1.4-0.9,1.7-1.7c0.3-0.8,0.3-1.7,0-2.5c-0.6-1.5-2-2.5-3.6-2.5c-2.3,0-4.4,1.1-6,2.6c-0.4,0.4-0.1,1.1,0.5,1.1C280.9,228.6,281.8,227.6,282.6,227.6z M643.7,212.4c1.1,1.7,2.8,3,4.6,3.7c2.3,0.9,4.9,0.7,7.1-0.1c1.9-0.7,3.6-1.9,5.2-3.1c1.6-1.2,3.3-2.3,5.2-2.9c1.7-0.6,3.6-0.7,5.3-0.1c1.8,0.6,3.3,1.9,4.4,3.5c1,1.5,1.5,3.4,1.4,5.2c-0.1,2.8-1.5,5.4-3.5,7.3c-1.9,1.8-4.2,3-6.8,3.5c-2.6,0.6-5.3,0.2-7.8-0.9c-2-0.9-3.7-2.3-5-4.1c-1.3-1.8-2.1-3.9-2.5-6.1c-0.4-2.1-0.2-4.3,0.6-6.3c0.2-0.5-0.5-0.8-0.8-0.4c-0.9,1.1-1.6,2.4-1.9,3.8c-0.3,1.3-0.3,2.7,0,4c0.5,1.9,1.6,3.6,3,5c1.7,1.6,3.8,2.7,6.1,3.2c2.8,0.6,5.8-0.1,8.3-1.6c1.9-1.2,3.4-3,4.2-5c0.7-1.7,0.7-3.6,0.2-5.4c-0.5-1.5-1.5-2.8-2.8-3.7c-1.5-1-3.3-1.4-5.1-1.3c-1.7,0.1-3.4,0.7-5,1.5c-1.6,0.8-3,1.9-4.3,3.1c-1.1,1-2.3,1.8-3.6,2.3c-1.2,0.5-2.6,0.6-3.8,0.2c-1.1-0.3-2.1-1-2.9-1.9c-0.4-0.4-1.1-0.1-1.1,0.5C642.6,213.3,643.2,212.8,643.7,212.4z M764.1,273.6c-0.3,0.8-0.8,1.5-1.5,2c-1,0.7-2.3,0.7-3.4,0.3c-1.2-0.5-2-1.6-2.5-2.8c-0.5-1.2-0.6-2.5-0.3-3.8c0.2-1,0.8-1.9,1.6-2.6c1-0.9,2.4-1.3,3.7-1.1c1.3,0.2,2.5,0.9,3.3,1.9c0.7,0.9,1.1,2.1,1.1,3.3C766.1,271.9,765.3,272.9,764.1,273.6z M579.4,209.5c0.8,1.3,2.1,2.3,3.6,2.7c1.7,0.5,3.5,0.2,5.1-0.7c1.4-0.8,2.5-2.1,3.2-3.6c0.6-1.3,0.9-2.8,0.7-4.2c-0.2-1.3-0.8-2.5-1.8-3.4c-1-0.9-2.3-1.4-3.6-1.3c-1.3,0.1-2.5,0.7-3.4,1.7c-0.8,0.9-1.3,2.1-1.4,3.3c-0.2,1.8,0.5,3.6,1.8,4.9c0.4,0.4,1.1-0.2,0.8-0.6c-0.9-1-1.4-2.3-1.3-3.7c0.1-1.2,0.6-2.3,1.5-3.2c1.2-1.2,3-1.6,4.6-1.1c1.4,0.4,2.6,1.5,3.1,2.9c0.5,1.3,0.3,2.8-0.4,4.1c-0.8,1.4-2.1,2.4-3.6,2.8c-1.4,0.4-2.9,0.1-4.2-0.7c-0.5-0.3-1,0.4-0.6,0.9C583.5,210.6,579.4,209.5,579.4,209.5z M475.2,174.6c2.3,2.8,5.4,4.9,8.9,5.7c3.3,0.8,6.8,0.4,10-1.1c2.8-1.3,5.2-3.5,6.9-6.2c1.6-2.5,2.5-5.5,2.6-8.5c0-2.8-0.7-5.5-2-7.9c-1.4-2.6-3.5-4.7-6-6.1c-2.7-1.5-5.8-2.1-8.9-1.6c-3.1,0.5-6,2-8.2,4.3c-2.1,2.2-3.4,5.1-3.6,8.2C474.7,173.2,475.7,175.2,475.2,174.6z M551.5,188.7c0.6,0.8,1.3,1.5,2.2,2c1.4,0.8,3.1,0.9,4.7,0.4c1.6-0.5,2.8-1.7,3.6-3.2c0.7-1.3,0.9-2.8,0.6-4.2c-0.4-1.6-1.4-3-2.8-3.9c-1.5-0.9-3.3-1.1-5-0.6c-1.5,0.4-2.8,1.5-3.6,2.9c-0.6,1.1-0.8,2.4-0.6,3.6C550.8,187,550.9,187.9,551.5,188.7z";

  // Coordinates for the beacons (approximate for SVG viewBox 0 0 1000 450)
  const beacons = [
    { name: "Algeria", x: 475, y: 175, delay: 0 },
    { name: "Morocco", x: 450, y: 170, delay: 0.2 },
    { name: "Egypt", x: 555, y: 188, delay: 0.4 },
    { name: "Saudi Arabia", x: 585, y: 205, delay: 0.6 },
    { name: "UAE", x: 605, y: 205, delay: 0.8 },
    { name: "India", x: 685, y: 215, delay: 1.0 },
    { name: "Singapore", x: 765, y: 275, delay: 1.2 },
  ];

  return (
    <div className={`absolute inset-0 pointer-events-none select-none z-0 ${className}`}>
        {/* Gradients to fade edges */}
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white to-transparent opacity-80 z-10" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent opacity-90 z-10" />
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent opacity-80 z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent opacity-80 z-10" />

      <svg
        viewBox="0 0 1000 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover opacity-20 text-gray-400"
      >
        {/* World Map Background Pattern */}
        <pattern id="dot-pattern" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
             <circle cx="2" cy="2" r="1" fill="currentColor" className="text-gray-300" />
        </pattern>
        
        {/* Simplified Map Outline - replaced with generic dot grid for "Cyber" feel if path is too complex, 
            but here effectively using a masked grid or just a raw path. 
            For this level, we'll simple draw a nice dot grid across the screen 
            and highlight the SPECIFIC areas with the path if available, 
            OR just use the beacons on a grid.
            
            Let's use a cyber grid background + beacons. 
        */}
        <rect width="100%" height="100%" fill="url(#dot-pattern)" opacity="0.5" />
        
        
        {/* Beacons */}
        {beacons.map((beacon, i) => (
          <g key={i}>
            <motion.circle
              cx={beacon.x}
              cy={beacon.y}
              r="3"
              fill="#2596be"
              initial={{ opacity: 0.5, scale: 1 }}
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: beacon.delay,
                ease: "easeInOut",
              }}
            />
            <motion.circle
              cx={beacon.x}
              cy={beacon.y}
              r="8"
              fill="none"
              stroke="#2596be"
              strokeWidth="1"
              initial={{ opacity: 0.8, scale: 0.5 }}
              animate={{
                opacity: 0,
                scale: 2.5,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: beacon.delay,
                ease: "easeOut",
              }}
            />
          </g>
        ))}
        
        {/* Connecting Lines (Cyber Aesthetic) */}
        <motion.path
            d={`M${beacons[0].x},${beacons[0].y} L${beacons[2].x},${beacons[2].y} L${beacons[3].x},${beacons[3].y} L${beacons[5].x},${beacons[5].y} L${beacons[6].x},${beacons[6].y}`}
            stroke="#2596be"
            strokeWidth="0.5"
            strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 3, delay: 1 }}
        />
      </svg>
    </div>
  );
}
