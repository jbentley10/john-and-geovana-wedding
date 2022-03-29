/**
 * @file schedule.js
 */
// Import dependencies
import Link from 'next/link';

// Import styles
import { h1Styles, h3Styles, h4Styles, linkStyles, paragraphStyles, borderStyles } from '../utils/constants';

export default function Schedule() {

  // Schedule content for each day
  const ThursdayContent = () => {
    return (
      <div className={`my-14`}>
        <div className={'inline'}>
          <h3 className={`${h3Styles} w-full sm:w-7/12 md:w-full lg:w-9/12 xl:w-6/12 mb-2 border-b-4 border-purple`}>Thursday, July 28, 2022</h3>
          <h4 className={`${h4Styles}`}>5:30pm - Welcome Event</h4>
          <Link target={`blank`} href={`https://www.19thholepdx.com/`}><a className={`${linkStyles} text-text-color`}>The 19th Hole</a></Link>
          <p className={`${paragraphStyles} text-text-color`}>795 SW 15th Ave</p>
          <p className={`${paragraphStyles} text-text-color`}>Portland, OR 97205</p>
          <br />
          <p className={`${paragraphStyles} text-text-color`}>
            Join us for some food and drinks together, right across
            the street from Hotel deLuxe.
          </p>
        </div>
      </div>
    )
  }

  const FridayContent = () => {
    return (
      <div>
        <div className={'inline'}>
          <h3 className={`${h3Styles} w-full sm:w-7/12 md:w-full lg:w-9/12 xl:w-6/12 mb-2 border-b-4 border-purple`}>Friday, July 29, 2022</h3>
          <h4 className={`${h4Styles}`}>4pm - Ceremony</h4>
          <Link target={`blank`} href={`http://www.castawayportland.com/`}><a className={`${linkStyles} text-text-color`}>Castaway Portland</a></Link>
          <p className={`${paragraphStyles} text-text-color`}>1900 NW 18th Ave</p>
          <p className={`${paragraphStyles} text-text-color`}>Portland, OR 97209</p>
          <p className={`${paragraphStyles} text-text-color`}>Details to be announced!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 md:pt-48" id="schedule">
      <div className={`w-full md:w-1/2 pt-8 m-auto`}>
        <h1 className={`${h1Styles} mb-1`}>Schedule</h1>

        <div className={`pt-2`}>
          <div className={`schedule-content`}>
            <ThursdayContent />
            <FridayContent />
          </div>
        </div>
        
      </div>


      <style jsx={true}>{`
        @media screen and (min-width: 768px) {
          .border-right {
            border-right: 4px solid #C01440;
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