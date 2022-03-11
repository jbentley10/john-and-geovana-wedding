/**
 * @file _app.js
 */

// Import dependencies
import React, { useEffect } from 'react';
import TagManager from "react-gtm-module"

// Import styles
import '../styles/globals.css';

const tagManagerArgs = {
  id: "GTM-M9ZGKXX",
}

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
