import fetchAPI from '../../../lib/api';
import { notFound } from 'next/navigation';
import styles from './Legal.module.scss';
import Header from '../../../components/Header';
import PageFlexibleContent from '../../../components/FlexibleContent';

export async function generateMetadata({ params }) {
  const { legal } = await params || {};

  if (!legal) {
    return {
      title: "Oneiro Solutions",
      description: "Page not found",
    };
  }

  const data = await fetchAPI(`
    query getPageBySlug {
      page(id: "${legal}", idType: URI) {
        seo {
          title
          metaDesc
        }
      }
    }
  `);

  return {
    title: data?.page?.seo?.title || "Oneiro Solutions",
    description: data?.page?.seo?.metaDesc || "Oneiro Solutions",
  };
}

export default async function LegalPage({ params }) {
  const { legal } = await params || {};

  if (!legal) {
    notFound();
  }
  

  const data = await fetchAPI(`
    query getHomePage {
      page(id: "${legal}", idType: URI) {
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

  if (!data?.page) {
    return notFound();
  }

  const flexibleContent = data?.page?.flexibleContent?.flexibleContent;

  return (
    <>
      <Header themeColor="--background" />
      <div className={styles.legalContainer}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full lg:w-1/2 mb-5">
              <h1>{data.page.title}</h1> 
            </div>
            <div className="w-full lg:w-2/5">
              <div dangerouslySetInnerHTML={{ __html: data.page.content }} />
            </div>
          </div>
        </div>
      </div>
      <PageFlexibleContent data={flexibleContent} />
    </>
  );
}

export const dynamic = "force-dynamic";