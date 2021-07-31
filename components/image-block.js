/**
 * @file image-block.js
 */
// Import dependencies
import Image from 'next/image';

// Import styles
import { gradientBG } from '../utils/constants';

 export default function ImageBlock() {
   return (
     <div className={`image-block`}>
      <div className={`flex h-16 sm:h-64 ${gradientBG}`}>
        <div className={`border-center w-7/12`} />
        <div className={`w-5/12`} />
      </div>
      <div className={`flex h-full ${gradientBG}`}>
        <div className={`w-5/12`} />
        <div className={`pr-12 w-7/12 z-20`}>
          <Image 
            src={`/images/geo-john-peaches.webp`}
            layout={`intrinsic`}
            height={600}
            width={400}
            alt={`John, Geovana, and Peaches hanging out at a park in Portland.`}
          />
        </div>
      </div>
      <div className={`flex h-full ${gradientBG}`}>
        <div className={`w-2/12`} />
        <div className={`w-5/12 -mt-14 z-30 ml-4`}>
          <Image 
            src={`/images/geo-ring.webp`}
            layout={`intrinsic`}
            height={500}
            width={400}
            alt={`Geovana showing her ring.`}
          />
        </div>
        <div className={`w-5/12 z-20`} />
      </div>
      <div className={`flex h-2 sm:h-64 md:-mt-12 ${gradientBG}`}>
        <div className={`border-center w-7/12`} />
        <div className={`w-5/12`} />
      </div>
      <div className={`hidden md:flex`}>
        <div className={`w-7/12 bg-gradient-to-r from-nude-1 to-nude-2`} />
        <div className={`w-3/12 border-bottom--right`} />
        <div className={`w-2/12 bg-gradient-to-r from-nude-3 to-nude-4`} />
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