import React from 'react';
import { Marker } from 'react-map-gl';

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

const SIZE = 20;

const Pins = ({ data, onClick, ...rest }) => {
  return data.map((item, index) => (
    <Marker
      key={`marker-${index}`}
      longitude={item.longitude}
      latitude={item.latitude}
    >
      <svg
        onClick={() => onClick(item)}
        height={SIZE}
        viewBox="0 0 30 30"
        {...rest}
      >
        <path
          d="M15 28.9c-1.6-3-8-9.4-9.9-13.5-.6-1.3-1-2.7-1-4.2.1-5.5 5-10.1 10.9-10.1s10.9 4.6 10.9 10.1c0 1.5-.4 2.9-1 4.2-1.9 4.1-8.3 10.5-9.9 13.5z"
          fill="#0f86bd"
        />
        <g
          fill="none"
          stroke="#87c2de"
          strokeWidth={2}
          strokeLinecap="round"
          strokeMiterlimit={10}
        >
          <path d="M5.1 15.4c-.6-1.3-1-2.7-1-4.2.1-5.5 5-10.1 10.9-10.1s10.9 4.6 10.9 10.1c0 1.5-.4 2.9-1 4.2M15.1 28.9h0M5.1 15.4C7 19.5 13.4 25.9 15 28.9M24.9 15.4C23 19.5 16.6 25.9 15 28.9h0v0" />
        </g>
      </svg>
    </Marker>
  ));
};

export default Pins;
