import Link from 'next/link'
import styles from './Button.module.scss'

const Button = ({ children, href, external, submit, plain }) => {
    return (
        <>
            {submit ? (
                <button type="submit" className={styles.button}>{children}</button>
            ) : (
                <Link href={href ? href : '#'} target={external ? '_blank' : '_self'} className={`${styles.button} ${plain ? styles.plain : ''}`}>{children}</Link>
            )}
        </>
    )
}

export default Button;