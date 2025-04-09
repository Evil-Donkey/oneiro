import LazyItem from "../../LazyItem";

const CentredCopy = ({ data }) => {
    const { copy, heading } = data;

    return (
        <div className="py-20 bg-white-01 text-blue-02">
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