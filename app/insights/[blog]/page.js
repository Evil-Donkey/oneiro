import fetchAPI from '../../../lib/api';
import LazyLoadInitializer from '../../../lib/lazyLoader';
import { notFound } from 'next/navigation';
import styles from '../Insights.module.scss';
import Header from '../../../components/Header';
import Image from 'next/image';
import RequestDemo from '../../../components/FlexibleContent/RequestDemo';

export async function generateMetadata({ params }) {
  const { blog } = await params || {};

  if (!blog) {
    return {
      title: "Oneiro Solutions",
      description: "Page not found",
    };
  }

  const data = await fetchAPI(`
    query getPageBySlug {
      post(id: "${blog}", idType: URI) {
        seo {
          title
          metaDesc
        }
      }
    }
  `);

  return {
    title: data?.post?.seo?.title || "Oneiro Solutions",
    description: data?.post?.seo?.metaDesc || "Oneiro Solutions",
  };
}

export default async function InsightsPostPage({ params }) {
  const { blog } = await params || {};

  if (!blog) {
    notFound();
  }

  const data = await fetchAPI(`
    query getPageBySlug {
      post(id: "${blog}", idType: URI) {
        content(format: RENDERED)
        title(format: RENDERED)
        blogAuthor {
          name
          role
          photo {
            altText
            mediaDetails {
              height
              width
            }
            mediaItemUrl
          }
        }
        featuredImage {
          node {
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
  `);

  if (!data?.post) {
    return notFound();
  }

  const { title, content, blogAuthor, featuredImage } = data.post;

  return (
    <>
      <LazyLoadInitializer />
      <Header lightTheme={true} />
      <div className={styles.insightsContainer}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            {title && (
              <div className="w-full">
                <h1>{title}</h1> 
              </div>
            )}
            {blogAuthor.name && (
              <div className="w-full flex items-center flex-nowrap gap-8 mb-8">
                {blogAuthor.photo && (
                  <div className="aspect-square w-25 rounded-full overflow-hidden">
                    <Image src={blogAuthor.photo.mediaItemUrl} alt={blogAuthor.photo.altText} width={blogAuthor.photo.mediaDetails.width} height={blogAuthor.photo.mediaDetails.height} />
                  </div>
                )}
                <p className="m-0!">Written by {blogAuthor.name}, {blogAuthor.role}</p>
              </div>
            )}
            {featuredImage && (
              <div className="w-full mb-8 aspect-2/1 overflow-hidden rounded-md">
                <Image className="w-full h-full object-cover" src={featuredImage.node.mediaItemUrl} alt={featuredImage.node.altText} width={featuredImage.node.mediaDetails.width} height={featuredImage.node.mediaDetails.height} />
              </div>
            )}
            {content && (
              <div className="w-full lg:w-1/2">
                <div dangerouslySetInnerHTML={{ __html: content }} />
              </div>
            )}
          </div>
        </div>
      </div>

      <RequestDemo />
    </>
  );
}

export const dynamic = "force-dynamic";