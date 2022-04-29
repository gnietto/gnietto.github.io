import React from 'react';
import {
  Box,
  Heading,
  Text,
  Image,
} from '@chakra-ui/react';
import ListaPosts from './ListaPosts';

function App() {
  return (
    <Box>
      <Box color="white" bg="black" p={10} minHeight="80vh">
        <Heading> Germán Nietto </Heading>
        <Heading>
          es un concepto artístico e intelectual que expresa sus ideas a través
          del navegador web.
        </Heading>
      </Box>
      <Box color="black" bg="white" p={10}>
        <h2>
          {' '}
          La presente expresión conceptual -en este caso, un portafolio- está
          pensada sobre una estrategia de desarrollo 'mobile-first'{' '}
        </h2>
        <p>
          {' '}
          Está siendo levantado gracias a Vitejs como empaquetador Typescript;
          Reactjs 18, ChakraUI en el frontend; Nodejs, Postgresql en el backend;
          Vitest como test runner, y @testing-library como librería
          especializada de test unitarios y de integración para el ambiente
          front. El código fuente de este portafolio puede inspeccionarse en mi
          repositorio de Github.
        </p>
      </Box>
      <Box color="black" bg="white">
        <Image src="static/pexels-natura.jpg" alt="natura" w="90vw"   />
        <Text textAlign="center" px="20%" >
          {' '}
          Static son los sitios web staticos que he realizado originalmente en
          html/css plano, pero que ahora están unificados como app
        </Text>

        <Image src="static/pexels-aurora.jpg" alt="aurora" ml="auto" w="90vw"  />
        <Text textAlign="center" px="20%"  >
          Apps son aplicaciones interactivas que manejan estado en sus
          componentes{' '}
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
