/**
 * @file location.js
 */

// Import dependencies
import Head from "next/head";

// Import components
import Navigation from "../components/navigation";
import Map from "../components/map";
import Footer from "../components/footer";

// Import styles
import {
    h1Styles,
  pageLayoutStyles,
} from "../utils/constants";

export default function LocationPage() {
  return (
    <>
      <div className={`${pageLayoutStyles}`}>
        <Head>
          <title>Location | John and Geovana's Wedding</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <html lang={`en`} />
          <meta
            name="description"
            content={`Location information for John and Geovana's big day.`}
          />
          <meta name="theme-color" content="#f9C586" />
        </Head>

        <Navigation />

        <div className="pt-12 md:pt-24" id="schedule">
            <div className={`w-full pt-8 m-auto`}>
                <h1 className={`${h1Styles} md:mb-12`}>Location</h1>
                <Map />
            </div>
        </div>

        <Footer showSeeYouThere={false}/>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  return {
    props: {},
  };
}
