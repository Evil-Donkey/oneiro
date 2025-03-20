import fetchAPI from '../../lib/api';
import { notFound } from 'next/navigation';
import styles from './Legal.module.scss';
import Header from '../../components/Header';
import PageFlexibleContent from '../../components/FlexibleContent';

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
    query getPageBySlug {
      page(id: "${legal}", idType: URI) {
        content(format: RENDERED)
        title(format: RENDERED)
      }
    }
  `);

  if (!data?.page) {
    notFound();
  }

  const pageData = await fetchAPI(`
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

  const flexibleContent = pageData?.page?.flexibleContent?.flexibleContent;

  return (
    <>
      <Header themeColor="#0F0D42" />
      <div className={styles.legalContainer}>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6 mb-5">
              <h1>{data.page.title}</h1>
            </div>
            <div className="col-lg-5">
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