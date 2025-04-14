"use client";

import styles from "./ScrollingText.module.scss";
import LazyItem from "../../LazyItem";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollingText = ({ data }) => {
    const { 
        blocks,
        heading
    } = data;

    const containerRef = useRef(null);
    const blocksRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const blocksWrapper = blocksRef.current;
        
        if (!container || !blocksWrapper || !blocks?.length) return;

        // Check if screen width is larger than md breakpoint (768px)
        const isLargeScreen = window.innerWidth > 768;
    
        const ctx = gsap.context(() => {
            const blockElements = blocksWrapper.children;
            const lastBlock = blockElements[blockElements.length - 1];
            const distance = lastBlock.offsetTop;
    
            gsap.set(blockElements, { y: 0 }); // Reset transforms
    
            // Only create timeline if on large screen
            if (isLargeScreen) {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: container,
                        start: "center center",
                        end: `+=${distance + 100}`,
                        pin: true,
                        scrub: 1,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                        markers: false,
                    }
                });
    
                tl.to(blockElements, {
                    y: () => -distance,
                    stagger: {
                        each: 0,
                        ease: "none",
                    },
                    ease: "none",
                });
            }
    
            // Ensure ScrollTrigger recalculates after layout settles
            ScrollTrigger.refresh();
    
        }, container);
    
        return () => ctx.revert();
    }, [blocks]);

    return (
        <div className={`${styles.scrollingText} bg-blue-04 text-white py-24 overflow-hidden lg:max-h-[50vh]`} ref={containerRef}>
            <div className='container mx-auto relative px-6 md:px-4'>
                <div className="hidden md:block absolute top-0 left-0 w-full h-50 bg-blue-05 -translate-y-5 rounded-lg"></div>
                <div className="flex flex-col lg:flex-row gap-5 items-start relative z-10">
                    
                    {/* Heading Section */}
                    <div className="w-auto">
                        <h2 className="text-blue-01">{heading}</h2>
                    </div>

                    {/* Blocks Section */}
                    {blocks && 
                        <div className="lg:w-2xl space-y-8" ref={blocksRef}>
                            {blocks.map((item, index) => {
                                const { heading, copy, icon } = item;
                                return (
                                    <div key={index}>
                                        {heading && <h2 className="mb-2">{heading}</h2>}
                                        {copy && <div className="text-gray-300 lg:w-md" dangerouslySetInnerHTML={{ __html: copy }} />}
                                    </div>
                                );
                            })}
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default ScrollingText;