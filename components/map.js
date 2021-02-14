/**
 * @file map.js
 */
// Import dependencies
import Image from 'next/image';

// Import styles
import { h2Styles } from '../utils/constants';

export default function Map() {
  return (
    <>
      <div className={`flex h-48`}>
        <div className={`border-center w-8/12`} />
        <div className={`w-5/12`} />
      </div>
      <div className={`flex h-full`}>
        <div className={`w-6/12`}>
          <h2 className={`${h2Styles}`}>Get to know PDX</h2>
        </div>
        <div className={`w-6/12 z-20`}>
          <Image 
            src={`/images/map.avif`}
            layout={`intrinsic`}
            height={300}
            width={300}
          />
        </div>
      </div>
      <div className={`flex h-64`}>
        <div className={`border-center w-7/12`} />
        <div className={`w-5/12`} />
      </div>

      <style jsx={true}>{`
        @media screen and (min-width: 768px) {
          .border-center {
            border-right: 4px solid #A20B5C;
          }
        }
      `}</style>
    </>
  )
}