/**
 * @file groomsmen.js
 */

// Import dependencies
import Head from 'next/head';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

// Import components
import Hero from '../components/hero';
import Navigation from '../components/navigation';
import Footer from '../components/footer';

// Import styles
import { htmlRenderingOptions, pageLayoutStyles } from '../utils/constants';

// Import functions
import { fetchGroomsmenPageContent, fetchFooter } from '../utils/contentfulPages';

export default function Groomsmen({ pageContent, footerContent }) {
  return (
    <>
      <div className={`${pageLayoutStyles}`}>
        <Head>
          <title>Groomsmen | John and Geovana's Wedding</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <html lang={`en`} />
          <meta
            name="description"
            content={`If you are seeing this page, you have been chosen to be a part of our fabulous wedding party!`}
          />
          <meta name="theme-color" content="#f9C586" />
        </Head>

        <Navigation />

        <Hero 
          header={`Groomsmen`}
          subheading={``}
        />

        <div>
          <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(pageContent.fields.richText, htmlRenderingOptions) }} />
        </div>

        <Footer mainText={footerContent.fields.mainText} />
      </div>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const pageContent = await fetchGroomsmenPageContent();
  const footerContent = await fetchFooter();

  if (pageContent.fields && footerContent.fields) {
    return {
      props: {
        pageContent,
        footerContent
      },
    };
  } else return;
}