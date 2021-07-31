// Import dependencies
import Head from 'next/head';

// Import components
import Hero from '../components/hero';
import Navigation from '../components/navigation';
import LeftRightText from '../components/left-right-text';
import BorderLeft from '../components/border-left';
import ImageBlock from '../components/image-block';
import Schedule from '../components/schedule';
import Map from '../components/map';
import Footer from '../components/footer';

// Import styles
import { pageLayoutStyles } from '../utils/constants';

// Import functions
import { fetchHero, fetchLeftRightText, fetchFooter } from '../utils/contentfulPages';

export default function Home({ heroContent, leftRightTextContent, footerContent }) {
  return (
    <>
      <div className={`${pageLayoutStyles}`}>
        <Head>
          <title>Home | John and Geovana's Wedding</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <html lang={`en`} />
          <meta
            name="description"
            content={`John and Geovana are getting married! Come celebrate with us in Portland on 7-29-2022.`}
          />
          <meta name="theme-color" content="#f9C586" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <Navigation />
        
        <Hero 
          header={heroContent.fields.mainHeading}
          subheading={heroContent.fields.subtext}
        />

        <LeftRightText 
          leftHeading={`When`}
          leftRichText={leftRightTextContent.fields.leftText}
          rightHeading={`The Invite`}
          rightRichText={leftRightTextContent.fields.rightText}
        />
      </div>

      <BorderLeft />

      <ImageBlock />

      {/* <Schedule /> */}

      <div className={`${pageLayoutStyles}`}>
        {/* <Map /> */}
        <Footer mainText={footerContent.fields.mainText} />
      </div>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const heroContent = await fetchHero();
  const leftRightTextContent = await fetchLeftRightText();
  const footerContent = await fetchFooter();

  if (heroContent.fields && leftRightTextContent.fields && footerContent.fields) {
    return {
      props: {
        heroContent,
        leftRightTextContent,
        footerContent
      },
    };
  } else return;
}