'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const Navigation = ({ lightTheme, isHeaderScrolled }) => {
    const pathname = usePathname()
    const [isSolutionsHovered, setIsSolutionsHovered] = useState(false)

    const navigationItems = [
        {
            label: 'Home',
            href: '/'
        },
        {
            label: 'About us',
            href: '/about'
        },
        {
            label: 'Our solutions',
            href: '/solutions',
            dropdown: [
                { label: 'DLX Overview', href: '/solutions' },
                { label: 'DLX Features', href: '/products' }
            ]
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

    return (
        <ul className="flex flex-col lg:flex-row items-center justify-center lg:space-x-8 gap-4 lg:gap-0 m-0! list-none!">
            {navigationItems.map((item, index) => (
                <li 
                    key={index} 
                    className={`text-base lg:text-xs uppercase tracking-wider font-semibold relative group ${lightTheme && !isHeaderScrolled ? 'text-white md:text-blue-02' : 'text-white'}`}
                    onMouseEnter={() => item.dropdown && setIsSolutionsHovered(true)}
                    onMouseLeave={() => item.dropdown && setIsSolutionsHovered(false)}
                >
                    {item.dropdown ? (
                        <span className={`${pathname === item.href ? 'text-blue-01!' : ''} cursor-pointer`}>{item.label}</span>
                    ) : (
                        <Link className={`${pathname === item.href ? 'text-blue-01!' : ''}`} href={item.href}>{item.label}</Link>
                    )}
                    {item.dropdown && isSolutionsHovered && (
                        <>
                            <div className="absolute top-full left-0 w-full h-[21px] bg-transparent" />
                            <div className="absolute top-full left-0 mt-[21px] bg-blue-02 py-2 min-w-[200px] rounded shadow-lg z-10">
                                {item.dropdown.map((dropdownItem, idx) => (
                                    <Link
                                        key={idx}
                                        href={dropdownItem.href}
                                        className="block px-4 py-2 text-white hover:bg-blue-01 transition-colors"
                                    >
                                        {dropdownItem.label}
                                    </Link>
                                ))}
                            </div>
                        </>
                    )}
                </li>
            ))}
        </ul>
    )
}

export default Navigation;