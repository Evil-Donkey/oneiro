import Link from 'next/link'
import styles from './Button.module.scss'

const Button = ({ children, href, external, submit, plain, onClick }) => {
    const isAnchor = href && href.startsWith('#')
    
    return (
        <>
            {submit ? (
                <button type="submit" className={styles.button}>{children}</button>
            ) : (
                <Link 
                    href={href ? href : '#'} 
                    target={external ? '_blank' : '_self'} 
                    className={`${styles.button} ${plain ? styles.plain : ''}`}
                    onClick={onClick}
                >
                    {children}
                </Link>
            )}
        </>
    )
}

export default Button;