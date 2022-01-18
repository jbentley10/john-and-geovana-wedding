/**
 * @file left-right-text.js
 */

import { h1Styles, h2Styles } from "../utils/constants";

export default function LeftRightText() {
  return (
    <div className={`w-full p-0 xl:px-72`}>
      {/* Left Text */}
      <div className={`text-left w-full`}>
        <div>
          <h2
            className={`font-john-mayer text-h2 text-text-color leading-13 pb-12`}
          >
            We hope you'll be there to celebrate with us in Portland, Oregon!
          </h2>
          <h2
            className={`font-john-mayer text-h2 text-text-color leading-13 pb-12`}
          >Formal invitations to come this summer.</h2>
        </div>
      </div>
      <style jsx={true}>{`
        @media screen and (max-width: 767px) {
          .border-bottom--left {
            border-bottom: 4px solid #a20b5c;
          }
        }
      `}</style>
    </div>
  );
}
