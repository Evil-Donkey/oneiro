'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from '../Logo'
import Button from '../Button'
import styles from './Header.module.scss'

const Header = ({ themeColor = '--colour-white-00' }) => {

    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            
            if (currentScrollTop >= maxScroll) {
                setIsScrollingUp(true);
            } else if (currentScrollTop > lastScrollTop && currentScrollTop > 200) {
                setIsScrollingUp(false);
            } else {
                setIsScrollingUp(true);
            }

            if (currentScrollTop > 0) {
                setIsHeaderScrolled(true);
            } else {
                setIsHeaderScrolled(false);
            }

            setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
        };

        if (!isMobileMenuOpen) {
            window.addEventListener('scroll', handleScroll);
        }
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop, isMobileMenuOpen]);

    return (
        <div className={`${styles.headerContainerWrapper} ${styles.fixedHeader} ${isScrollingUp ? '' : styles.headerHidden} ${isHeaderScrolled ? styles.headerScrolled : ''}`}>
            <div className={`${styles.mobileMenuBackground} ${isMobileMenuOpen ? styles.mobileMenuBackgroundActive : ''}`} />
            <div className={`${styles.headerContainer} container mx-auto px-4`}>
                <div className="flex items-center justify-between">
                    <div className={`${styles.logoContainer}`}>
                        <Link href="/">
                            <Logo themeColor={themeColor} />
                        </Link>
                    </div>
                    <div className={`text-right ${styles.buttonContainer}`}>
                        <Button href="/#request-demo">Request a demo</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;