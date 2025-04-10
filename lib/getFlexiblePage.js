import fetchAPI from "./api";

const FLEXIBLE_CONTENT_QUERY = `
  query getFlexiblePage($id: ID!) {
    page(id: $id, idType: DATABASE_ID) {
      content(format: RENDERED)
      title(format: RENDERED)
      flexibleContent {
        flexibleContent {
          ... on Page_Flexiblecontent_FlexibleContent_SingleColumn {
            fieldGroupName
            backgroundImage {
              altText
              mediaItemUrl
              mediaDetails { height width }
            }
            backgroundImageTopRight
            backgroundVideoDesktop { mediaItemUrl }
            backgroundVideoMobile { mediaItemUrl }
            centred
            copy
            darkBlue
            fullHeight
            hideShine
            heading1
            heading2
            largerHeading
            icon {
              altText
              mediaItemUrl
              mediaDetails { height width }
            }
            list { copy heading }
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
              backgroundImage { mediaItemUrl }
            }
          }
          ... on Page_Flexiblecontent_FlexibleContent_CentredCopy {
            copy
            fieldGroupName
            heading
            lightBackground
          }
          ... on Page_Flexiblecontent_FlexibleContent_FullWidthImage {
            fieldGroupName
            lightBackground
            image {
              altText
              mediaItemUrl
              mediaDetails { height width }
            }
            mobileImage {
              altText
              mediaItemUrl
              mediaDetails { height width }
            }
          }
          ... on Page_Flexiblecontent_FlexibleContent_TwoColumns {
            copy
            fieldGroupName
            heading1
            heading2
            imageFirst
            whiteOnBlue
            backgroundImage { mediaItemUrl }
            image {
              altText
              mediaItemUrl
              mediaDetails { height width }
            }
          }
          ... on Page_Flexiblecontent_FlexibleContent_ThreeColumnsGrid {
            centredText
            fieldGroupName
            heading
            twoColumns
            backgroundImage { mediaItemUrl }
            grid {
              copy
              heading
              icon {
                altText
                mediaItemUrl
                mediaDetails { height width }
              }
            }
          }
          ... on Page_Flexiblecontent_FlexibleContent_SlidingBlocks {
            fieldGroupName
            heading
            blocks {
              copy
              heading
              icon {
                altText
                mediaDetails {
                  height
                  width
                }
                mediaItemUrl
              }
            }
          }
          ... on Page_Flexiblecontent_FlexibleContent_ScrollingText {
            fieldGroupName
            heading
            blocks {
              copy
              heading
            }
          }
          ... on Page_Flexiblecontent_FlexibleContent_Quote {
            copy
            fieldGroupName
            heading
            image {
              altText
              mediaDetails {
                height
                width
              }
              mediaItemUrl
            }
          }
        }
      }
    }
  }
`;

export default async function getFlexiblePage(pageId) {
  const data = await fetchAPI(FLEXIBLE_CONTENT_QUERY, {
    variables: { id: String(pageId) }
  });

  return data?.page?.flexibleContent?.flexibleContent;
}
