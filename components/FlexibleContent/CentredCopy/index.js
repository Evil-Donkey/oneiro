import LazyItem from "../../LazyItem";

const CentredCopy = ({ data }) => {
    const { copy, heading, lightBackground } = data;

    return (
        <div className={`${lightBackground ? `bg-white-01 text-blue-02` : `bg-blue-02 text-white-00`} py-20`}>
            <div className="container mx-auto relative px-6 md:px-4">
                <div className="flex justify-center">
                    <div className="w-1/2 text-center">
                        <LazyItem>
                            <h2>{heading}</h2>
                        </LazyItem>
                    </div>
                </div>
                <div className="flex justify-center mt-5">
                    <div className="w-2/5 text-center">
                        <LazyItem>
                            <div dangerouslySetInnerHTML={{ __html: copy }} />
                        </LazyItem>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CentredCopy;