import Image from "next/image";
import LazyItem from "../../LazyItem";

const FullWidthImage = ({ data }) => {
    const { image, mobileImage, lightBackground, removePaddingTop, removePaddingBottom } = data;

    return (
        <div className={`${lightBackground ? `bg-white-01` : `bg-blue-02`} ${removePaddingTop ? `pt-0` : `pt-20`} ${removePaddingBottom ? `pb-0` : `pb-20`} md:py-20`}>
            <div className="container mx-auto relative px-6 md:px-4 text-center">
                <div className="overflow-hidden rounded-lg">
                    <LazyItem>
                        {image && <Image className={`mx-auto ${mobileImage ? `hidden md:block` : ``}`} src={image.mediaItemUrl} alt={image.altText} width={image.mediaDetails.width} height={image.mediaDetails.height} />}
                        {mobileImage && <Image className={`${image ? `block md:hidden` : ``}`} src={mobileImage.mediaItemUrl} alt={mobileImage.altText} width={mobileImage.mediaDetails.width} height={mobileImage.mediaDetails.height} />}
                    </LazyItem>
                </div>
            </div>
        </div>
    )
}

export default FullWidthImage;