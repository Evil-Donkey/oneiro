"use client";

import { useRef } from "react";
import styles from "./SingleColumn.module.scss";
import Image from "next/image";
import useLazyLoad from "../../../hooks/useLazyLoad";
import LazyItem from "../../LazyItem";
import Shine from "@/components/Shine";
import Button from "@/components/Button";
const SingleColumn = ({ data, index }) => {
    useLazyLoad();
    const singleColumnRef = useRef(null);

    const { 
        backgroundVideoDesktop, 
        backgroundImage,
        backgroundImageTopRight,
        backgroundVideoMobile, 
        copy, 
        centred,
        darkBlue,
        fullHeight, 
        heading1, 
        heading2,
        icon,
        list 
    } = data;

    return (
        <div 
        ref={singleColumnRef}
        className={`${styles.singleColumn} ${fullHeight ? styles.fullHeight : ''} ${darkBlue ? styles.darkBlue : ''} ${backgroundImageTopRight ? styles.backgroundImageTopRight : ''} ${styles.singleColumn + index}`} 
        style={{ backgroundImage: backgroundImage ? `url(${backgroundImage.mediaItemUrl})` : 'none' }}
        >
            {(backgroundVideoDesktop || backgroundVideoMobile) && (
                <div className={styles.backgroundVideo}>
                    {backgroundVideoDesktop && <video src={backgroundVideoDesktop.mediaItemUrl} autoPlay muted loop playsInline className={backgroundVideoMobile ? `hidden md:block` : ''} />}
                    {backgroundVideoMobile && <video src={backgroundVideoMobile.mediaItemUrl} autoPlay muted loop playsInline className={backgroundVideoDesktop ? `block md:hidden` : ''} />}
                </div>
            )}
            
            <div className='container mx-auto relative px-6 md:px-4'>
                <div className={`flex flex-col md:flex-row ${centred ? 'justify-center text-center ' + styles.singleColumnCentred : ''}`}>
                    <div className={`md:w-3/4 xl:w-3/5 ${!centred ? 'xxl:w-7/12 xl:pr-5' : ''}`}>

                        {backgroundImageTopRight && backgroundImage && 
                            <div className='md:hidden'>
                                <LazyItem>
                                    <Image className={`w-full h-auto ${styles.mobileImage}`} src={backgroundImage.mediaItemUrl} alt={backgroundImage.altText} width={backgroundImage.mediaDetails.width} height={backgroundImage.mediaDetails.height} />
                                </LazyItem>
                            </div>
                        }

                        {icon && <div className='mb-4'>
                            <LazyItem>
                                <Image src={icon.mediaItemUrl} alt={icon.altText} width={icon.mediaDetails.width} height={icon.mediaDetails.height} />
                            </LazyItem>
                        </div>}
                        {heading2 && <h2><LazyItem>{heading2}</LazyItem></h2>}
                        {heading1 && <h1><LazyItem>{heading1}</LazyItem></h1>}
                        {copy && <LazyItem><div className={`${list ? styles.copyWithList : ''} ${!centred ? styles.addPadding : ''}`} dangerouslySetInnerHTML={{ __html: copy }} /></LazyItem>}
                        {index === 0 && <div className='mt-4 md:hidden'><LazyItem><Button href="#request-demo">Request a demo</Button></LazyItem></div>}
                    </div>
                </div>
                {list && (
                    <div className="mt-5">
                        <div className="lg:w-3/4">
                            <ul className={`grid md:grid-cols-2 gap-y-4 list-none p-0 ${styles.singleColumnList}`}>
                                {list.map((item, index) => (
                                    <li key={index.toString()} className={`${styles.singleColumnListItem}`}>
                                        <LazyItem>
                                            <h3>{item.heading}</h3>
                                            <div dangerouslySetInnerHTML={{ __html: item.copy }} />
                                        </LazyItem>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>

            <Shine left={index % 2 === 0} parentRef={singleColumnRef} />
        </div>
    )
}

export default SingleColumn;