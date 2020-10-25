import React from 'react';
import { Box, Heading, Stack, Text, StackDivider } from '@chakra-ui/core';

const Comment = () => {
  return (
    <Box borderRadius="md" shadow="md" p="2rem">
      <Heading fontSize="24px">Ulasan (0) </Heading>

      <Stack
        spacing="2rem"
        divider={<StackDivider borderColor="red.300" />}
        mt="2rem"
      >
        <Stack>
          <Heading fontSize="18px">Supryanto wp</Heading>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
            facere sapiente commodi accusamus maxime sunt hic eius perferendis
            ea minima.
          </Text>
        </Stack>
        <Stack>
          <Heading fontSize="18px">Supryanto wp</Heading>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
            facere sapiente commodi accusamus maxime sunt hic eius perferendis
            ea minima.
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Comment;
