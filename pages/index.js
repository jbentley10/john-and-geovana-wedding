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

export default function Home() {
  return (
    <>
      <div className={`${pageLayoutStyles}`}>
        <Head>
          <title>Home | John and Geovana's Wedding</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navigation />

        <Hero 
          header={`Geovana & John`}
          subheading={`are getting married!`}
        />

        <LeftRightText 
          leftHeading={`When`}
          leftRichText={`Friday July 29 2022`}
          rightHeading={`The Invite`}
          rightRichText={`Lorem ipsum solo dut amet condipiscing elit. Lorem ipsum solo dut amet codipscing elit.`}
        />
      </div>

      <BorderLeft />

      <ImageBlock />

      {/* <Schedule /> */}

      <div className={`${pageLayoutStyles}`}>
        {/* <Map /> */}
        <Footer />
      </div>
    </>
  )
}