import React from 'react';
import { Image } from '@chakra-ui/core';

const CityInfo = ({ info }) => {
  const displayName = `${info.name_place}`;

  return (
    <div>
      {displayName}
      <Image src={info.image} w="200px" h="230px" />
    </div>
  );
};

export default CityInfo;
