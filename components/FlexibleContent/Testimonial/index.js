import styles from "./Testimonial.module.scss";
import Image from "next/image";
import LazyItem from "../../LazyItem";

const Testimonial = ({ data }) => {

    const { 
        copy, 
        logo, 
        heading,
    } = data;

    return (
        <div className={`${styles.testimonial} bg-white-01 text-blue-02`}>
            {heading && 
                <div className="w-full text-center mb-15 mx-auto">
                    <h2 className="mb-5"><LazyItem><div dangerouslySetInnerHTML={{ __html: heading }} /></LazyItem></h2>
                </div>
            }
            <div className='container mx-auto relative px-6 md:px-4'>
                <div className={`flex flex-col p-5 lg:p-20 bg-grey-03 rounded-lg space-x-10 relative text-center items-center`}>
                    {logo && 
                        <div className="w-full lg:w-1/3 mb-5">
                            <LazyItem><Image src={logo.mediaItemUrl} alt={logo.altText} width={logo.mediaDetails.width / 2} height={logo.mediaDetails.height / 2} /></LazyItem>
                        </div>
                    }
                    {copy && 
                        <div className="w-full lg:w-1/2">
                            <LazyItem><div className="italic" dangerouslySetInnerHTML={{ __html: copy }} /></LazyItem>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Testimonial;