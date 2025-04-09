import Image from "next/image";
import LazyItem from "../../LazyItem";

const FullWidthImage = ({ data }) => {
    const { image } = data;

    return (
        <div className="bg-white-01 pb-20">
            <div className="container mx-auto relative px-6 md:px-4">
                <div className="overflow-hidden rounded-lg">
                    <LazyItem>
                        <Image className="aspect-5/3 object-cover" src={image.mediaItemUrl} alt={image.altText} width={image.mediaDetails.width} height={image.mediaDetails.height} />
                    </LazyItem>
                </div>
            </div>
        </div>
    )
}

export default FullWidthImage;