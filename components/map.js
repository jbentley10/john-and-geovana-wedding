/**
 * @file map.js
 */
// Import dependencies
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import Link from 'next/link';

// Import styles
import { h2Styles, h5Styles, buttonStyles, paragraphStyles, linkStyles } from "../utils/constants";

// Import data
import markers from '../data/markers.json';
import { useState } from "react";

export default function Map() {
  const GOOGLE_MAPS_API = process.env.GOOGLE_MAPS_API;
  const markersCopy = [
    {
        "name": "Castaway",
        "lat": 45.5365861,
        "lng": -122.6916165,
        "link": "https://goo.gl/maps/Y3Ln4edF7SrdfsNfA"
    },
    {
        "name": "Hotel deLuxe",
        "lat": 45.5209862,
        "lng": -122.6876944,
        "link": "https://g.page/HoteldeLuxePortland?share"
    },
    {
        "name": "Portland International Airport",
        "lat": 45.5897694,
        "lng": -122.5972829,
        "link": "https://goo.gl/maps/N4zJanFxJRHB3iUp9"
    }
  ];
  const [selectedMarker, setSelectedMarker] = useState();

  const MyMapComponent = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        defaultZoom={11}
        defaultCenter={{ lat: 45.5201952, lng: -122.6728248 }}
      >
        <Marker
          position={{ lat: markersCopy[0].lat, lng: markersCopy[0].lng }}
          onClick={() => {
            setSelectedMarker(markersCopy[0]);
            console.log(markersCopy[0].name);
          }}
        />
        <Marker 
          position={{ lat: markersCopy[1].lat, lng: markersCopy[1].lng }} 
          onClick={() => {
            setSelectedMarker(markersCopy[1]);
            console.log(markersCopy[1].name);
          }}
        />
        <Marker 
          position={{ lat: markersCopy[2].lat, lng: markersCopy[2].lng }} 
          onClick={() => {
            setSelectedMarker(markersCopy[2]);
            console.log(markersCopy[2].name);
          }}
        />
        { selectedMarker && (
          <InfoWindow
            position={{
              lat: selectedMarker.lat,
              lng: selectedMarker.lng
            }}
            onCloseClick={() => {
              setSelectedMarker(null);
            }}
          >
            <div>
              <h5 className={`${h5Styles}`}>{selectedMarker.name}</h5>
              <Link href={selectedMarker.link}><a className={linkStyles} target="blank">View on Google Maps</a></Link>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    ))
  );

  return (
    <div id="location">
      <div className={`flex h-12 md:h-48`}>
        <div className={`border-center w-8/12`} />
        <div className={`w-5/12`} />
      </div>
      <div className={`inline md:flex h-full`}>
        <div className={`w-full md:w-6/12`}>
          <h2 className={`${h2Styles}`}>Get to know PDX</h2>
          <ul>
            <li className="mb-8 list-disc text-purple">
              <h5 className={`${h5Styles}`}>Ceremony + Reception</h5>
              <p className={`${paragraphStyles}`}>Castaway Portland</p>
              <p className={`${paragraphStyles}`}>
                1900 NW 18th Ave, Portland, OR 97209
              </p>
            </li>
            <li className="mb-8 list-disc text-purple">
              <h5 className={`${h5Styles}`}>Portland International Airport</h5>
              <p className={`${paragraphStyles}`}>
                7000 NE Airport Way, Portland, OR 97218
              </p>
            </li>
            <li className="mb-8 list-disc text-purple">
              <h5 className={`${h5Styles}`}>Hotel deLuxe</h5>
              <p className={`${paragraphStyles}`}>
                729 SW 15th Ave, Portland, OR 97205
              </p>
            </li>
          </ul>
        </div>
        <div className={`w-full md:w-6/12 z-20`}>
          <div style={{ height: "50vh", width: "100%" }}>
            <MyMapComponent
              googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyAmO1McaQgHA3FLjboz6l2UYqOyYTeAtfo&libraries=geometry,drawing,places'}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        </div>
      </div>
      <div className={`flex md:h-64`}>
        <div className={`border-center w-7/12`} />
        <div className={`w-5/12`} />
      </div>

      <style jsx={true}>{`
        @media screen and (min-width: 768px) {
          .border-center {
            border-right: 4px solid #a20b5c;
          }
        }
      `}</style>
    </div>
  );
}
