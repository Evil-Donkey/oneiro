import getFlexiblePage from "@/lib/getFlexiblePage";
import generateMetadataFromLib from "@/lib/generateMetadata";
import FlexiblePage from "@/components/Templates/FlexiblePage";
import styles from "./Solution.module.scss";

export async function generateMetadata() {
  return await generateMetadataFromLib("421");
}

export default async function SolutionPage() {
  const flexibleContent = await getFlexiblePage("421");
  return <FlexiblePage flexibleContent={flexibleContent} className={styles.solutionContainer} />;
}
