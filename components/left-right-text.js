/**
 * @file left-right-text.js
 */

import { h2Styles, h5Styles, paragraphStyles } from "../utils/constants";

export default function LeftRightText() {
  return (
    <div id="about" className={`w-full p-0 xl:px-72`}>
      {/* Left Text */}
      <div className={`text-left w-full`}>
        <div>
          <h2 className={`${h2Styles} pb-12`}>
            We hope you'll be there to celebrate with us in Portland, Oregon!
          </h2>
          <h2 className={`${h2Styles} pb-12`}>
            Formal invitations to come this summer.
          </h2>
          <h5 className={`${h5Styles}`}>Important Details:</h5>
          <p className={`${paragraphStyles} pb-6`}>
            Although we love your little ones, this is an adult only affair for
            those 21 and over. We thank you for your understanding.
          </p>
          <p className={`${paragraphStyles}`}>
            Health & Safety: We are requiring all guests and vendors who are
            attending our wedding to be fully vaccinated before attending the
            wedding. If vaccination is not possible, we’d love for you to attend
            our wedding, but unfortunately we can’t budge on this.
          </p>
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
