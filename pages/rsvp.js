/**
 * @file rsvp.js
 */

// Import dependencies
import Head from "next/head";

// Import components
import Navigation from "../components/navigation";
import Footer from "../components/footer";

// Import styles
import {
  pageLayoutStyles,
} from "../utils/constants";
import RSVPForm from "../components/rsvp-form";

export default function RSVP() {
  return (
    <>
      <div className={`${pageLayoutStyles}`}>
        <Head>
          <title>RSVP | John and Geovana's Wedding</title>
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

        <div className="pt-12 md:pt-24" id="location">
          <div className={`w-full pt-8 m-auto`}>
            <RSVPForm />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  return {
    props: {},
  };
}
