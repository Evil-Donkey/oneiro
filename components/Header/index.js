'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from '../Logo'
import Button from '../Button'
import Navigation from '../Navigation'
import { IconHamburger, IconClose } from '../Icons'
import styles from './Header.module.scss'

const Header = ({ lightTheme, hideNavigation }) => {

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

    const toggleMobileMenu = () => {
        console.log('toggleMobileMenu');
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    return (
        <div className={`relative ${styles.headerContainerWrapper} ${styles.fixedHeader} ${isScrollingUp ? '' : styles.headerHidden} ${isHeaderScrolled ? styles.headerScrolled : ''}`}>
            <div className={`${styles.mobileMenuBackground} ${isMobileMenuOpen ? styles.mobileMenuBackgroundActive : ''}`} />
            <div className={`${styles.headerContainer} container mx-auto px-4`}>
                <div className="flex items-center justify-between">
                    <div className={`${styles.logoContainer}`}>
                        <Link href="/homepage">
                            <Logo lightTheme={lightTheme} isMobileMenuOpen={isMobileMenuOpen} />
                        </Link>
                    </div>
                    <div className={`transform transition-transform duration-300 ease-in-out lg:transform-none flex flex-col lg:flex-row items-center justify-center gap-5 absolute top-0 left-0 w-svw h-svh lg:h-auto lg:w-auto bg-blue-02 lg:bg-transparent lg:static ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
                        {!hideNavigation && <Navigation lightTheme={lightTheme} isHeaderScrolled={isHeaderScrolled} />}
                        <div className={`text-right ${styles.buttonContainer}`}>
                            <Button href="#request-demo" onClick={toggleMobileMenu}>Request a demo</Button>
                        </div>
                    </div>
                    <div className={`${styles.mobileMenu} lg:hidden z-10`} onClick={toggleMobileMenu}>
                        {!isMobileMenuOpen ? <IconHamburger lightTheme={lightTheme} /> : <IconClose />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;