"use client";

import ContactForm from "@/components/ContactForm";
import useLazyLoad from "@/hooks/useLazyLoad";
import LazyItem from "@/components/LazyItem";
import styles from "./RequestDemo.module.scss";

const RequestDemo = ({ data }) => {

    useLazyLoad();
    const { 
        copy, 
        heading1, 
        heading2,
    } = data;

    return (
        <div className={styles.requestDemo} id="request-demo">
            <div className='container px-6 md:px-4 mx-auto'>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-1/2'>
                        {heading2 && <LazyItem><h2>{heading2}</h2></LazyItem>}
                        {heading1 && <LazyItem><h1>{heading1}</h1></LazyItem>}
                    </div>
                    <div className='md:w-1/2'>
                        {copy && <LazyItem><div dangerouslySetInnerHTML={{ __html: copy }} /></LazyItem>}
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RequestDemo;