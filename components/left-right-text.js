/**
 * @file left-right-text.js
 */

import { h1Styles, h2Styles } from "../utils/constants";

 export default function LeftRightText({ leftHeading, leftRichText, rightHeading, rightRichText}) {
   return (
    <div className={`w-full p-0 xl:px-72`}>
      {/* Left Text */}  
      <div className={`text-left w-7/12 xl:w-3/12 pb-64`}>
        <h2 className={`${h2Styles}`}>{ leftHeading }</h2>
        <h1 className={`${h1Styles}`}>{ leftRichText }</h1>
      </div>
      {/* Right Text */}  
      <div className={`text-right w-full`}>
        <h2 className={`${h2Styles} pb-12`}>{ rightHeading }</h2>
        <h2 className={`${h2Styles}`}>{ rightRichText }</h2>
      </div>
    </div>
   )
 }