import React from 'react';
import { Box, Heading, Text, Image, Flex } from '@chakra-ui/react';
import ListaPosts from './ListaPosts';

function App() {
  return (
    <Box>
      <Flex
        color="white"
        bg="black"
        p={10}
        minHeight="80vh"
        flexDirection="column"
        justifyContent="center"
      >
        <Heading textAlign="center"> Germany Studio </Heading>
        <Text fontSize="4xl" py="1rem" textAlign="center">
          es un concepto artístico e intelectual que expresa sus ideas a través
          del navegador web
        </Text>
      </Flex>
      <Box color="black" bg="white" p={10} fontSize="xl">
        <Text>
          {' '}
          La presente expresión conceptual -en este caso, mi portafolio- está
          pensada sobre una estrategia de desarrollo incremental y mobile-first.
        </Text>
        <Text py="1rem">
          {' '}
          Los proyectos de software de Germany Studio se realizan gracias al
          gestor de paquetes pnpm, el empaquetador Typescript/Javascript Vitejs;
          Reactjs, ChakraUI, Vitest y @testing-library como librerías para el
          desarrollo en el ambiente frontend; y Github Actions que me permite
          implementar un flujo automatizado básico de CI/CD. Los interesados en
          conocer más pueden visitar el código fuente de este portafolio y otros
          proyectos en github.com/gnietto.
        </Text>
        <Text>
          Prontamente mostraré apps basadas en Nodejs y PostgreSQL para
          ambientes de terminal, navegador web y dispositivos móviles.
        </Text>
      </Box>
      <Box color="black" bg="white" fontSize="lg">
        <Box>
          <Image src="/imgs/pexelsnatura.jpg" alt="natura" w="90vw" />
          <Text textAlign="center" px="20%" py="1rem">
            {' '}
            [En progreso] Sitios web estáticos en HTML5/CSS3 recuperados desde
            el baúl de los recuerdos, y que ahora están unificados como Single
            Page Application.
          </Text>
        </Box>
        <Box py="1.5rem">
          <Image src="/imgs/pexelsaurora.jpg" alt="aurora" ml="auto" w="90vw" />
          <Text textAlign="center" px="20%" py="1rem">
            [En progreso] Apps interactivas que manejan estado en sus
            componentes y que están ahora unificadas como Single Page
            Application.
          </Text>
        </Box>
      </Box>
      <Box color="white" bg="black" p={10}>
        <Heading pb="0.75rem"> Blog </Heading>
        <Box>
          {' '}
          <ListaPosts />{' '}
        </Box>
      </Box>
    </Box>
  );
}

export default App;
