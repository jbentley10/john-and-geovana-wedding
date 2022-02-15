/**
 * @file image-block.js
 */
// Import dependencies
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';

const animationVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const FadeInImage = props => {
  const [loaded, setLoaded] = useState(false);
  const animationControls = useAnimation();

  useEffect(
      () => {
          if(loaded){
              animationControls.start("visible");
          }
      },
      [loaded]
  );

  return(
      <motion.div
          initial={"hidden"}
          animate={animationControls}
          variants={animationVariants}
          transition={{ ease: "easeOut", duration: 1 }}
      >
          <Image
              src={props.src}
              layout={props.layout}
              height={props.height}
              width={props.width}
              alt={props.alt}
              onLoad={() => setLoaded(true)}
          />
      </motion.div>
  );
}

 export default function ImageBlock() {
   return (
     <div className={`image-block`}>
      <div className={`flex h-12 md:h-64`}>
        <div className={`border-center w-7/12`} />
        <div className={`w-5/12`} />
      </div>
      <div className={`flex h-full`}>
        <div className={`w-6/12`} />
        <div className={`pr-0 md:pr-10 w-fit md:w-7/12 z-20`}>
          <FadeInImage 
            src={`/images/geo-john-look.webp`}
            layout={`intrinsic`}
            height={500}
            width={400}
            alt={`John, Geovana, and Peaches hanging out at a park in Portland.`}
          />
        </div>
      </div>
      <div className={`flex h-full`}>
        <div className={`w-2/12`} />
        <div className={`w-fit md:w-6/12 -mt-14 z-30 -ml-4 md:ml-4`}>
          <FadeInImage 
            src={`/images/geo-ring.webp`}
            layout={`intrinsic`}
            height={500}
            width={400}
            alt={`Geovana showing her ring.`}
          />
        </div>
        <div className={`w-5/12 z-20`} />
      </div>
      <div className={`flex h-12 md:h-64 -mt-4 mb-8`}>
        <div className={`border-center w-4/12`} />
        <div className={`w-5/12`} />
      </div>

      <style jsx={true}>{`
        @media screen and (min-width: 768px) {
          .border-center {
            border-right: 4px solid #A20B5C;
          }
        }

        @media screen and (min-width: 768px) {
          .border-bottom--right {
            border-bottom: 4px solid #A20B5C;
          }
        }
      `}</style>
     </div>
   )
 }