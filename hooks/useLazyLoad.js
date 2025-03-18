"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useLazyLoad = () => {
  useEffect(() => {
    // Kill existing ScrollTriggers before adding a new one
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Lazy load batch initialization
    ScrollTrigger.batch(".lazy__item", {
      start: "top 80%",
      onEnter: batch =>
        gsap.fromTo(
          batch,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1, stagger: { each: 0.2 }, overwrite: true }
        ),
      once: true
    });

    // Refresh ScrollTrigger to account for any DOM changes
    ScrollTrigger.refresh();

    return () => {
      // Clean up on unmount
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []); // Only run on component mount
};

export default useLazyLoad;
