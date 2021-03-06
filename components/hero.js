/**
 * @file hero.js
 */
// Import styles
import { heroStyles, h2Styles } from '../utils/constants';

export default function Hero ({ header, subheading }) {
  return (
    <div className={`h-screen`}>
      <div className={`text-center pt-24 pb-48 md:pt-48`}>
        <h1 className={`${heroStyles}`}>{header}</h1>
        <h2 className={`${h2Styles}`}>{subheading}</h2>
      </div>
      <div className={`text-center md:text-right bottom-0 relative`}>
        <h1 className={`${heroStyles} opacity-30 cursor-default`}>7.29.2022</h1>
      </div>
    </div>
  )
}