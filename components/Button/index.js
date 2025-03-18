import Link from 'next/link'
import styles from './Button.module.scss'

const Button = ({ children, href, external, submit }) => {
    return (
        <>
            {submit ? (
                <button type="submit" className={styles.button}>{children}</button>
            ) : (
                <Link href={href ? href : '#'} target={external ? '_blank' : '_self'} className={styles.button}>{children}</Link>
            )}
        </>
    )
}

export default Button;