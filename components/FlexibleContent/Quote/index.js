import styles from "./Quote.module.scss";
import Image from "next/image";
import LazyItem from "../../LazyItem";

const Quote = ({ data }) => {

    const { 
        copy, 
        image, 
        heading,
    } = data;

    return (
        <div className={`${styles.quote} bg-white-01`}>
            
            <div className='container mx-auto relative px-6 md:px-4'>
                <div className="flex flex-col md:flex-row justify-between p-10 lg:p-20 bg-grey-03 rounded-lg space-x-10">
                    {image && <div className="w-full lg:w-1/3">
                        <LazyItem className="h-full">
                            <Image className="h-full overflow-hidden rounded-lg object-cover" src={image.mediaItemUrl} alt={image.altText} width={image.mediaDetails.width} height={image.mediaDetails.height} />
                        </LazyItem>
                    </div>}
                    <div className="w-full lg:w-2/3">
                        {heading && <h2 className="mb-5"><LazyItem>{heading}</LazyItem></h2>}
                        {copy && <LazyItem><div dangerouslySetInnerHTML={{ __html: copy }} /></LazyItem>}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Quote;