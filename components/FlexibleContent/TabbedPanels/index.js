'use client';

import styles from "./TabbedPanels.module.scss";
import { useState } from 'react';
import Button from '@/components/Button';
import Image from 'next/image';
import LazyItem from '../../LazyItem';

const TabbedPanels = ({ data }) => {
    const { copy, heading, panels } = data;
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className={styles.tabbedPanels}>
            <div className="container mx-auto relative px-6 md:px-4">
                {heading &&
                    <div className="flex justify-center">
                        <div className="w-full md:w-1/2 text-center text-white">
                            <LazyItem>
                                <h2>{heading}</h2>
                            </LazyItem>
                        </div>
                    </div>
                }
                {copy &&
                    <div className="flex justify-center mt-5 text-white">
                        <div className="w-full md:w-2/5 text-center">
                            <LazyItem>
                                <div dangerouslySetInnerHTML={{ __html: copy }} />
                            </LazyItem>
                        </div>
                    </div>
                }
                {panels.length > 0 && (
                    <LazyItem>
                        <div className="flex md:justify-center gap-10 flex-nowrap mt-8 overflow-x-auto whitespace-nowrap">
                            {panels.map((panel, index) => (
                                <div 
                                    key={index} 
                                    className={`${styles.tab} ${activeTab === index ? styles.active : ''}`}
                                    onClick={() => setActiveTab(index)}
                                    role="button"
                                    tabIndex={0}
                                >
                                    <h3 className="text-xs/6! text-white">{panel.navLabel}</h3>
                                </div>
                            ))}
                        </div>
                        <div className={styles.panelsContainer}>
                            {panels.map((panel, index) => {
                                const { boxCopy, ctaLabel, ctaUrl, heading, backgroundImage, mainCopy } = panel;
                                return (
                                    <div 
                                        key={index}
                                        className={`${styles.panel} p-5 md:p-10 rounded-lg overflow-hidden bg-cover bg-center flex flex-col justify-between min-h-[500px] ${activeTab === index ? styles.active : ''}`}
                                        style={{ backgroundImage: `url(${backgroundImage.mediaItemUrl})` }}
                                    >
                                        <div className="flex flex-col gap-5 text-white">
                                            {heading &&
                                                <div className="w-full lg:w-3/5">
                                                    <h2 className="mb-5">{heading}</h2>
                                                </div>
                                            }
                                        </div>
                                        <div className="flex flex-col lg:flex-row gap-5 justify-between items-end">
                                            {mainCopy &&
                                                <div className="w-full lg:w-2/5 text-white lg:justify-self-end self-end">
                                                    <div dangerouslySetInnerHTML={{ __html: mainCopy }} />
                                                </div>
                                            }
                                            {boxCopy &&
                                                <div className="w-full lg:w-1/3 mt-10 lg:mt-0 rounded-lg bg-white p-5 lg:justify-self-end self-end relative">
                                                    <Image src="/tick-blue.svg" alt="Tick" width={20} height={20} className="absolute left-5 top-5.5" />
                                                    <div className="indent-[25px]" dangerouslySetInnerHTML={{ __html: boxCopy }} />
                                                    {ctaLabel &&
                                                        <Button href={ctaUrl} plain={true}>{ctaLabel}</Button>
                                                    }
                                                </div>
                                            }
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </LazyItem>
                )}
            </div>
        </div>
    )
}

export default TabbedPanels;