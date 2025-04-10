import fetchAPI from '../../lib/api';
import generateMetadataFromLib from '../../lib/generateMetadata';
import LazyLoadInitializer from '../../lib/lazyLoader';
import Header from '../../components/Header';
import RequestDemo from '../../components/FlexibleContent/RequestDemo';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Insights.module.scss';

export async function generateMetadata() {
  return await generateMetadataFromLib("95");
}

export default async function InsightsPage() {

  const data = await fetchAPI(`
    query getInsightsPage {
      page(id: "95", idType: DATABASE_ID) {
        content(format: RENDERED)
        title(format: RENDERED)
      }
    }
  `);

  const insights = await fetchAPI(`
    query getInsightsPosts {
        posts {
            nodes {
                excerpt(format: RENDERED)
                title(format: RENDERED)
                databaseId
                slug
                featuredImage {
                    node {
                    altText
                    mediaDetails {
                        height
                        width
                    }
                    mediaItemUrl
                    }
                }
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
            }
        }
    }
  `);

  const { title, content } = data.page;
  const { posts } = insights;

  return (
    <>
      <LazyLoadInitializer />
      <Header themeColor="--background" />

      <div className={styles.insightsContainer}>
            <div className="container mx-auto px-4">
                <div className="w-full md:w-md">
                    <h1 className="mb-2!">{title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                </div>
            </div>

            {/* Insights loop posts */}
            {posts &&
                <div className="container mx-auto px-4 mt-20">
                    <div className="flex flex-wrap -mx-5">
                        {posts.nodes.map((post, index) => {
                            const { title, excerpt, databaseId, featuredImage, blogAuthor, slug } = post;

                            const isFeatured = index === 0 || index === 1;

                            return (
                                <div key={databaseId} className={`${isFeatured ? 'w-full lg:w-1/2' : 'w-full md:w-1/3'} px-5 mb-10`}>
                                    <Link href={`/${slug}`} prefetch={false}>
                                        <div className="relative rounded-md overflow-hidden mb-5">
                                            <Image className="aspect-3/2 object-cover" src={featuredImage.node.mediaItemUrl} alt={featuredImage.node.altText} width={featuredImage.node.mediaDetails.width} height={featuredImage.node.mediaDetails.height} />
                                        </div>
                                    </Link>
                                    {blogAuthor.name && (
                                        <div className="w-full flex items-center flex-wrap gap-4 mb-8">
                                            {blogAuthor.photo && (
                                            <div className="aspect-square w-15 rounded-full overflow-hidden">
                                                <Image src={blogAuthor.photo.mediaItemUrl} alt={blogAuthor.photo.altText} width={blogAuthor.photo.mediaDetails.width} height={blogAuthor.photo.mediaDetails.height} />
                                            </div>
                                            )}
                                            <p className="m-0! text-sm!">Written by {blogAuthor.name}, {blogAuthor.role}</p>
                                        </div>
                                    )}
                                    <h2>{title}</h2>
                                    <div dangerouslySetInnerHTML={{ __html: excerpt }} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            }
        </div>
        <RequestDemo />
    </>
  );
}
