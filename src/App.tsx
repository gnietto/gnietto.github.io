import { Box, Heading, Text, Image, Flex, Link } from '@chakra-ui/react';
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
          es un concepto artístico, cultural e intelectual que expresa sus ideas
          principalmente a través del navegador web
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
          desarrollo en el ambiente frontend; y Github Actions que permite
          implementar flujos automatizados de CI/CD. Los interesados en conocer
          más pueden visitar el código fuente de este portafolio y otros
          proyectos en{' '}
          <Link href="https://github.com/gnietto" color="teal.500">
            github.com/gnietto
          </Link>
          .
        </Text>
        <Text>
          Prontamente mostraré apps basadas en Nodejs y PostgreSQL para
          ambientes de terminal, navegador web y dispositivos móviles.
        </Text>
      </Box>
      <Box color="black" bg="white" fontSize="xl">
        <Box>
          <Image src="/imgs/statico.jpg" alt="natura" w="90vw" />
          <Text textAlign="center" px="20%" py="1rem">
            {' '}
            [En progreso] Colección de sitios web estáticos originalmente
            escritos en HTML5/CSS3 plano que han sido recuperados desde el baúl
            de los recuerdos, y que ahora están unificados como Single Page
            Application. Para ver, haz click{' '}
            <Link color="teal.500" href="https://gnietto.github.io/static/">
              aquí
            </Link>
            .
          </Text>
        </Box>
        <Box py="1.5rem">
          <Image src="/imgs/dinamico.jpg" alt="aurora" ml="auto" w="90vw" />
          <Text textAlign="center" px="20%" py="1rem">
            [En progreso] Colección dé apps interactivas que manejan estado en
            sus componentes y que están ahora unificadas como Single Page
            Application. Para ver, haz click{' '}
            <Link color="teal.500" href="https://gnietto.github.io/usestate/">
              aquí
            </Link>
            .
          </Text>
        </Box>
        <Box py="1.5rem">
          <Image src="/imgs/tiuque.jpg" alt="aurora" w="90vw" />
          <Text textAlign="center" px="20%" py="1rem">
            [Iniciando] Tiuker es una aplicación fullstack basada en Nodejs,
            Reactjs y PostgreSQL que pretende imitar parte de la funcionalidad
            de Twitter. Cuando Tiuker esté en estado [en progreso], podrás verla
            haciendo click{' '}
            <Link color="teal.500" href="https://gnietto.github.io/tiuker/">
              aquí
            </Link>
            .
          </Text>
        </Box>
      </Box>
      <Box color="white" bg="black" p={10}>
        <Heading pb="0.75rem"> Microblogging </Heading>
        <Box>
          {' '}
          <ListaPosts />{' '}
        </Box>
      </Box>
    </Box>
  );
}

export default App;
