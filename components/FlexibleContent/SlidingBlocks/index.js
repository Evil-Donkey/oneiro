"use client";

import styles from "./SlidingBlocks.module.scss";
import Image from "next/image";
import LazyItem from "../../LazyItem";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SlidingBlocks = ({ data }) => {

    const { 
        blocks,
        heading
    } = data;

    const containerRef = useRef(null);
    const blocksRef = useRef(null);

    useEffect(() => {
        let ctx;
        const container = containerRef.current;
        const blocksWrapper = blocksRef.current;
    
        if (!container || !blocksWrapper || !blocks?.length) return;
    
        // Wrap everything in GSAP context to avoid memory leaks
        ctx = gsap.context(() => {
            const totalWidth = blocksWrapper.scrollWidth - blocksWrapper.offsetWidth;
    
            gsap.set(blocksWrapper, { x: 0 });
    
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    start: "top top",
                    end: `+=${totalWidth}`,
                    pin: true,
                    scrub: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                }
            });
    
            tl.to(blocksWrapper, {
                x: -totalWidth,
                ease: "none"
            });
    
            // Refresh after a tick
            ScrollTrigger.refresh();
        }, container);
    
        return () => {
            ctx.revert();
        };
    }, [blocks]);
    

    return (
        <div className={`${styles.slidingBlocks} text-white`} ref={containerRef}>
            <div className='container mx-auto relative px-6 md:px-4'>
                {heading &&
                    <div className="flex flex-col md:flex-row justify-center">
                        <div className="w-full text-center">
                            {heading && <h2><LazyItem>{heading}</LazyItem></h2>}
                        </div>
                    </div>
                }
                {blocks && 
                    <div className={`mt-30 flex flex-nowrap gap-x-10`} ref={blocksRef}>
                        {blocks.map((item, index) => {
                            const { heading, copy, icon } = item;
                            return (
                                <div key={index} className={`${styles.slidingBlockItem} min-w-96 md:w-80 lg:min-w-70 flex flex-col gap-4 p-8 bg-blue-05 rounded-lg`}>
                                    {icon && <LazyItem><Image className="-mt-17" src={icon.mediaItemUrl} alt={icon.altText} width={icon.mediaDetails.width} height={icon.mediaDetails.height} /></LazyItem>}
                                    {heading && <h2><LazyItem>{heading}</LazyItem></h2>}
                                    {copy && <LazyItem><div dangerouslySetInnerHTML={{ __html: copy }} /></LazyItem>}
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        </div>
    )
}

export default SlidingBlocks;