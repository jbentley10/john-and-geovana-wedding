/**
 * @file schedule.js
 */
// Import dependencies
import { useState } from 'react';
import Link from 'next/link';

// Import styles
import { h2Styles, h3Styles, h4Styles, h5Styles, buttonStyles, linkStyles, paragraphStyles, borderStyles } from '../utils/constants';

export default function Schedule() {
  const [currentDay, setCurrentDay] = useState('Fri');

  // Schedule content for each day
  const ThursdayContent = () => {
    return (
      <h3 className={`${h3Styles}`}>To be announced...</h3>
    )
  }

  const FridayContent = () => {
    return (
      <div>
        <div className={'inline'}>
          <h4 className={`${h4Styles}`}>Ceremony</h4>
          <h5 className={`${h5Styles} text-text-color`}>3:30pm-4pm</h5>          
          <p className={`${paragraphStyles}`}>Castaway Portland</p>
          <p className={`${paragraphStyles}`}>1900 NW 18th Ave</p>
          <p className={`${paragraphStyles}`}>Portland, OR 97209</p>
          <Link href="https://goo.gl/maps/Y3Ln4edF7SrdfsNfA">
            <button className={`${buttonStyles} block mt-4 mb-8`}>
              Map
            </button>
          </Link>
        </div>
        

        <div className={'inline'}>
          <h4 className={`${h4Styles}`}>Cocktail Hour</h4>
          <h5 className={`${h5Styles} text-text-color`}>4:30pm-5:30p</h5>
          <p className={`${paragraphStyles}`}>Castaway Portland</p>
          <p className={`${paragraphStyles}`}>1900 NW 18th Ave</p>
          <p className={`${paragraphStyles}`}>Portland, OR 97209</p>
          <Link href="https://goo.gl/maps/Y3Ln4edF7SrdfsNfA">
            <button className={`${buttonStyles} block mt-4 mb-8`}>
              Map
            </button>
          </Link>
        </div>
        

        <div className={'inline'}>
          <h4 className={`${h4Styles}`}>Reception</h4>
          <h5 className={`${h5Styles} text-text-color`}>5:30pm-11p</h5>
          <p className={`${paragraphStyles}`}>Castaway Portland</p>
          <p className={`${paragraphStyles}`}>1900 NW 18th Ave</p>
          <p className={`${paragraphStyles}`}>Portland, OR 97209</p>
          <Link href="https://goo.gl/maps/Y3Ln4edF7SrdfsNfA">
            <button className={`${buttonStyles} block mt-4 mb-8`}>
              Map
            </button>
          </Link>
        </div>
        
      </div>
    )
  }

  const SaturdayContent = () => {
    return (
      <h3 className={`${h3Styles}`}>To be announced...</h3>
    )
  }

  const handleSetDay = (day) => {
    switch(day) {
      case 'Thu':
        setCurrentDay("Thu");
        break;

      case 'Fri':
        setCurrentDay("Fri");
        break;

      case 'Sat':
        setCurrentDay("Sat");
        break;

      default: 
        break;
    }
  }

  return (
    <>
      <div className={`w-full md:w-1/2 p-0 m-auto`}>
        <h2 className={`${h2Styles}`}>Schedule</h2>

        <div className={`pt-16 pl-12`}>
          <ul className={`hidden`}>
            <li className={`p-6`}><a className={`mr-3 lg:mr-32 p-5 ${linkStyles} ${currentDay == 'Thu' && borderStyles}`} onClick={() => handleSetDay('Thu')}>Thu</a></li>
            <li className={`p-6`}><a className={`mr-3 lg:mr-32 p-5 ${linkStyles} ${currentDay == 'Fri' && borderStyles}`} onClick={() => handleSetDay('Fri')}>Fri</a></li>
            <li className={`p-6`}><a className={`mr-3 lg:mr-32 p-5 ${linkStyles} ${currentDay == 'Sat' && borderStyles}`} onClick={() => handleSetDay('Sat')}>Sat</a></li>
          </ul>

          <div className={`schedule-content`}>
            <h3 className={`${h3Styles}`}>Friday, July 29, 2022</h3>
            { currentDay == 'Thu' && <ThursdayContent /> }
            { currentDay == 'Fri' && <FridayContent /> }
            { currentDay == 'Sat' && <SaturdayContent /> }
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
    </>
  )
}