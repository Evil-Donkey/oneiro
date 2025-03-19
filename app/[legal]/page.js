// app/[legal]/page.js

import fetchAPI from '../../lib/api';
import styles from './Legal.module.scss';
import Header from '../../components/Header';

export async function generateMetadata({ params }) {
  const { legal } = await params || {};

  console.log(legal);

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
    return <h1>404 - Page Not Found</h1>;
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
    return <h1>404 - Page Not Found</h1>;
  }

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
    </>
  );
}

export const dynamic = "force-dynamic";