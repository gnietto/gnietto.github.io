import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import posts from './posts';

function ListaPosts() {
  return (
    <article>
      {posts.length === 0 ? (
        <b>Sin posts aun</b>
      ) : (
        posts.map((item: any) => (
          <Box key={item.key}>
            <Heading
              bgColor="fuchsia"
              bgClip="text"
              fontSize="lg"
              fontWeight="bold"
              _hover={{ color: 'orange' }}
            >
              {' '}
              {item.titulo}{' '}
            </Heading>
            <Text fontSize="sm" pb="0.5rem">
              {item.fecha}{' '}
            </Text>
            <Text fontSize="lg">
              {' '}
              {item.texto[0].substring(0, 300)}
              ...{' '}
            </Text>
          </Box>
        ))
      )}
    </article>
  );
}

export default ListaPosts;
