import styles from "./Quote.module.scss";
import Image from "next/image";
import LazyItem from "../../LazyItem";
import Button from "@/components/Button";

const Quote = ({ data }) => {

    const { 
        copy, 
        image, 
        heading,
        ctaLabel,
        ctaUrl,
        fullWidthOverlay
    } = data;

    return (
        <div className={`${styles.quote} bg-white-01 text-blue-02 lg:text-white`}>
            <div className='container mx-auto relative px-6 md:px-4'>
                <div className={`${styles.quoteContent} flex flex-col md:flex-row ${fullWidthOverlay ? 'justify-center text-center items-end' : 'justify-end'} p-5 lg:p-20 bg-grey-03 rounded-lg space-x-10 bg-cover bg-left lg:min-h-200 relative overflow-hidden`} style={{ backgroundImage: `url(${image.mediaItemUrl})` }}>
                    <div className={`hidden lg:block absolute top-0 left-0 w-full h-full ${fullWidthOverlay ? 'bg-gradient-to-t from-black/70 to-transparent' : 'bg-gradient-to-r from-transparent to-black'}`} />
                    {image && <div className="w-full lg:hidden m-0">
                        <LazyItem className="h-full mb-5 md:mb-0">
                            <Image className="h-full overflow-hidden rounded-lg object-cover md:object-[20%_50%]" src={image.mediaItemUrl} alt={image.altText} width={image.mediaDetails.width} height={image.mediaDetails.height} />
                        </LazyItem>
                    </div>}
                    <div className="w-full lg:w-2/5">
                        {heading && <h2 className="mb-5"><LazyItem><div dangerouslySetInnerHTML={{ __html: heading }} /></LazyItem></h2>}
                        {copy && <LazyItem><div className={fullWidthOverlay ? '' : 'italic'} dangerouslySetInnerHTML={{ __html: copy }} /></LazyItem>}
                        {ctaLabel && ctaUrl && <div className='mt-8 mb-10'><LazyItem><Button href={ctaUrl}>{ctaLabel}</Button></LazyItem></div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quote;