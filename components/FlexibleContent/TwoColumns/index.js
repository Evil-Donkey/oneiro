import styles from "./TwoColumns.module.scss";
import Image from "next/image";
import LazyItem from "../../LazyItem";

const TwoColumns = ({ data }) => {

    const { 
        backgroundImage,
        copy, 
        image, 
        imageFirst,
        heading1, 
        heading2,
        whiteOnBlue
    } = data;

    return (
        <div 
        className={`${styles.twoColumns} ${whiteOnBlue ? `bg-blue-02` : ``}`} 
        style={{ backgroundImage: backgroundImage ? `url(${backgroundImage.mediaItemUrl})` : 'none' }}
        >
            
            <div className='container mx-auto relative px-6 md:px-4'>
                <div className="flex flex-col md:flex-row justify-between">
                    <div className={`w-full lg:w-1/2 ${imageFirst ? `lg:pl-15` : `lg:pr-15`}`}>
                        {heading2 && <h3 className={`${whiteOnBlue ? 'text-white' : 'text-blue-01'}`}><LazyItem>{heading2}</LazyItem></h3>}
                        {heading1 && <h1 className={`${whiteOnBlue ? 'text-white' : ''}`}><LazyItem>{heading1}</LazyItem></h1>}
                        {copy && <LazyItem><div className={`${whiteOnBlue ? 'text-white' : ''}`} dangerouslySetInnerHTML={{ __html: copy }} /></LazyItem>}
                    </div>
                    {image && <div className={`w-full lg:w-1/2 order-first mb-10 lg:mb-0 ${imageFirst ? 'lg:order-first lg:pr-15' : 'lg:order-last lg:pl-15'}`}>
                        <LazyItem>
                            <Image className="aspect-5/4 overflow-hidden rounded-lg object-cover" src={image.mediaItemUrl} alt={image.altText} width={image.mediaDetails.width} height={image.mediaDetails.height} />
                        </LazyItem>
                    </div>}
                </div>
            </div>

        </div>
    )
}

export default TwoColumns;