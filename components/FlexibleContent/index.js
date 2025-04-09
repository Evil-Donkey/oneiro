import SingleColumn from "./SingleColumn";
import RequestDemo from "./RequestDemo";
import TabbedPanels from "./TabbedPanels";
import CentredCopy from "./CentredCopy";
import FullWidthImage from "./FullWidthImage";

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
    })}

    return (
        <>
           {flexibleContentArray.map((component) => component)} 
        </>
    );
};

export default PageFlexibleContent;