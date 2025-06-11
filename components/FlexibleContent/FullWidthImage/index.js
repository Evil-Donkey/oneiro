'use client'

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FullWidthImage = ({ data }) => {
    const { image, mobileImage, lightBackground, removePaddingTop, removePaddingBottom } = data;

    const desktopImageRef = useRef(null);
    const mobileImageRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        const ctx = gsap.context(() => {
            gsap.fromTo([desktopImageRef.current, mobileImageRef.current], 
                {
                    opacity: 0,
                    y: 50,
                    scale: .85
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: [desktopImageRef.current, mobileImageRef.current],
                        start: "top 60%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className={`${lightBackground ? `bg-white-01` : `bg-blue-02`} ${removePaddingTop ? `pt-0` : `pt-20`} ${removePaddingBottom ? `pb-0` : `pb-20`} md:py-20`}>
            <div className="container mx-auto relative px-6 md:px-4 text-center">
                <div className="overflow-hidden rounded-lg">
                    {image && <Image ref={desktopImageRef} className={`mx-auto ${mobileImage ? `hidden md:block` : ``}`} src={image.mediaItemUrl} alt={image.altText} width={image.mediaDetails.width} height={image.mediaDetails.height} />}
                    {mobileImage && <Image ref={mobileImageRef} className={`${image ? `block md:hidden` : ``}`} src={mobileImage.mediaItemUrl} alt={mobileImage.altText} width={mobileImage.mediaDetails.width} height={mobileImage.mediaDetails.height} />}
                </div>
            </div>
        </div>
    )
}

export default FullWidthImage;