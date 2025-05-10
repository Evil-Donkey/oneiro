
import LazyItem from "../../LazyItem";

const FullWidthVideo = ({ data }) => {
    const { mp4Video, lightBackground, posterImage } = data;

    return (
        <div className={`${lightBackground ? `bg-white-01` : `bg-blue-02`} pb-20 md:py-20`}>
            <div className="container mx-auto relative px-6 md:px-4 text-center">
                <div className="overflow-hidden rounded-lg">
                    <LazyItem>
                    <div className='aspect-video'>
                        {mp4Video && <video className="w-full h-full object-cover" src={`${mp4Video.mediaItemUrl}${posterImage ? '' : '#t=0.1'}`} poster={posterImage ? posterImage.mediaItemUrl : undefined} controls />}
                    </div>
                    </LazyItem>
                </div>
            </div>
        </div>
    )
}

export default FullWidthVideo;