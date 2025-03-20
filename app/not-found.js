import Link from 'next/link'
import Header from '../components/Header'
import styles from './[legal]/Legal.module.scss'
 
export default function NotFound() {
  return (
    <>
        <Header themeColor="#0F0D42" />
        <div className={styles.legalContainer}>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-6 mb-5">
                        <h1>Not Found</h1>
                    </div>
                    <div className="col-lg-5">
                        <p>Could not find requested resource</p>
                        <Link href="/" className='text-decoration-underline'>Return Home</Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}