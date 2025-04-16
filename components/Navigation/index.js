'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navigation = ({ lightTheme, isHeaderScrolled }) => {
    const pathname = usePathname()

    const navigationItems = [
        {
            label: 'Home',
            href: '/homepage'
        },
        {
            label: 'About us',
            href: '/about'
        },
        {
            label: 'Our solution',
            href: '/solution'
        },
        {
            label: 'Insights',
            href: '/insights'
        },
        {
            label: 'Contact',
            href: '/contact'
        }
    ]

    console.log(lightTheme);
    console.log(isHeaderScrolled);

    return (
        <ul className="flex flex-col lg:flex-row items-center justify-center lg:space-x-8 gap-4 lg:gap-0 m-0!">
            {navigationItems.map((item, index) => (
                <li key={index} className={`text-base lg:text-xs uppercase tracking-wider font-semibold ${lightTheme && !isHeaderScrolled ? 'text-white md:text-blue-02' : 'text-white'}`}>
                    <Link className={`${pathname === item.href ? 'text-blue-01!' : ''}`} href={item.href}>{item.label}</Link>
                </li>
            ))}
        </ul>
    )
}

export default Navigation;