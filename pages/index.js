// Import dependencies
import { useEffect } from 'react';
import Head from 'next/head';
import TagManager from 'react-gtm-module';

// Import components
import Hero from '../components/hero';
import Navigation from '../components/navigation';
import LeftRightText from '../components/left-right-text';
import BorderLeft from '../components/border-left';
import ImageBlock from '../components/image-block';
import Map from '../components/map';
import Footer from '../components/footer';
import RSVPForm from "../components/rsvp-form";

// Import styles
import { pageLayoutStyles } from '../utils/constants';

export default function Home() {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-M9ZGKXX' });
  }, []);

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
        
        <Hero/>

        <BorderLeft />

        <ImageBlock />

        <LeftRightText />
      </div>

      

      <div className={`${pageLayoutStyles}`}>
        <Map />
        {/* <RSVPForm /> */}
        <Footer />
      </div>
    </>
  )
}

export async function getStaticProps(context) {
  return {
    props: {}
  }
}