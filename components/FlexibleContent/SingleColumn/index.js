"use client";

import { useRef } from "react";
import styles from "./SingleColumn.module.scss";
import Image from "next/image";
import useLazyLoad from "../../../hooks/useLazyLoad";
import LazyItem from "../../LazyItem";
import SplitTextWrapper from '../../SplitText';
import Shine from "@/components/Shine";

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
        className={`${styles.singleColumn} ${fullHeight ? styles.fullHeight : ''} ${darkBlue ? styles.darkBlue : ''} ${backgroundImageTopRight ? styles.backgroundImageTopRight : ''}`} 
        style={{ backgroundImage: backgroundImage ? `url(${backgroundImage.mediaItemUrl})` : 'none' }}
        >
            {(backgroundVideoDesktop || backgroundVideoMobile) && (
                <div className={styles.backgroundVideo}>
                    {backgroundVideoDesktop && <video src={backgroundVideoDesktop.mediaItemUrl} autoPlay muted loop className={backgroundVideoMobile ? `d-none d-md-block` : ''} />}
                    {backgroundVideoMobile && <video src={backgroundVideoMobile.mediaItemUrl} autoPlay muted loop className={backgroundVideoDesktop ? `d-block d-md-none` : ''} />}
                </div>
            )}
            
            <div className='container position-relative'>
                <div className={`row ${centred ? 'justify-content-center text-center ' + styles.singleColumnCentred : ''}`}>
                    <div className={`col-md-9 col-lg-7 ${!centred ? 'col-xl-6' : ''}`}>

                        {backgroundImageTopRight && backgroundImage && 
                            <div className='d-md-none'>
                                <LazyItem>
                                    <Image className='w-100 h-auto' src={backgroundImage.mediaItemUrl} alt={backgroundImage.altText} width={backgroundImage.mediaDetails.width} height={backgroundImage.mediaDetails.height} />
                                </LazyItem>
                            </div>
                        }

                        {icon && <div className='mb-4'>
                            <LazyItem>
                                <img src={icon.mediaItemUrl} alt={icon.altText} />
                            </LazyItem>
                        </div>}
                        {heading2 && <h2>{heading2}</h2>}
                        {heading1 && <h1><LazyItem>{heading1}</LazyItem></h1>}
                        {copy && <LazyItem><div className={list ? styles.copyWithList : ''} dangerouslySetInnerHTML={{ __html: copy }} /></LazyItem>}
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