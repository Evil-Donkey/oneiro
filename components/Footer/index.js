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
                    <div className='row justify-content-between'>
                        <div className='col-md-auto'>
                            <small>&copy; Oneiro Solutions. All Rights Reserved.</small>
                        </div>
                        <div className='col-md-auto d-flex align-items-center gap-2 justify-content-md-end'>
                            <small><a href='#'>Terms of use</a></small>
                            <small><a href='#'>Privacy policy</a></small>
                            <small><a href='#'>Anti-slavery policy</a></small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;