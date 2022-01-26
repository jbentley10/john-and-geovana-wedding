/**
 * @file schedule.js
 */

// Import dependencies
import Head from "next/head";

// Import components
import Hero from "../components/hero";
import Navigation from "../components/navigation";
import Schedule from "../components/schedule";
import Footer from "../components/footer";

// Import styles
import {
  pageLayoutStyles,
  h1Styles,
  paragraphStyles,
} from "../utils/constants";

export default function SchedulePage() {
  return (
    <>
      <div className={`${pageLayoutStyles}`}>
        <Head>
          <title>Schedule | John and Geovana's Wedding</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <html lang={`en`} />
          <meta
            name="description"
            content={`The schedule for John and Geovana's big day.`}
          />
          <meta name="theme-color" content="#f9C586" />
        </Head>

        <Navigation />

        <Schedule />

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
