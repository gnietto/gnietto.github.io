const posts = [
  {
    key: '0018',
    titulo: 'Linux desde Cero IV',
    texto: [
      'El resultado parcial de mi experimento con Tiny Core Linux me ha dejado con una bastante buena impresión. Mi paladar minimalista está disfrutando que el consumo de RAM inicial de TCL se encuentre en los 38 Mb para plataformas x86, y en alrededor de 45Mb para x86_64. El sistema de paquetería es diferente a lo visto en otras distro y debo decir que está inteligentemente diseñado. Me gusta que TCL se ejecute preferentemente en RAM por lo que carga muy rápido. Me gusta que se pueda obtener una interfaz gráfica con una presentación y desempeño bastante decente. Además, me percaté que TCL mantiene un proyecto paralelo basado en TCL llamado dCore, que reconvierte paquetes desde los repos de Debian y/o Ubuntu. Nice!'
    ],
    autor: 'Germán',
    fecha: 'Octubre 27, 2022',
    link: '/linux-desde-cero-4',
    tag: 'Linux'
  },
  {
    key: '0017',
    titulo: 'Linux desde Cero III',
    texto: [
      'Revisando mis posts de la serie Linux desde Cero, recordé que uno de los requisitos que yo mismo había declarado para instalar una distribución de Linux o BSD es que el sistema base consuma muy poca memoria RAM. Después de haber configurado, usado y conocido en parte el funcionamiento de la distro actual, me queda claro que es perfectamente posible mejorar la eficiencia del uso de RAM y de disco duro, y a la vez mantener la funcionalidad actual. Así que, apuntando hacia ese objetivo, he decidido darle una oportunidad a Tiny Core Linux. He revisado su documentación lo suficiente, y me parece que puede cumplir con la expectativa aunque su administración sea algo diferente de otras distros. Ampliaremos.'
    ],
    autor: 'Germán',
    fecha: 'Octubre 11, 2022',
    link: '/linux-desde-cero-3',
    tag: 'Linux'
  },
  {
    key: '0016',
    titulo: 'Acerca del Blog',
    texto: [
      'Hace bastante tiempo que escribí el último post de este microblog. Creo que necesito mejorar algunos aspectos de éste, a saber: 1) Enfocar y mejorar el contenido del blog, por ejemplo, ampliando el detalle de los posts ya escritos  2) Comentar los avances materializados en los proyectos de software web mencionados en este portafolio 3) He subido el límite de mis posts desde 300 caracteres hasta 720 (tomando como referencia los posts de 240 caracteres de Twitter: 240 x 3) para redactar con mayor detalle. Siempre se puede mejorar y eso es lo que estoy haciendo.'
    ],
    autor: 'Germán',
    fecha: 'Octubre 10, 2022',
    link: '/acerca-del-blog',
    tag: 'Blog'
  },
  {
    key: '0015',
    titulo: 'Opinionated vs Unopinionated',
    texto: [
      '[Actualizado el 14/10/2022] Estaba pensando en la diferencia entre los entornos de trabajo (un)opinionated. Hace un tiempo leí un libro de solución de problemas en programación que mencionaba que las restricciones explícitas son herramientas muy útiles para el proceso de resolución de éstos. Un ejemplo de lo expuesto es la ventaja de usar Typescript vs usar Javascript puro, por ejemplo, en el ámbito de lo que se llama análisis estático de código. Esta temática me lleva a considerar con más atención entornos de trabajo más directivos como Angular, Next, Remix o Nestjs. Definitivamente me involucraré mucho más en el buen uso de estos frameworks.'
    ],
    autor: 'Germán',
    fecha: 'Septiembre 12, 2022',
    link: '/opinionated-vs-unopinionated',
    tag: 'Programación'
  },
  {
    key: '0014',
    titulo: 'Asíncrono vs Síncrono',
    texto: [
      'He creado una regla nemotécnica que me parece bastante útil: Si el bloque de código se puede intercambiar con otro sin perder funcionalidad, usa la versión asíncrona (promesas, async/await...). De lo contrario, usa la versión síncrona de toda la vida. Y esto nos lleva nuevamente al ámbito del diseño de software.'
    ],
    autor: 'Germán',
    fecha: 'Agosto 28, 2022',
    link: '/asincrono-vs-síncrono',
    tag: 'Programación'
  },
  {
    key: '0013',
    titulo: 'El Gran Engaño',
    texto: [
      'Creo que el proceso de Nueva CPR es un gran engaño. ¿Cuánta gente sabe que uno de los objetivos del proceso es consolidar un programa político de integración llamado Patria Grande, y que implica prestar $$ a países sacos rotos con vuestros impuestos? Mucho perjuicio, 0 ganancia.'
    ],
    autor: 'Germán',
    fecha: 'Agosto 14, 2022',
    link: '/el-gran-engaño',
    tag: 'Sociedad'
  },
  {
    key: '0012',
    titulo: 'Domain-Driven Design',
    texto: [
      'He llegado al punto de requerir interiorizarme en el ámbito del diseño de software con objeto de construir software ordenadamente escalable si quiero prestar servicios a nivel de gran empresa con códigos fuentes de miles de líneas. A ese tenor, he estado estudiando acerca de Domain-Driven Design.'
    ],
    autor: 'Germán',
    fecha: 'Agosto 13, 2022',
    link: '/domain-driven-design',
    tag: 'Programación'
  },
  {
    key: '0011',
    titulo: 'The Pragmatic Programmer',
    texto: [
      'El libro The Pragmatic Programmer ha sido ampliamente recomendado para quienes buscan mejorar su desempeño en su rol de programador/desarrollador. Como podrán imaginar, ya lo estoy leyendo y lo que leo me está gustando y me hace mucho sentido.'
    ],
    autor: 'Germán',
    fecha: 'Julio 27, 2022',
    link: '/pragmatic-programmer',
    tag: 'Programación'
  },
  {
    key: '0010',
    titulo: 'Internationalization API',
    texto: [
      'Mucha gente conoce el lenguaje Javascript y algunos de sus entresijos, pero al parecer no mucha gente sabe (al principio) que existe una API de internacionalización que complementa JS. Pues bien, ya que me encuentro ampliando mis herramientas de JS/TS, la intl API está siendo integrada a mi arsenal.'
    ],
    autor: 'Germán',
    fecha: 'Julio 23, 2022',
    link: '/internacionalization-api',
    tag: 'Programación'
  },
  {
    key: '0009',
    titulo: 'Tiempo para Leer',
    texto: [
      'He estado concentrado ordenando el tiempo de lectura, leyendo y tomando notas de varios libros y documentos relativos a la programación e ingeniería de software. No he commiteado en estos últimos días a causa de esto, así que retomaré a la brevedad el ritmo de commiteo.'
    ],
    autor: 'Germán',
    fecha: 'Julio 18, 2022',
    link: '/tiempo-para-leer',
    tag: 'Programación'
  },
  {
    key: '0008',
    titulo: 'Estudio de Algoritmos',
    texto: [
      'Hace tiempo que tenía pendiente interiorizarme en algoritmos y estructuras de datos, y finalmente empecé a avanzar en esa materia. Me siento entusiasta en que mi habilidad y entendimiento en programación aumentará notoriamente. Hay mucho que estudiar, así que mejor establezco una regla 80/20.'
    ],
    autor: 'Germán',
    fecha: 'Julio 14, 2022',
    link: '/inicio-algoritmos',
    tag: 'Programación'
  },
  {
    key: '0007',
    titulo: 'Linux desde Cero II',
    texto: [
      'Reconsiderando este tema, construir una distro desde 0 es bastante demandante en tiempo y esfuerzo; al mismo tiempo, uno aprende *mucho* acerca de Linux. Dada esta condicionante, una idea alternativa es escoger una distro ultraliviana para entenderla y personalizarla. Ya tengo una en mente.'
    ],
    autor: 'Germán',
    fecha: 'Julio 07, 2022',
    link: '/linux-desde-cero-2',
    tag: 'Linux'
  },
  {
    key: '0006',
    titulo: 'Expressjs, Fastify, Koa o Nestjs?',
    texto: [
      'En el rubro del backend con Nodejs, el framework Expressjs ha sido lejos el más usado. Después de 2 años sin mantenimiento, hace poco han retomado el desarrollo. Debido a lo anterior y a mejores funcionalidades, expertos han recomendado cambiar a Fastify o Koa. Me decidí por Fastify. Me gusta :)'
    ],
    autor: 'Germán',
    fecha: 'Julio 04, 2022',
    link: '/express-fastify-koa-nest',
    tag: 'Programación'
  },
  {
    key: '0005',
    titulo: 'Acerca de Ciberseguridad',
    texto: [
      'Siempre me han interesado las variantes del campo de la ciberseguridad. Ya he explorado antes superficialmente algunas de estas variantes, y creo que debo ordenar mi tiempo para reiniciar y aumentar mi habilidad en este campo. Diversificar habilidades es una buena idea :)'
    ],
    autor: 'Germán',
    fecha: 'Junio 25, 2022',
    link: '/acerca-de-ciberseguridad',
    tag: 'Cybersec'
  },
  {
    key: '0004',
    titulo: 'Linux desde Cero I',
    texto: [
      'Cuando instalé OpenBSD con GUI, noté que ocupaba sólo 50 Mb de RAM. Al instalar Linux con GUI, el consumo mínimo de RAM es de 330 Mb. Me pregunto si puedo bajar el uso de RAM ensamblando una distro de Linux propia desde cero. Iré comentando en este blog a medida que avance en este periplo.'
    ],
    autor: 'Germán',
    fecha: 'Junio 25, 2022',
    link: '/linux-desde-cero-1',
    tag: 'Linux'
  },
  {
    key: '0003',
    titulo: 'Pausa Constitucional',
    texto: [
      'El 20% del esfuerzo bien colocado explica el 80% de los resultados. Ya tenemos más del 80% del esfuerzo hecho en el borrador de la nueva constitución. Por tanto haré mi pega leyendo el borrador y comparándolo con otras CPR incluyendo la vigente chilena. La democracia liberal debe permanecer.'
    ],
    autor: 'Germán',
    fecha: 'Junio 23, 2022',
    link: '/pausa-constitucional',
    tag: 'Sociedad'
  },
  {
    key: '0002',
    titulo: 'De Windows a Linux',
    texto: [
      'Durante mucho tiempo he usado Windows 10. Funciona bien, pero ocupa demasiada RAM en asuntos del sistema en vez de asuntos productivos míos. Así que decidí por 3° vez en mi vida cambiar de SO. Esta vez probé OpenBSD y luego Linux. Estoy bastante conforme con ambos, por ahora me decidí por Linux.'
    ],
    autor: 'Germán',
    fecha: 'Junio 16, 2022',
    link: '/windows-a-linux',
    tag: 'Linux'
  },
  {
    key: '0001',
    titulo: 'Despliegue Contínuo',
    texto: [
      'Leyendo acerca de Ingeniería de Software, me entusiasmé y decidí implementar CI/CD en mi flujo de desarrollo via Github Actions. Después de adaptar el script a mi flujo, simplemente I loved it. Por ahora mi implementación es CD a secas, pronto agregaré el factor CI a la ecuación.'
    ],
    autor: 'Germán',
    fecha: 'Junio 15, 2022',
    link: '/cd',
    tag: 'Devops'
  }
];

export default posts;
