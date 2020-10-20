import React from 'react';
import { Box } from '@chakra-ui/core';
import '../../../stylesheets/map.css';

import { useQuery } from 'react-query';

const fetchTypePlace = async () => {
  const link = 'http://parawisely-backend.test/api/travel-type';
  const res = fetch(link);
  return res.json();
};

const Legend = () => {
  const { data, error, status } = useQuery('type-place', fetchTypePlace);
  return (
    <div>
      {status === 'loading' && <div>loading</div>}
      {status === 'error' && <div>{error}</div>}
      {status === 'success' && (
        <Box bg="white" my="10vh" mx="15px" color="black">
          {data.data.map((item, index) => (
            <div>{item.id}</div>
          ))}
        </Box>
      )}
    </div>
  );
};

export default Legend;
