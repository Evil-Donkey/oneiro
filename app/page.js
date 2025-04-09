import fetchAPI from '../lib/api'
import generateMetadataFromLib from '../lib/generateMetadata'
import PageFlexibleContent from '../components/FlexibleContent'
import Header from '../components/Header'

export async function generateMetadata() {
  return await generateMetadataFromLib("9");
}


export default async function Page() {

  const data = await fetchAPI(`
    query getHomePage {
      page(id: "9", idType: DATABASE_ID) {
        content(format: RENDERED)
        title(format: RENDERED)
        flexibleContent {
          flexibleContent {
            ... on Page_Flexiblecontent_FlexibleContent_SingleColumn {
              fieldGroupName
              backgroundImage {
                altText
                mediaItemUrl
                mediaDetails {
                  height
                  width
                }
              }
              backgroundImageTopRight
              backgroundVideoDesktop {
                mediaItemUrl
              }
              backgroundVideoMobile {
                mediaItemUrl
              }
              centred
              copy
              darkBlue
              fullHeight
              heading1
              heading2
              icon {
                altText
                mediaItemUrl
                mediaDetails {
                  height
                  width
                }
              }
              list {
                copy
                heading
              }
                ctaLabel
                ctaUrl
            }
            ... on Page_Flexiblecontent_FlexibleContent_RequestADemo {
              copy
              fieldGroupName
              heading1
              heading2
            }
            ... on Page_Flexiblecontent_FlexibleContent_TabbedPanels {
              copy
              fieldGroupName
              heading
              panels {
                boxCopy
                ctaLabel
                ctaUrl
                heading
                mainCopy
                navLabel
                backgroundImage {
                  mediaItemUrl
                }
              }
            }
            ... on Page_Flexiblecontent_FlexibleContent_CentredCopy {
              copy
              fieldGroupName
              heading
            }
            ... on Page_Flexiblecontent_FlexibleContent_FullWidthImage {
              fieldGroupName
              image {
                altText
                mediaItemUrl
                mediaDetails {
                  height
                  width
                }
              }
            }
          }
        }
      }
    }
  `);

  const flexibleContent = data?.page?.flexibleContent?.flexibleContent;

  return (
    <>
      <Header />
      <PageFlexibleContent data={flexibleContent} />
    </>
  )
};