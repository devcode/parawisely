import React from 'react';
import { Marker } from 'react-map-gl';
import { Image } from '@chakra-ui/core';

const Pins = ({ data, onClick }) => {
  return data.map((city, index) => (
    <Marker
      key={`marker-${index}`}
      longitude={parseFloat(city.longitude)}
      latitude={parseFloat(city.latitude)}
    >
      <Image
        onClick={() => onClick(city)}
        src={city.image}
        borderRadius="full"
        shadow="xl"
        w="50px"
        h="50px"
        objectFit="cover"
      />
    </Marker>
  ));
};

export default Pins;
