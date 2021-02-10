import Head from 'next/head'

// Import components
import Hero from '../components/hero';
import Navigation from '../components/navigation';

// Import styles
import { pageLayoutStyles } from '../utils/constants';

export default function Home() {
  return (
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

      <footer className={``}>
      </footer>
    </div>
  )
}