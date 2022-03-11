/**
 * @file registry.js
 */

// Import dependencies
import Head from "next/head";

// Import components
import Navigation from "../components/navigation";
import Footer from "../components/footer";

// Import styles
import {
  pageLayoutStyles,
  h1Styles,
  paragraphStyles,
} from "../utils/constants";

export default function Registry() {
  return (
    <>
      <div className={`${pageLayoutStyles}`}>
        <Head>
          <title>Registry | John and Geovana's Wedding</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <html lang={`en`} />
          <meta
            name="description"
            content={`Learn about the wedding registry for John & Geovana's wedding.`}
          />
          <meta name="theme-color" content="#f9C586" />
        </Head>

        <Navigation />

        <div className="pt-12 md:pt-24" id="registry">
          <div className={`w-full pt-8 m-auto`}>
            <h1 className={`${h1Styles} md:mb-12`}>Registry</h1>
            <p className={`${paragraphStyles}`}>
              In lieu of a traditional wedding registry through one company,
              here is a list of stores where we would appreciate gift cards
              from!
            </p>
            <ul>
              <li className={`${paragraphStyles}`}>Store 1</li>
              <li className={`${paragraphStyles}`}>Store 2</li>
              <li className={`${paragraphStyles}`}>Store 3</li>
            </ul>
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
