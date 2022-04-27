import React from 'react';
import { Box, Container, Text, Image, Stack } from '@chakra-ui/react';

function App() {
  return (
    <Box>
      <Box color="white" bg="black" p={20} minHeight="80%">
        <h1> Germán Nietto </h1>
        <h2>
          {' '}
          es un concepto artístico e intelectual que expresa sus ideas a través
          del navegador web.{' '}
        </h2>
      </Box>
      <Box color="black" bg="white" p={20}>
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
      <Box color="black" bg="white" p={20}>
        <Stack direction="row">
          <Container maxWidth="45%" borderWidth="1px" shadow="md" >
            <Image src="static/pexels-natura.jpg" alt="natura" />
            <Text> Static son sitios web estáticos de práctica y tal </Text>
          </Container>

          <Container maxWidth="45%" borderWidth="1px" shadow="md"  >
            <Image src="static/pexels-aurora.jpg" alt="aurora" />
            <Text>
              {' '}
              Apps son aplicaciones interactivas que manejan estado en sus
              componentes{' '}
            </Text>
          </Container>
        </Stack>
      </Box>
      <Box color="white" bg="black" p={20}>
        <h1> Blog </h1>
        <Box>...componente aquí...</Box>
      </Box>
    </Box>
  );
}

export default App;
