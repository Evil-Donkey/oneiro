import getFlexiblePage from "@/lib/getFlexiblePage";
import generateMetadataFromLib from "@/lib/generateMetadata";
import FlexiblePage from "@/components/Templates/FlexiblePage";

export async function generateMetadata() {
  return await generateMetadataFromLib("270");
}

export default async function HomePage() {
  const flexibleContent = await getFlexiblePage("270");
  return <FlexiblePage flexibleContent={flexibleContent} />;
}