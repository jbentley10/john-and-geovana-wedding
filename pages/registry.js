/**
 * @file registry.js
 */

// Import dependencies
import Head from "next/head";
import Link from "next/link";

// Import components
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import FadeInImage from "../components/fade-in-image";

// Import styles
import {
  pageLayoutStyles,
  h1Styles,
  paragraphStyles,
  buttonStyles,
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
            <div className={`flex flex-col md:flex-row justify-between align-center`}>
              <p className={`${paragraphStyles} w-full mb-12 md:mb-0 md:w-3/6 md:mr-4`}>
                Please know that your presence at our wedding is present enough!
                However, for friends and family who have been asking for gift
                ideas, a contribution to our house fund would be warmly
                appreciated. As much as we’d love linen and a new cooking set,
                we simply don’t have the room in our tiny Washington, D.C.
                apartment!
                <br />
                <br />
                Should you choose to help us celebrate with a gift, a wishing well 
                will be available on the day, or you can click the link below.
                <br />
                <br />
                <Link target="blank" href="https://www.honeyfund.com/wedding/bentley-mendoza-07-29-2022">
                  <button
                    className={`${buttonStyles} block mt-4 mb-10`}
                  >
                    Go to Registry
                  </button>
                </Link>
                <br />
                <br />
                If you have any questions, please feel free to reach out to us at&nbsp; 
                <a className={`${linkStyles}`} href="mailto:johnandgeovana@gmail.com">johnandgeovana@gmail.com</a>.
              </p>
              <div className={`w-full md:w-2/6`}>
                <FadeInImage
                  src={`/images/geo-and-i.webp`}
                  layout={`intrinsic`}
                  height={600}
                  width={500}
                  alt={`John and Geovana looking out into the Portland skyline.`}
                  loading={"lazy"}
                  lazyBoundary={400}
                />
              </div>
            </div>
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
