"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import shineLine from "@/public/shine-line.png";
import shineMain from "@/public/shine-main.png";
import styles from "./Shine.module.scss";

gsap.registerPlugin(ScrollTrigger);

const Shine = ({ left = false, parentRef }) => {
    const shineRef = useRef([]);  // Array of refs
    const linesRef = useRef([]);  // Array of refs
    const [isLoaded, setIsLoaded] = useState(false); // Track image load

    const handleImageLoad = () => {
        setIsLoaded(true);  // Set to true once the image is loaded
    };

    useEffect(() => {
        if (!isLoaded || !shineRef.current || !parentRef?.current) return;

        // Clear the array of refs before applying animations
        shineRef.current = shineRef.current.filter(el => el != null);

        const direction = left ? -500 : 500;
        const directionLines = left ? 300 : -300;

        shineRef.current.forEach((shineEl) => {
            gsap.fromTo(
                shineEl,
                { x: -direction, autoAlpha: 0 },
                {
                    x: 0,
                    autoAlpha: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: parentRef.current,
                        start: "bottom 100%",
                        end: "bottom 0%",
                        scrub: 1,
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });

        linesRef.current.forEach((lineEl) => {
            gsap.fromTo(
                lineEl,
                { x: directionLines },
                {
                    x: 0,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: parentRef.current,
                        start: "bottom 100%",
                        end: "bottom 0%",
                        scrub: 1,
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });
        return () => {
            // Clean up ScrollTriggers on unmount
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [isLoaded, left, parentRef]);

    return (
        <div className={styles.shine} style={{ left: left ? '10%' : 'auto', right: left ? 'auto' : '10%' }}>
            <div 
            className={styles.shineLine1} 
            ref={(el) => {
            if (el && !linesRef.current.includes(el)) {
                linesRef.current.push(el);  // Push new element to the array
            }}}>
                <Image src={shineLine} alt="Shine Line" />
            </div>
            <div 
            className={styles.shineLine2} 
            ref={(el) => {
            if (el && !linesRef.current.includes(el)) {
                linesRef.current.push(el);  // Push new element to the array
            }}}>
                <Image src={shineLine} alt="Shine Line" />
            </div>
            <div 
                className={styles.shineMain} 
                style={{ left: left ? '10%' : 'auto', right: left ? 'auto' : '10%' }}
                ref={(el) => {
                    if (el && !shineRef.current.includes(el)) {
                        shineRef.current.push(el);  // Push new element to the array
                    }
                }}
            >
                <Image 
                    src={shineMain} 
                    alt="Shine Main" 
                    onLoadingComplete={handleImageLoad}
                />
            </div>
        </div>
    );
};

export default Shine;
