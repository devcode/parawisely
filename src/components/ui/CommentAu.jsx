import React, { useState } from 'react';
import { Box, Heading, Stack, Text, StackDivider } from '@chakra-ui/core';
import PostComment from './Comment';

const Comment = ({ data }) => {
  const [comment, setComment] = useState({
    jumlahComment: data.length,
    comments: data,
  });

  return (
    <>
      <PostComment place_id={data.id} />

      <Box borderRadius="md" shadow="md" p="2rem">
        <Heading fontSize="24px">Ulasan ({comment.jumlahComment}) </Heading>

        <Stack
          spacing="2rem"
          divider={<StackDivider borderColor="gray.300" />}
          mt="2rem"
        >
          {comment.comments.map((item, index) => (
            <Stack key={index}>
              <Heading fontSize="18px">{item.name}</Heading>
              <Text>{item.comment}</Text>
            </Stack>
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default Comment;
