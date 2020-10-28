import React from 'react';
import { Box, Heading, Stack, Text, Avatar } from '@chakra-ui/core';
import moment from 'moment';

moment.locale('id');

const CommentItem = ({ comment }) => {
  return (
    <Stack key={`alskdlas-${comment.id}`} direction="row" spacing="1rem">
      <Avatar name={comment.name} alt={comment.name} />
      <Box>
        <Heading fontSize="18px">{comment.name}</Heading>
        <Text>{comment.comment}</Text>
        <Text color="gray.200" fontWeight="300">
          {moment(comment.created_at).format('LL')}
        </Text>
      </Box>
    </Stack>
  );
};

export default CommentItem;
