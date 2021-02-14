/**
 * @file schedule.js
 */
// Import styles
import { useState } from 'react';
import { h2Styles, linkStyles } from '../utils/constants';

export default function Schedule() {
  const [currentDay, setCurrentDay] = useState('Thu');

  // Schedule content for each day
  const ThursdayContent = () => {
    return (
      <p>Thursday</p>
    )
  }

  const FridayContent = () => {
    return (
      <p>Friday</p>
    )
  }

  const SaturdayContent = () => {
    return (
      <p>Saturday</p>
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
      <div className={`flex h-full`}>
        <div className={`w-8/12 bg-gradient-to-r from-nude-1 to-nude-2`} />
        
        <div className={`w-2/12 bg-gradient-to-r from-nude-2 to-nude-3 border-right`}>
          <div className={`py-32 -ml-96`}>
            <h2 className={`${h2Styles}`}>Schedule</h2>

            <div className={`pt-16 pl-12`}>
              <ul className={`flex`}>
                <li className={`p-6`}><a className={`mr-32 ${linkStyles}`} onClick={() => handleSetDay('Thu')}>Thu</a></li>
                <li className={`p-6`}><a className={`mr-32 ${linkStyles}`} onClick={() => handleSetDay('Fri')}>Fri</a></li>
                <li className={`p-6`}><a className={`mr-32 ${linkStyles}`} onClick={() => handleSetDay('Sat')}>Sat</a></li>
              </ul>

              <div className={`schedule-content`}>
                { currentDay == 'Thu' && <ThursdayContent /> }
                { currentDay == 'Fri' && <FridayContent /> }
                { currentDay == 'Sat' && <SaturdayContent /> }
              </div>
            </div>
          </div>
        </div>

        <div className={`w-2/12 bg-gradient-to-r from-nude-3 to-nude-4`} />
        
      </div>

      <div className={`hidden md:flex`}>
        <div className={`w-7/12 bg-gradient-to-r from-nude-1 to-nude-2`} />
        <div className={`w-3/12 border-bottom--right`} />
        <div className={`w-2/12 bg-gradient-to-r from-nude-3 to-nude-4`} />
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