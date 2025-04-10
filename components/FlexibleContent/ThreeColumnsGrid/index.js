import styles from "./ThreeColumnsGrid.module.scss";
import Image from "next/image";
import LazyItem from "../../LazyItem";

const ThreeColumnsGrid = ({ data }) => {

    const { 
        backgroundImage,
        centredText,
        grid,
        heading,
        twoColumns
    } = data;

    return (
        <div 
        className={`${styles.threeColumnsGrid} bg-blue-02 ${centredText ? `text-center` : ``} text-white`} 
        style={{ backgroundImage: backgroundImage ? `url(${backgroundImage.mediaItemUrl})` : 'none' }}
        >
            
            <div className='container mx-auto relative px-6 md:px-4'>
                {heading &&
                    <div className="flex flex-col md:flex-row justify-center">
                        <div className="w-full text-center">
                            {heading && <h2><LazyItem>{heading}</LazyItem></h2>}
                        </div>
                    </div>
                }
                {grid && 
                    <div className={`mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-20 ${twoColumns ? 'lg:gap-x-60' : 'lg:grid-cols-3'} gap-y-15`}>
                        {grid.map((item, index) => {
                            const { heading, copy, icon } = item;
                            return (
                                <div key={index} className={`${styles.threeColumnsGridItem} flex flex-col ${centredText ? 'items-center' : 'items-start'} gap-4`}>
                                    {icon && <LazyItem><Image src={icon.mediaItemUrl} alt={icon.altText} width={icon.mediaDetails.width} height={icon.mediaDetails.height} /></LazyItem>}
                                    {heading && <h2><LazyItem>{heading}</LazyItem></h2>}
                                    {copy && <LazyItem><div dangerouslySetInnerHTML={{ __html: copy }} /></LazyItem>}
                                </div>
                            )
                        })}
                    </div>
                    }
            </div>

        </div>
    )
}

export default ThreeColumnsGrid;