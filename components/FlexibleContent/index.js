import SingleColumn from "./SingleColumn";
import RequestDemo from "./RequestDemo";
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
    })}

    return (
        <>
           {flexibleContentArray.map((component) => component)} 
        </>
    );
};

export default PageFlexibleContent;