'use client';

import { useState, useEffect } from 'react';
import styles from './Overlay.module.scss';

const Overlay = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Set isLoaded to true once the component is mounted
        setIsLoaded(true);
    }, []);

    return (
        <div className={`${styles.overlay} ${isLoaded ? styles.loaded : ''}`}></div>
    );
};

export default Overlay;
