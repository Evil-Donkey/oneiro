"use client";

import DemoForm from "@/components/DemoForm";
import useLazyLoad from "@/hooks/useLazyLoad";
import LazyItem from "@/components/LazyItem";
import styles from "./RequestDemo.module.scss";

const RequestDemo = ({ data }) => {

    useLazyLoad();

    let heading1 = data?.heading1 ? data?.heading1 : 'See DLX in Action';
    let heading2 = data?.heading2 ? data?.heading2 : 'Request a Demo';
    let copy = data?.copy ? data?.copy : '<p>Complete the form below, and one of our experts will be in touch to arrange your personalised demo.</p>';

    return (
        <div className={styles.requestDemo} id="request-demo">
            <div className='container px-6 md:px-4 mx-auto'>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-1/2'>
                        {heading2 && <LazyItem><h3>{heading2}</h3></LazyItem>}
                        {heading1 && <LazyItem><h1>{heading1}</h1></LazyItem>}
                    </div>
                    <div className='md:w-1/2'>
                        {copy && <LazyItem><div dangerouslySetInnerHTML={{ __html: copy }} /></LazyItem>}
                        <LazyItem><DemoForm /></LazyItem>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RequestDemo;