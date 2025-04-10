"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useLazyLoad = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Prevent duplicate triggers
    if (ScrollTrigger.getById("lazy-load")) return;

    ScrollTrigger.batch(".lazy__item", {
      id: "lazy-load",
      start: "top 80%",
      onEnter: batch =>
        gsap.fromTo(
          batch,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: { each: 0.2 },
            overwrite: true,
          }
        ),
      once: true,
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.id === "lazy-load") trigger.kill();
      });
    };
  }, []);
};

export default useLazyLoad;
