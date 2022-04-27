import React from 'react';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <Box>
      <Box color="white" bg="tomato" p={20}>
        <h1> Germán Nietto </h1>
      </Box>
      <Box color="white" bg="orange" p={20}>
        <h1>¿Cómo está siendo construído este sitio web? </h1>
        <p>
          {' '}
          El presente portafolio laboral está pensado sobre una estrategia de
          desarrollo 'mobile-first' y está siendo levantado gracias a Vitejs
          como empaquetador Typescript; Reactjs 18, ChakraUI en el frontend;
          Nodejs, Postgresql en el backend; Vitest como test runner, y
          @testing-library como librería especializada de test unitarios y de
          integración para el ambiente front. El código fuente de este
          portafolio puede inspeccionarse en el repositorio
          gnietto/gnietto.github.io de Github.{' '}
        </p>
      </Box>
      <Box color="white" bg="cyan" p={20}>
        <h1> Proyectos </h1>
        <Box> ...slider aquí... </Box>
      </Box>
      <Box color="white" bg="papayawhip" p={20}>
        <h1> Blog </h1>
        <Box>...componente aquí...</Box>
      </Box>
    </Box>
  );
}

export default App;
