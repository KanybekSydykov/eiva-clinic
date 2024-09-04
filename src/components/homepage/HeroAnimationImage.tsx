'use client';

import { AspectRatio, useMediaQuery } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import CircleOfLetters from './CircleOfLetters/CircleOfLetters';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const HeroAnimationImage = () => {
  const { scrollY } = useScroll();
  const [windowWidth, setWindowWidth] = useState(0); // Initialize with 0 instead of window.innerWidth

  const [isDesktop] = useMediaQuery('(min-width: 992px)');

  
  useEffect(() => {
    // Ensure this code runs only on the client sid
    
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth); // Initial window width

      const handleResize = () => {
        setWindowWidth(window.innerWidth); // Update window width on resize
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []); 

  // Create motion values for animations
  const translateY = useTransform(scrollY, [0, 750], [0, 800]);
  const animatedWidth = useTransform(scrollY, [0, 750], [600, windowWidth - 32]);
  const animatedPadding = useTransform(scrollY, [0, 750], [0, 200]);

  // Apply smoothing effect
  const smoothTranslateY = useSpring(translateY, { damping: 20, stiffness: 100 });
  const smoothWidth = useSpring(animatedWidth, { damping: 20, stiffness: 100 });

  return (
    <motion.div
      style={{
        background: "linear-gradient(180deg, #9ECACB 0%, #D2FFCE 100%)",
        position: 'absolute',
        top: '55px',
        right: '16px',
        width: smoothWidth, // MotionValue for width with smoothing
        height: '680px', // Fixed height for now
        y: smoothTranslateY, // Smoothed y translation
        overflow: 'visible',
        borderRadius: '30px',
        maxWidth: '1400px',
        display:isDesktop ? 'block' : 'none',
        zIndex: -1,
        willChange: 'transform', // Hint for the browser to optimize animation
      }}
    >
        <AspectRatio
        width={{base:'100%',lg:'600px'}}
        mx={'auto'}
        h={{base:'100%',lg:'680px'}}
        position={'relative'}
        borderRadius={'30px'}
        overflow={'hidden'}
        >
        <Image
        src="/hero-accent.png"
        alt="hero-accent-img"
        fill={true}
        sizes="(max-width: 768px) 100%, (min-width: 992px) 600px, 680px"
        style={{
          objectFit: 'cover',
          maxWidth: '600px',
          margin: '0 auto',
          maxHeight: '680px',
        }}
      />
        </AspectRatio>

      <CircleOfLetters />
    </motion.div>
  );
};

export default HeroAnimationImage;
