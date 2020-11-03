import React from 'react';
import { Box, Heading } from '@chakra-ui/core';
import { Link } from 'react-router-dom';

const asset = process.env.REACT_APP_BACKEND_ASSET;

const LokasiItem = ({ data, type_name }) => {
  const { image, name_place, slug } = data;
  return (
    <Box
      borderRadius="md"
      h="361px"
      w="261px"
      style={{
        background: `url(${asset}/placeImage/${image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <Box
        p="1rem"
        position="absolute"
        bottom={0}
        color="white"
        textAlign="center"
      >
        <Link to={`place/${slug}`}>
          <Heading fontWeight="extra_bold" fontSize="24px">
            {name_place}
          </Heading>
        </Link>
      </Box>
    </Box>
  );
};

// const LokasiItem = ({ data, type_name }) => {
//   const { image, name_place, provinsi, slug } = data;
//   return (
//     <Box>
//       <Image
//         src={image}
//         fallbackSrc={notFoundIMG}
//         h="361px"
//         w="261px"
//         objectFit="cover"
//         borderRadius="md"
//         shadow="lg"
//       />
//       <Box
//         position="relative"
//         w="80%"
//         p="1rem"
//         top={-86}
//         borderTopRightRadius="lg"
//         style={{
//           backdropFilter: 'blur(10px)',
//           background: 'rgba(255, 255, 255, 0.7)',
//         }}
//       >
//         <Link to={`place/${slug}`}>
//           <Heading fontWeight="extra_bold" size="md">
//             {name_place}
//           </Heading>
//           <Text color="gray.600">{provinsi}</Text>
//         </Link>
//       </Box>
//     </Box>
//   );
// };

export default LokasiItem;
