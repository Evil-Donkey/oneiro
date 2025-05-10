import SingleColumn from "./SingleColumn";
import RequestDemo from "./RequestDemo";
import TabbedPanels from "./TabbedPanels";
import CentredCopy from "./CentredCopy";
import TwoColumns from "./TwoColumns";
import ThreeColumnsGrid from "./ThreeColumnsGrid";
import FullWidthImage from "./FullWidthImage";
import FullWidthVideo from "./FullWidthVideo";
import SlidingBlocks from "./SlidingBlocks";
import ScrollingText from "./ScrollingText";
import Quote from "./Quote";
import Team from "./Team";

const PageFlexibleContent = ({ data }) => {

    let flexibleContentArray = [];

    {data && data.forEach((data, i) => {

        const { fieldGroupName } = data;

        if (fieldGroupName === "Page_Flexiblecontent_FlexibleContent_SingleColumn") {
            flexibleContentArray.push(<SingleColumn data={data} index={i} key={i.toString()} />);
        }
        if (fieldGroupName === "Page_Flexiblecontent_FlexibleContent_RequestADemo") {
            flexibleContentArray.push(<RequestDemo data={data} key={i.toString()} />);
        }
        if (fieldGroupName === "Page_Flexiblecontent_FlexibleContent_TabbedPanels") {
            flexibleContentArray.push(<TabbedPanels data={data} key={i.toString()} />);
        }
        if (fieldGroupName === "Page_Flexiblecontent_FlexibleContent_CentredCopy") {
            flexibleContentArray.push(<CentredCopy data={data} key={i.toString()} />);
        }
        if (fieldGroupName === "Page_Flexiblecontent_FlexibleContent_FullWidthImage") {
            flexibleContentArray.push(<FullWidthImage data={data} key={i.toString()} />);
        }
        if (fieldGroupName === "Page_Flexiblecontent_FlexibleContent_FullWidthVideo") {
            flexibleContentArray.push(<FullWidthVideo data={data} key={i.toString()} />);
        }
        if (fieldGroupName === "Page_Flexiblecontent_FlexibleContent_TwoColumns") {
            flexibleContentArray.push(<TwoColumns data={data} key={i.toString()} />);
        }
        if (fieldGroupName === "Page_Flexiblecontent_FlexibleContent_ThreeColumnsGrid") {
            flexibleContentArray.push(<ThreeColumnsGrid data={data} key={i.toString()} />);
        }
        if (fieldGroupName === "Page_Flexiblecontent_FlexibleContent_SlidingBlocks") {
            flexibleContentArray.push(<SlidingBlocks data={data} key={i.toString()} />);
        }
        if (fieldGroupName === "Page_Flexiblecontent_FlexibleContent_ScrollingText") {
            flexibleContentArray.push(<ScrollingText data={data} key={i.toString()} />);
        }
        if (fieldGroupName === "Page_Flexiblecontent_FlexibleContent_Quote") {
            flexibleContentArray.push(<Quote data={data} key={i.toString()} />);
        }
        if (fieldGroupName === "Page_Flexiblecontent_FlexibleContent_Team") {
            flexibleContentArray.push(<Team data={data} key={i.toString()} />);
        }
    })}

    return (
        <>
           {flexibleContentArray.map((component) => component)} 
        </>
    );
};

export default PageFlexibleContent;