import Link from 'next/link'
import Logo from '../Logo'
import styles from './Footer.module.scss'
import { X, LinkedIn } from '../Icons'

const Footer = ({ themeSettings }) => {

    const { email, address, linkedinUrl, xUrl } = themeSettings;

    return (
        <>
            <div className={styles.footerContainerWrapper}>
                <div className="container mx-auto py-5 mb-5 px-4">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                        <div className="md:w-1/2">
                            <Link href="/">
                                <Logo lightTheme={false} />
                            </Link>

                            <div className="mt-5 flex flex-col gap-4">
                                {address && <div dangerouslySetInnerHTML={{ __html: address }} />}
                                {email && <a href={`mailto:${email}`} className="hover:underline" target="_blank">{email}</a>}
                            </div>
                        </div>
                        <div className="md:w-1/2 flex items-center justify-end mt-4 md:mt-0 gap-2">
                            {linkedinUrl && (
                                <Link href={linkedinUrl} target="_blank">
                                    <LinkedIn />
                                </Link>
                            )}
                            {xUrl && (
                                <Link href={xUrl} target="_blank">
                                    <X />
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <div className='container mx-auto py-4'>
                    <div className='flex flex-col md:flex-row items-center justify-between text-center md:text-left'>
                        <div className='md:w-1/2 mb-3 mb-md-0'>
                            <small>&copy; Oneiro Solutions. All Rights Reserved.</small>
                        </div>
                        <div className='md:w-1/2 flex align-center gap-3 justify-center md:justify-end mb-3 mb-md-0'>
                            <small><Link href='/terms-of-use'>Terms of use</Link></small>
                            <small><Link href='/privacy-policy'>Privacy policy</Link></small>
                            <small><Link href='/anti-slavery-policy'>Anti-slavery policy</Link></small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;