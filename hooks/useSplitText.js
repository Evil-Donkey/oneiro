import { useEffect } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText'; // Ensure you're importing correctly
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const useSplitText = (className) => {
  useEffect(() => {
    // Using gsap.utils.toArray to select elements correctly
    const titles = gsap.utils.toArray(`.${className}`);
    
    titles.forEach((title) => {
      // Create SplitText instance for splitting lines
      const childSplit = new SplitText(title, {
        type: 'lines',
        linesClass: 'split-child',
      });
      const parentSplit = new SplitText(title, {
        type: 'lines',
        linesClass: 'split-parent',
      });

      // Apply GSAP animation to split lines
      gsap.from(childSplit.lines, {
        duration: 1,
        yPercent: 100,
        ease: 'cubic-bezier(.65,.05,.36,1)',
        stagger: 0.3,
        scrollTrigger: {
          trigger: title,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      });
    });
  }, [className]);
};

export default useSplitText;
