
import LazyItem from "../../LazyItem";

const FullWidthVideo = ({ data }) => {
    const { mp4Video, lightBackground } = data;

    return (
        <div className={`${lightBackground ? `bg-white-01` : `bg-blue-02`} py-20`}>
            <div className="container mx-auto relative px-6 md:px-4 text-center">
                <div className="overflow-hidden rounded-lg">
                    <LazyItem>
                    <div className='aspect-video'>
                        {mp4Video && <video src={mp4Video.mediaItemUrl} controls />}
                    </div>
                    </LazyItem>
                </div>
            </div>
        </div>
    )
}

export default FullWidthVideo;