import fetchAPI from '../lib/api'
import generateMetadata from '../lib/generateMetadata'
import PageFlexibleContent from '../components/FlexibleContent'
import Header from '../components/Header'

generateMetadata("9");

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
            }
            ... on Page_Flexiblecontent_FlexibleContent_RequestADemo {
              copy
              fieldGroupName
              heading1
              heading2
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