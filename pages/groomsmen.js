/**
 * @file groomsmen.js
 */

// Import dependencies
import Head from "next/head";

// Import components
import Hero from "../components/hero";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

// Import styles
import {
  pageLayoutStyles,
  h1Styles,
  paragraphStyles,
} from "../utils/constants";

export default function Groomsmen() {
  return (
    <>
      <div className={`${pageLayoutStyles}`}>
        <Head>
          <title>Groomsmen | John and Geovana's Wedding</title>
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

        <Hero header={`Groomsmen`} subheading={``} />

        <div>
          <h1 className={`${h1Styles}`}>Welcome, groomsmen!</h1>
          <p className={`${paragraphStyles}`}>
            We're so excited to have you as a part of our wedding party! To get
            started, we've put together a Discord server specifically for us to
            chat, post ideas, and just get to know each other better. If you
            haven't used Discord before, it's essentially a chat platform for
            friends where you can create different "Channels" to chat in. Think
            of these as themed chat rooms - just like the good ol' AIM days.To
            join the Discord server, visit this link:{" "}
            <a className={`text-purple`} href="https://discord.gg/x9A3vQtb">
              https://discord.gg/x9A3vQtb
            </a>
            .
          </p>
          <p className={`${paragraphStyles}`}>
            More updates will be posted here soon!
          </p>
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
