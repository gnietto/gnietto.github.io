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
          <Box key={item.key} mb="1.5vw">
            <Heading
              bgColor="fuchsia"
              bgClip="text"
              fontSize="lg"
              fontWeight="bold"
              py="0.35vw"
              _hover={{ color: 'orange' }}
            >
              {' '}
              {item.titulo}{' '}
            </Heading>
            <Text fontSize="sm" pb="0.5rem">
              {`${item.fecha}   ${item.tag}`}
            </Text>
            <Text fontSize="xl"> {item.texto[0].substring(0, 300)}</Text>
          </Box>
        ))
      )}
    </article>
  );
}

export default ListaPosts;
