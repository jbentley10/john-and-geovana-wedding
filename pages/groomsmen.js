/**
 * @file groomsmen.js
 */

// Import dependencies
import Head from 'next/head';

// Import components
import Hero from '../components/hero';
import Navigation from '../components/navigation';

// Import styles
import { pageLayoutStyles } from '../utils/constants';

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

        <Hero 
          header={`Groomsmen`}
          subheading={``}
        />
      </div>
    </>
  )
}