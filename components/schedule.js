/**
 * @file schedule.js
 */
// Import dependencies
import Link from "next/link";

// Import styles
import {
  h1Styles,
  h3Styles,
  h4Styles,
  linkStyles,
  paragraphStyles,
  borderStyles,
} from "../utils/constants";

export default function Schedule() {
  // Schedule content for each day
  const ThursdayContent = () => {
    return (
      <div className={"inline"}>
        <h3
          className={`${h3Styles} w-full sm:w-7/12 md:w-full lg:w-9/12 xl:w-6/12 mb-2 border-b-4 border-purple`}
        >
          Thursday, July 28, 2022
        </h3>
        <h4 className={`${h4Styles}`}>6pm - Welcome Event</h4>
        <Link target={`blank`} href={`https://www.19thholepdx.com/`}>
          <a className={`${linkStyles} text-text-color`}>The 19th Hole</a>
        </Link>
        <p className={`${paragraphStyles} text-text-color`}>795 SW 15th Ave</p>
        <p className={`${paragraphStyles} text-text-color`}>
          Portland, OR 97205
        </p>
        <br />
        <p className={`${paragraphStyles} text-text-color w-full md:w-1/2`}>
        The bride and groom will be at the 19th Hole from 6-8pm on Thursday evening if you’d 
        like to stop by and say hello. Snacks, yard games, and putt putt golf will be provided, 
        with food and beverages available for purchase.
        </p>
      </div>
    );
  };

  const FridayContent = () => {
    return (
      <div className={`mt-8`}>
        <div className={"inline"}>
          <h3
            className={`${h3Styles} w-full sm:w-7/12 md:w-full lg:w-9/12 xl:w-6/12 mb-2 border-b-4 border-purple`}
          >
            Friday, July 29, 2022
          </h3>
          <h4 className={`${h4Styles}`}>4-5pm - Guests Arrive at the Venue</h4>
          <h4 className={`${h4Styles}`}>5pm - Ceremony</h4>
          <h4 className={`${h4Styles}`}>5:30pm - Cocktail Hour</h4>
          <h4 className={`${h4Styles}`}>6:45pm - Dinner</h4>
          <h4 className={`${h4Styles}`}>8pm - Dancing</h4>
          <Link target={`blank`} href={`http://www.castawayportland.com/`}>
            <a className={`${linkStyles} text-text-color`}>Castaway Portland</a>
          </Link>
          <p className={`${paragraphStyles} text-text-color`}>
            1900 NW 18th Ave
          </p>
          <p className={`${paragraphStyles} text-text-color`}>
            Portland, OR 97209
          </p>
          <p className={`${paragraphStyles} text-text-color`}>
            Dinner and dancing to follow!
          </p>
        </div>
      </div>
    );
  };

  const SaturdayContent = () => {
    return (
      <div className={`mt-8`}>
        <div className={"inline"}>
          <h3
            className={`${h3Styles} w-full sm:w-7/12 md:w-full lg:w-9/12 xl:w-6/12 mb-2 border-b-4 border-purple`}
          >
            Saturday, July 30, 2022
          </h3>
          <h4 className={`${h4Styles}`}>Evening - Karaoke and Drinks</h4>
          <Link target={`blank`} href={`http://www.castawayportland.com/`}>
            <a className={`${linkStyles} text-text-color`}>The Ambassador</a>
          </Link>
          <p className={`${paragraphStyles} text-text-color`}>
            4744 NE Sandy Blvd
          </p>
          <p className={`${paragraphStyles} text-text-color`}>
            Portland, OR 97213
          </p>
        </div>
      </div>
    );
  };

  return (
    <div id="schedule">
      <h1 className={`${h1Styles} md:mb-12`}>Schedule</h1>

      <div className={`pt-2`}>
        <div className={`schedule-content`}>
          <ThursdayContent />
          <FridayContent />
          <SaturdayContent />
        </div>
      </div>

      <style jsx={true}>{`
        @media screen and (min-width: 768px) {
          .border-right {
            border-right: 4px solid #c01440;
          }
        }
        @media screen and (min-width: 768px) {
          .border-bottom--right {
            border-bottom: 4px solid #a20b5c;
          }
        }
      `}</style>
    </div>
  );
}
