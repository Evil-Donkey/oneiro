"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import shineLine from "@/public/shine-line.png";
import shineMain from "@/public/shine-main.png";
import styles from "./Shine.module.scss";

// gsap.registerPlugin(ScrollTrigger);

const Shine = ({ left = false, parentRef }) => {
    const shineRef = useRef(null); // Single ref instead of an array

    useEffect(() => {
        if (!shineRef.current || !parentRef?.current) return;

        const direction = left ? -500 : 500;

        gsap.fromTo(
            shineRef.current,
            { x: -direction },
            {
                x: 0,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: parentRef.current,
                    start: "top 80%",  // Change start point to trigger earlier
                    end: "bottom 10%", // Change end point
                    scrub: 1,
                    markers: true, // Debugging
                    toggleActions: "play none none reverse",
                    onEnter: () => console.log("ScrollTrigger activated"), // Debugging
                    onLeave: () => console.log("ScrollTrigger left"),
                    onUpdate: (self) => {
                        console.log("progress:", self.progress);
                        console.log("scrollY:", window.scrollY);  // Logs current scroll position
                    },
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [left, parentRef]);

    return (
        <div className={styles.shine} style={{ left: left ? '10%' : 'auto', right: left ? 'auto' : '10%' }}>
            <div className={styles.shineLine1}>
                <Image src={shineLine} alt="Shine Line" />
            </div>
            <div className={styles.shineLine2}>
                <Image src={shineLine} alt="Shine Line" />
            </div>
            <div 
                className={styles.shineMain} 
                style={{ left: left ? '10%' : 'auto', right: left ? 'auto' : '10%' }}
                ref={shineRef}
            >
                <Image src={shineMain} alt="Shine Main" />
            </div>
        </div>
    );
};

export default Shine;
