import fetchAPI from '../../lib/api';
import generateMetadataFromLib from '../../lib/generateMetadata';
import Header from '../../components/Header';
import RequestDemo from '../../components/FlexibleContent/RequestDemo';
import ContactForm from '../../components/ContactForm';
import LazyItem from "@/components/LazyItem";
import styles from './Contact.module.scss';

export async function generateMetadata() {
  return await generateMetadataFromLib("165");
}

export default async function ContactPage() {

    const dataOptions = await fetchAPI(`
        query ThemeSettings {
          acfOptionsThemeSettings {
            themeSettings {
              email
              address
              linkedinUrl
              xUrl
            }
          }
        }
    `);

    const data = await fetchAPI(`
        query getContactPage {
            page(id: "165", idType: DATABASE_ID) {
                content(format: RENDERED)
                title(format: RENDERED)
            }
        }
    `);

    const themeSettings = dataOptions?.acfOptionsThemeSettings?.themeSettings;
    const { email, address } = themeSettings;
    const { title, content } = data.page;

    return (
        <>
        <Header themeColor="--background" />

        <div className={styles.contactContainer}>
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
                    <div className="w-full md:w-1/2 mb-10 md:mb-0">
                        <LazyItem>
                            <h3 className="text-blue-01 font-semibold">Have a question?</h3>
                        </LazyItem>
                        {title && <LazyItem><h1 className="mb-2!">{title}</h1></LazyItem>}
                        <LazyItem>
                            <div className="mt-5 flex flex-col gap-4">
                            {address && <div dangerouslySetInnerHTML={{ __html: address }} />}
                                {email && <a href={`mailto:${email}`} className="hover:underline" target="_blank">{email}</a>}
                            </div>
                        </LazyItem>
                    </div>
                    <div className="w-full md:w-1/2">
                        <LazyItem>
                            {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
                        </LazyItem>
                        <LazyItem>
                            <ContactForm />
                        </LazyItem>
                    </div>
                </div>
            </div>
            <RequestDemo />
        </>
    );
}
