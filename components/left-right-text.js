/**
 * @file left-right-text.js
 */
// Import dependencies
import { React, useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from 'next/link';

// Import styles
import { h2Styles, h5Styles, buttonStyles, paragraphStyles } from "../utils/constants";

export default function LeftRightText() {
  // Special hooks for animating when elements are in view
  const controls = useAnimation();
  const [ref, inView] = useInView();

  // All of the variants used to animate the elements of the component
  const headingVariants = {
    hidden: { translateY: -10, opacity: 0 },
    visible: { translateY: 1, opacity: 1 }
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div id="about" className={`w-full md:w-1/2 p-0 m-auto`}>
      {/* Left Text */}
      <div className={`text-left w-full`}>
        <div>
          <motion.div
            ref={ref}
            initial={"hidden"}
            animate={controls}
            variants={headingVariants}
            transition={{ duration: 1.25 }}
          >
            <h2 className={`${h2Styles} pb-12`}>
              We hope you'll be there to celebrate with us in Portland, Oregon!
            </h2>
            <h2 className={`${h2Styles} pb-12`}>
              Formal invitations to come this summer.
            </h2>
          </motion.div>
          <motion.div
            ref={ref}
            initial={"hidden"}
            animate={controls}
            variants={headingVariants}
            transition={{ duration: 1.25 }}
          >
            <div className={`pb-12`}>
              <h5 className={`${h5Styles}`}>Important Details:</h5>
              <p className={`${paragraphStyles} pb-6`}>
                Although we love your little ones, this is an adults-only affair for
                those 21 and over. We thank you for your understanding.
              </p>
              <p className={`${paragraphStyles}`}>
                Health & Safety: We are requiring all guests and vendors who are
                attending our wedding to be fully vaccinated. If vaccination is not
                possible, while we’d love for you to join in on the festivities, we
                unfortunately cannot budge on this.
              </p>
            </div>
          </motion.div>
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
