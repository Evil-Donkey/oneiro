'use client';

import styles from "./TabbedPanels.module.scss";
import { useState } from 'react';
import Button from '@/components/Button';
import LazyItem from '../../LazyItem';

const TabbedPanels = ({ data }) => {
    const { copy, heading, panels } = data;
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className={styles.tabbedPanels}>
            <div className="container mx-auto relative px-6 md:px-4">
                <div className="flex justify-center">
                    <div className="w-1/2 text-center">
                        <LazyItem>
                            <h2>{heading}</h2>
                        </LazyItem>
                    </div>
                </div>
                <div className="flex justify-center mt-5">
                    <div className="w-2/5 text-center">
                        <LazyItem>
                            <div dangerouslySetInnerHTML={{ __html: copy }} />
                        </LazyItem>
                    </div>
                </div>
                {panels.length > 0 && (
                    <LazyItem>
                        <div className="flex justify-center gap-10 flex-nowrap mt-15 overflow-x-auto">
                            {panels.map((panel, index) => (
                                <div 
                                    key={index} 
                                    className={`${styles.tab} ${activeTab === index ? styles.active : ''}`}
                                    onClick={() => setActiveTab(index)}
                                    role="button"
                                    tabIndex={0}
                                >
                                    <h3>{panel.navLabel}</h3>
                                </div>
                            ))}
                        </div>
                        <div className={styles.panelsContainer}>
                            {panels.map((panel, index) => {
                                const { boxCopy, ctaLabel, ctaUrl, heading, backgroundImage, mainCopy } = panel;
                                return (
                                    <div 
                                        key={index}
                                        className={`${styles.panel} p-5 md:p-10 rounded-lg overflow-hidden bg-cover bg-center d-flex flex-col ${activeTab === index ? styles.active : ''}`}
                                        style={{ backgroundImage: `url(${backgroundImage.mediaItemUrl})` }}
                                    >
                                        <div className="flex flex-col gap-5 text-white">
                                            {heading &&
                                                <div className="w-full lg:w-3/5">
                                                    <h2 className="mb-5">{heading}</h2>
                                                </div>
                                            }
                                            {mainCopy &&
                                                <div className="w-full lg:w-2/5">
                                                    <div dangerouslySetInnerHTML={{ __html: mainCopy }} />
                                                </div>
                                            }
                                        </div>
                                        {boxCopy &&
                                            <div className="w-full lg:w-1/3 mt-10 lg:mt-0 rounded-lg bg-white p-5 lg:justify-self-end">
                                                <div dangerouslySetInnerHTML={{ __html: boxCopy }} />
                                                {ctaLabel &&
                                                    <Button href={ctaUrl} plain={true}>{ctaLabel}</Button>
                                                }
                                            </div>
                                        }
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