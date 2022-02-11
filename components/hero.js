/**
 * @file hero.js
 */
// Import dependencies
import Link from 'next/link';

// Import styles
import { heroStyles, h2Styles, buttonStyles } from '../utils/constants';

export default function Hero () {
  return (
    <div id={`top`} className={`h-3/4`}>
      <div className={`text-center pt-24 pb-48 md:pt-48`}>
        <h1 className={`${heroStyles}`}>Geovana & John</h1>
        <h2 className={`${h2Styles}`}>are getting married!</h2>
      </div>
      <div className={`text-center md:text-right bottom-24 relative`}>
        <h1 className={`${heroStyles} opacity-30 cursor-default`}>7.29.2022</h1>
      </div>
      <div className={`text-center relative mb-24`}>
        <Link href={`#location`}><a className={buttonStyles}>Get hotel information</a></Link>
      </div>
    </div>
  )
}