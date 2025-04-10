'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navigation = ({ themeColor }) => {
    const pathname = usePathname()

    return (
        <ul className="flex items-center justify-center space-x-8 m-0!">
            <li className={`text-xs uppercase tracking-wider font-semibold`} style={{color: `var(${themeColor})`}}>
                <Link className={`${pathname === '/' ? 'text-blue-01!' : ''}`} href="/">Home</Link>
            </li>
            <li className={`text-xs uppercase tracking-wider font-semibold`} style={{color: `var(${themeColor})`}}>
                <Link className={`${pathname === '/about' ? 'text-blue-01!' : ''}`} href="/about">About us</Link>
            </li>
            <li className={`text-xs uppercase tracking-wider font-semibold`} style={{color: `var(${themeColor})`}}>
                <Link className={`${pathname === '/solution' ? 'text-blue-01!' : ''}`} href="/solution">Our solution</Link>
            </li>
            <li className={`text-xs uppercase tracking-wider font-semibold`} style={{color: `var(${themeColor})`}}>
                <Link className={`${pathname === '/insights' ? 'text-blue-01!' : ''}`} href="/insights">Insights</Link>
            </li>
            <li className={`text-xs uppercase tracking-wider font-semibold`} style={{color: `var(${themeColor})`}}>
                <Link className={`${pathname === '/contact' ? 'text-blue-01!' : ''}`} href="/contact">Contact</Link>
            </li>
        </ul>
    )
}

export default Navigation;