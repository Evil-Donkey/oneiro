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
                    {backgroundVideoDesktop && <video src={backgroundVideoDesktop.mediaItemUrl} autoPlay muted loop playsInline className={backgroundVideoMobile ? `d-none d-md-block` : ''} />}
                    {backgroundVideoMobile && <video src={backgroundVideoMobile.mediaItemUrl} autoPlay muted loop playsInline className={backgroundVideoDesktop ? `d-block d-md-none` : ''} />}
                </div>
            )}
            
            <div className='container position-relative px-4 px-md-0'>
                <div className={`row ${centred ? 'justify-content-center text-center ' + styles.singleColumnCentred : ''}`}>
                    <div className={`col-md-9 col-xl-8 ${!centred ? 'col-xxl-7 pe-xl-5' : ''}`}>

                        {backgroundImageTopRight && backgroundImage && 
                            <div className='d-md-none'>
                                <LazyItem>
                                    <Image className={`w-100 h-auto ${styles.mobileImage}`} src={backgroundImage.mediaItemUrl} alt={backgroundImage.altText} width={backgroundImage.mediaDetails.width} height={backgroundImage.mediaDetails.height} />
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
                        {index === 0 && <div className='mt-4 d-md-none'><LazyItem><Button href="#request-demo">Request a demo</Button></LazyItem></div>}
                    </div>
                </div>
                {list && <div className='row mt-5'>
                    <div className='col-lg-9'>
                        <ul className={`row list-unstyled p-0 ${styles.singleColumnList}`}>
                            {list.map((item, index) => (
                                <li key={index.toString()} className='col-md-6 mb-4'>
                                    <LazyItem className={styles.singleColumnListItem}>
                                        <h3>{item.heading}</h3>
                                        <div dangerouslySetInnerHTML={{ __html: item.copy }} />
                                    </LazyItem>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>}
            </div>

            <Shine left={index % 2 === 0} parentRef={singleColumnRef} />
        </div>
    )
}

export default SingleColumn;