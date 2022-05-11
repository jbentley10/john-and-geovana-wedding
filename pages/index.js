// Import dependencies
import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import TagManager from "react-gtm-module";

// Import components
import Hero from "../components/hero";
import Navigation from "../components/navigation";
import LeftRightText from "../components/left-right-text";
import BorderLeft from "../components/border-left";
import ImageBlock from "../components/image-block";
import Footer from "../components/footer";
import RSVPForm from "../components/rsvp-form";

// Import styles
import { pageLayoutStyles } from "../utils/constants";
import FadeInImage from "../components/fade-in-image";

export default function Home() {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-M9ZGKXX" });

    let circle = document.getElementById("circle");
    const onMouseMove = (e) => {
      circle.style.left = e.pageX / 2 + "px";
      circle.style.top = e.pageY / 2 + "px";
    };
    document.addEventListener("mousemove", onMouseMove);
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
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta property="og:image" content="/images/geo-ring.webp" />
        </Head>

        <Navigation />

        <Hero />

        <div id={`circle`}>
          <Image
            src={`/images/blur-circle--purple.png`}
            layout={`intrinsic`}
            height={550}
            width={550}
            alt={`Blurred circle`}
            loading={`lazy`}
          />
        </div>

        <BorderLeft />

        <ImageBlock />

        <LeftRightText />
      </div>

      <div className={`${pageLayoutStyles}`}>
        <div className={`text-center`}>
          <FadeInImage
            src={`/images/peaches.webp`}
            layout={`intrinsic`}
            height={667}
            width={1000}
            alt={`Peaches standing in grass looking at the camera.`}
            loading={'lazy'}
            lazyBoundary={400}
          />
        </div>
        <Footer showSeeYouThere={true} />
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  return {
    props: {},
  };
}
