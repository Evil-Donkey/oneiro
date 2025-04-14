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
        <div className={`${styles.quote} bg-white-01 lg:text-white`}>
            <div className='container mx-auto relative px-6 md:px-4'>
                <div className={`${styles.quoteContent} flex flex-col md:flex-row justify-end p-10 lg:p-20 bg-grey-03 rounded-lg space-x-10 bg-cover bg-left lg:min-h-200 relative overflow-hidden`} style={{ backgroundImage: `url(${image.mediaItemUrl})` }}>
                    {image && <div className="w-full lg:hidden">
                        <LazyItem className="h-full mb-5 md:mb-0">
                            <Image className="h-full overflow-hidden rounded-lg object-cover md:object-[20%_50%]" src={image.mediaItemUrl} alt={image.altText} width={image.mediaDetails.width} height={image.mediaDetails.height} />
                        </LazyItem>
                    </div>}
                    <div className="w-full lg:w-2/5">
                        {heading && <h2 className="mb-5"><LazyItem>{heading}</LazyItem></h2>}
                        {copy && <LazyItem><div className="italic" dangerouslySetInnerHTML={{ __html: copy }} /></LazyItem>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quote;