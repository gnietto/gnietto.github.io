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
          Las ideas de este portafolio están pensadas sobre una estrategia de
          desarrollo mobile-first y usan un flujo de CI/CD via Github Actions.
        </Text>
      </Box>
      <Box color="black" bg="white" fontSize="xl">
        <Box py=".75rem">
          <Image src="/imgs/dinamico.webp" alt="aurora" ml="auto" w="90vw" />
          <Text textAlign="center" px="20%" py="1rem">
            [En progreso] Colección de apps interactivas (Frases Célebres,
            Calculadora, Previsualizador Markdown) que manejan estado en sus
            componentes y que están ahora unificadas como Single Page
            Application. Para ver, haz click{' '}
            <Link color="teal.500" href="https://gnietto.github.io/usestate/">
              aquí
            </Link>
            .
          </Text>
        </Box>
        <Box py=".75rem">
          <Image
            src="/imgs/frutakids.webp"
            alt="frutas tutti frutti"
            w="90vw"
          />
          <Text textAlign="center" px="20%" py="1rem">
            {' '}
            [En progreso] FrutaKids es un juego didáctico e interactivo para niños cuyo objetivo
            es clasificar frutas de mayor a menor precio. Para ver, haz click{' '}
            <Link color="teal.500" href="https://gnietto.github.io/frutakids/">
              aquí
            </Link>
            .
          </Text>
        </Box>
        <Box py=".75rem">
          <Image src="/imgs/tiuque.webp" alt="aurora" w="90vw" ml="auto" />
          <Text textAlign="center" px="20%" py="1rem">
            [En progreso] Tiuker es una aplicación fullstack basada en Nodejs,
            Reactjs y PostgreSQL que pretende imitar parte de la funcionalidad
            de Twitter. Puedes ver los avances del código en <Link color="teal.500" href="https://github.com/gnietto/tiuker/">Github</Link>. Puedes ver el despliegue
            haciendo click{' '}
            <Link color="teal.500" href="https://gnietto.github.io/tiuker/">
              aquí
            </Link>
            .
          </Text>
        </Box>
        <Box py=".75rem">
          <Image src="/imgs/statico.webp" alt="natura" w="90vw" />
          <Text textAlign="center" px="20%" py="1rem">
            {' '}
            [En progreso] Colección de sitios web estáticos (Tributo a Francisco
            Varela, Documentación Técnica, Encuesta) originalmente escritos en
            HTML5/CSS3 plano que han sido recuperados desde el baúl de los
            recuerdos, y que ahora están unificados como Single Page
            Application. Para ver, haz click{' '}
            <Link color="teal.500" href="https://gnietto.github.io/static/">
              aquí
            </Link>
            .
          </Text>
        </Box>
      </Box>
      <Box color="white" bg="black" p={5}>
        <Heading pb="0.75rem" fontSize="3xl" > Microblogging </Heading>
        <Box>
          {' '}
          <ListaPosts />{' '}
        </Box>
      </Box>
    </Box>
  );
}

export default App;
