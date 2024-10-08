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
import mapStyles from '../styles/mapStyles';

// Import data
import { useState } from "react";

export default function Map() {
  const GOOGLE_MAPS_API = process.env.GOOGLE_MAPS_API;
  const markers = [
    {
        "name": "Castaway Portland",
        "lat": 45.5365861,
        "lng": -122.6916165,
        "link": "https://goo.gl/maps/Y3Ln4edF7SrdfsNfA",
        "address": "1900 NW 18th Ave, Portland, OR 97209"
    },
    {
        "name": "Hotel deLuxe",
        "lat": 45.5209862,
        "lng": -122.6876944,
        "link": "https://g.page/HoteldeLuxePortland?share",
        "address": "729 SW 15th Ave, Portland, OR 97205"
    },
    {
        "name": "Portland International Airport",
        "lat": 45.5897694,
        "lng": -122.5972829,
        "link": "https://goo.gl/maps/N4zJanFxJRHB3iUp9",
        "address": "7000 NE Airport Way, Portland, OR 97218"
    },
    {
        "name": "Dossier Hotel",
        "lat": 45.5201004,
        "lng": -122.6821866,
        "link": "https://g.page/dossier-hotel?share",
        "address": "708 SW Alder St, Portland, OR 97205"
    },
    {
      "name": "Holiday Inn Express & Suites",
      "lat": 45.537281,
      "lng": -122.7051261,
      "link": "https://g.page/HIXNWPortland?share",
      "address": "2333 NW Vaughn St, Portland, OR 97210"
  }
  ];
  const [selectedMarker, setSelectedMarker] = useState(null);

  const MyMapComponent = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        defaultZoom={11}
        defaultCenter={{ lat: 45.5201952, lng: -122.6728248 }}
        //defaultOptions={{styles: mapStyles}}
      >
        <Marker
          position={{ lat: markers[0].lat, lng: markers[0].lng }}
          onClick={() => {
            setSelectedMarker(markers[0]);
            console.log(markers[0].name);
          }}
          icon={{
            url: '/images/church.svg',
            scaledSize: new window.google.maps.Size(35, 35)
          }}
        />
        <Marker 
          position={{ lat: markers[1].lat, lng: markers[1].lng }} 
          onClick={() => {
            setSelectedMarker(markers[1]);
            console.log(markers[1].name);
          }}
          icon={{
            url: '/images/hotel.svg',
            scaledSize: new window.google.maps.Size(35, 35)
          }}
        />
        <Marker 
          position={{ lat: markers[2].lat, lng: markers[2].lng }} 
          onClick={() => {
            setSelectedMarker(markers[2]);
            console.log(markers[2].name);
          }}
          icon={{
            url: '/images/plane.svg',
            scaledSize: new window.google.maps.Size(35, 35)
          }}
        />
        <Marker 
          position={{ lat: markers[3].lat, lng: markers[3].lng }} 
          onClick={() => {
            setSelectedMarker(markers[3]);
            console.log(markers[3].name);
          }}
          icon={{
            url: '/images/hotel.svg',
            scaledSize: new window.google.maps.Size(35, 35)
          }}
        />
        <Marker 
          position={{ lat: markers[4].lat, lng: markers[4].lng }} 
          onClick={() => {
            setSelectedMarker(markers[4]);
            console.log(markers[4].name);
          }}
          icon={{
            url: '/images/hotel.svg',
            scaledSize: new window.google.maps.Size(35, 35)
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
      <div className={`h-full sm:mb-4 block md:flex md:flex-col`}>
        <div className={`w-full md:w-6/12`}>
          <h2 className={`${h2Styles} mb-8 border-b-4 border-purple sm:w-full md:w-9/12 xl:w-1/2`}>Hotels</h2>
          <ul>
            <li className="mb-8 list-disc text-purple ml-8 mb-24">
              <Link href={markers[1].link}>
                <a target="_blank" className={`${h5Styles} text-purple`}>{markers[1].name}</a>
              </Link>
              <p className={`${paragraphStyles} pb-2 pt-4`}>
                {markers[1].address}
              </p>
              <div className={`md:w-10/12 lg:w-8/12`}>
                <p className={`${paragraphStyles}`}>
                  The bride and groom have worked with Hotel deLuxe to ensure guests receive a special hotel discount. Use the 
                  link below to book your room with a discount! Alternatively, use the code CELEBRATE at checkout.
                </p>
                <p className={`${paragraphStyles} mt-4`}>
                  <strong>Recommended for:</strong>
                  <ul>
                    <li className={`list-disc ml-8`}>Those who wish to be close to the Welcome Event</li>
                    <li className={`list-disc ml-8`}>Folks who need accommodations near the bride and groom</li>
                  </ul>
                </p>
                <Link href={`https://reservations.provenancehotels.com/?chain=21650&hotel=76779&level=chain&dest=ALL&promo=CELEBRATE`}>
                  <a target="_blank" className={`${buttonStyles} block m-auto text-center mt-2`}>Book with discount</a>
                </Link>
              </div>
            </li>

            <li className="mb-8 list-disc text-purple ml-8 my-24">
              <Link href={markers[3].link}>
                <a target="_blank" className={`${h5Styles} text-purple`}>{markers[3].name}</a>
              </Link>
              <p className={`${paragraphStyles} pb-2 pt-4`}>
                {markers[3].address}
              </p>
              <div className={`md:w-10/12 lg:w-8/12`}>
                <p className={`${paragraphStyles}`}>
                  Use the link below to book your room with a discount!
                </p>
                <p className={`${paragraphStyles} mt-4`}>
                  <strong>Recommended for:</strong>
                  <ul>
                    <li className={`list-disc ml-8`}>Those who wish to be close to the Welcome Event</li>
                    <li className={`list-disc ml-8`}>Folks who would like a more modern hotel experience</li>
                  </ul>
                </p>
                <Link href={`https://reservations.provenancehotels.com/?chain=21650&hotel=76814&level=chain&dest=ALL&promo=CELEBRATE`}>
                  <a target="_blank" className={`${buttonStyles} block m-auto text-center mt-2`}>Book with discount</a>
                </Link>
              </div>
            </li>            

            <li className="mb-8 list-disc text-purple ml-8 my-24">
              <Link href={markers[4].link}>
                <a target="_blank" className={`${h5Styles} text-purple`}>{markers[4].name}</a>
              </Link>
              <p className={`${paragraphStyles} pb-2 pt-4`}>
                {markers[4].address}
              </p>
              <div className={`md:w-10/12 lg:w-8/12`}>
                <p className={`${paragraphStyles} mt-4`}>
                  <strong>Recommended for:</strong>
                  <ul>
                    <li className={`list-disc ml-8`}>Those who wish to be close to the wedding venue</li>
                    <li className={`list-disc ml-8`}>Folks who are bringing cars and would like free parking</li>
                  </ul>
                </p>
              </div>
            </li>
          </ul>
          <h2 className={`${h2Styles} mb-8 border-b-4 border-purple sm:w-full md:w-11/12 xl:w-1/2 mt-24`}>Ceremony & Reception</h2>
          <ul>
            <li className="mb-8 list-disc text-purple ml-8 mb-24">
              <Link href={markers[0].link}>
                <a target="_blank" className={`${h5Styles} text-purple`}>{markers[0].name}</a>
              </Link>
              <p className={`${paragraphStyles} pt-4`}>
                {markers[0].address}
              </p>
            </li>
          </ul>
          <h2 className={`${h2Styles} mb-8 border-b-4 border-purple sm:w-full md:w-9/12 xl:w-1/2`}>Airport</h2>
          <ul>
            <li className="mb-8 list-disc text-purple ml-8 mb-24">
              <Link href={markers[2].link}>
                <a target="_blank" className={`${h5Styles} text-purple`}>{markers[2].name}</a>
              </Link>
              <p className={`${paragraphStyles} pt-4`}>
                {markers[2].address}
              </p>
            </li>
          </ul>
        </div>
        <div className={`w-full md:w-6/12 block md:fixed md:right-0 z-20`}>
          <div className={`map-container w-full md:w-10/12`} style={{ height: "50vh" }}>
            <MyMapComponent
              googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyAmO1McaQgHA3FLjboz6l2UYqOyYTeAtfo&libraries=geometry,drawing,places'}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        </div>
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
