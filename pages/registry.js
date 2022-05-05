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
  bulletStyles,
  linkStyles,
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
            <ul className={`pl-10 pt-4`}>
              <li className={`${bulletStyles}`}><a className={`${linkStyles}`} href="https://food52.com">Food 52</a></li>
              <li className={`${bulletStyles}`}><a className={`${linkStyles}`} href="https://www.williams-sonoma.com/?cm_sp=tnav-_-williams-sonoma-_-tab">Williams Sonoma</a></li>
              <li className={`${bulletStyles}`}><a className={`${linkStyles}`} href="https://www.cb2.com">CB2</a></li>
              <li className={`${bulletStyles}`}><a className={`${linkStyles}`} href="https://www.target.com">Target</a></li>
              <li className={`${bulletStyles}`}><a className={`${linkStyles}`} href="https://www.brooklinen.com/">Brooklinen</a></li>
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
