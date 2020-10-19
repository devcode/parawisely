import React from 'react';
import { Marker } from 'react-map-gl';

const SIZE = 30;

const Pins = ({ data, onClick, ...rest }) => {
  return data.map((city, index) => (
    <Marker
      key={`marker-${index}`}
      longitude={parseFloat(city.longitude)}
      latitude={parseFloat(city.latitude)}
    >
      <svg
        height={SIZE}
        onClick={() => onClick(city)}
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
