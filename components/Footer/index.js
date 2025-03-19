import Link from 'next/link'
import Logo from '../Logo'
import styles from './Footer.module.scss'
import { X, LinkedIn } from '../Icons'

const Footer = ({ themeSettings }) => {

    const { email, address, linkedinUrl, xUrl } = themeSettings;

    return (
        <>
            <div className={styles.footerContainerWrapper}>
                <div className='container py-5 mb-5'>
                    <div className="row align-items-md-center justify-content-between">
                        <div className='col-md-6'>
                            <Link href="/">
                                <Logo />
                            </Link>

                            <div className='mt-5 d-flex flex-column gap-4'>
                                {address && <div dangerouslySetInnerHTML={{ __html: address }} />}
                                {email && <a href={`mailto:${email}`}>{email}</a>}
                            </div>
                        </div>
                        <div className='col-md-6 text-end d-flex align-items-center justify-content-md-end mt-4 mt-md-0 gap-2'>
                            {linkedinUrl && <Link href={linkedinUrl} target='_blank'>
                                <LinkedIn />
                            </Link>}
                            {xUrl && <Link href={xUrl} target='_blank'>
                                <X />
                            </Link>}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <div className='container py-4'>
                    <div className='row justify-content-between text-center text-md-start'>
                        <div className='col-md-auto mb-3 mb-md-0'>
                            <small>&copy; Oneiro Solutions. All Rights Reserved.</small>
                        </div>
                        <div className='col-md-auto d-flex align-items-center gap-3 justify-content-center justify-content-md-end mb-3 mb-md-0'>
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