import React from 'react';
import { Box, Heading, Text, Image } from '@chakra-ui/react';
import ListaPosts from './ListaPosts';

function App() {
  return (
    <Box>
      <Box color="white" bg="black" p={10} minHeight="80vh">
        <Heading> Germany Studio </Heading>
        <Heading>
          es un concepto artístico, intelectual y especializado, derivado del
          nombre de pila del creador de este sitio, que expresa sus ideas a
          través del navegador web.
        </Heading>
      </Box>
      <Box color="black" bg="white" p={10}>
        <Text pb="2%">
          {' '}
          La presente expresión conceptual -en este caso, un portafolio- está
          pensada sobre una estrategia de desarrollo mobile-first{' '}
        </Text>
        <Text>
          {' '}
          Está siendo levantado gracias a Vite como empaquetador Typescript;
          Reactjs 17, ChakraUI, Vitest y @testing-library como librerías para el
          ambiente frontend. El código fuente de este portafolio puede
          inspeccionarse en mi repositorio de Github.
        </Text>
        <Text>
          Prontamente mostraré aquí apps basadas en Nodejs y PostgreSQL.
        </Text>
      </Box>
      <Box color="black" bg="white">
        <Image src="/imgs/pexelsnatura.jpg" alt="natura" w="90vw" />
        <Text textAlign="center" px="20%" py="2%">
          {' '}
          [En progreso] Sitios web estáticos en HTML5/CSS3, que he recuperado
          del baúl de los recuerdos, y que ahora están unificados como Single
          Page Application.
        </Text>

        <Image src="/imgs/pexelsaurora.jpg" alt="aurora" ml="auto" w="90vw" />
        <Text textAlign="center" px="20%" py="2%">
          [En progreso] Apps interactivas que manejan estado en sus componentes
          unificadas como Single Page Application.
        </Text>
      </Box>
      <Box color="white" bg="black" p={10}>
        <Heading> Blog </Heading>
        <Box>
          {' '}
          <ListaPosts />{' '}
        </Box>
      </Box>
    </Box>
  );
}

export default App;
