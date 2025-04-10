import getFlexiblePage from "@/lib/getFlexiblePage";
import generateMetadataFromLib from "@/lib/generateMetadata";
import FlexiblePage from "@/components/Templates/FlexiblePage";
import styles from "./About.module.scss";

export async function generateMetadata() {
  return await generateMetadataFromLib("174");
}

export default async function AboutPage() {
  const flexibleContent = await getFlexiblePage("174");
  return <FlexiblePage themeColor="--background" flexibleContent={flexibleContent} className={styles.aboutContainer} />;
}
