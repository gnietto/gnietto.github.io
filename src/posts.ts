const posts = [
  {
    key: 1,
    titulo: 'Despliegue Contínuo',
    texto: [
      'Hasta hace muy poco, mis apps web eran desplegadas a través de un script npm que usa el paquete gh-pages. El paquete gh-pages es un buen programa, funciona bien y cumple su propósito: desplegar una app en Github Pages. Sin embargo, el tema del despliegue contínuo había estado rondando en mis ideas durante un buen tiempo, y la verdad es que ya sabía que era fácilmente factible de realizar. Así que hace unas dos semanas me avoqué a la tarea de implementar de una manera simple el flujo CI/CD. Por supuesto, la respuesta estaba muy cerca: Github Actions.',
      'Github Actions permite implementar un script en formato .yml que usa los archivos de tu repositorio; procesa las tareas y especificaciones (entorno de sistema operativo, scripts definidos en tu bundler, repositorio de despliegue, entre muchas otras posibilidades) contenidos en el archivo .yml; y procede a desplegar tu app en Github Pages para que sea visible a todo el mundo.',
      'Los beneficios que percibo de este nuevo esquema de despliegue son variados. Primero es que me permitió clarificar los pasos necesarios para que la plataforma Github pueda disponibilizar la app al público general. Segundo, me otorga comodidad en mi proceso de desarrollo puesto que ahora sólo necesito asegurarme que no existan errores en mi entorno local para poder pushear y tener certeza de que el flujo de Github Actions completará todos los pasos y desplegará la nueva versión de mi app. Tercero, puedo ver reflejados mis commits más rápido en el repositorio.',
      'En síntesis, creo que el cambio de gh-pages a Github Actions ha sido todo ventajas, y me satisface haber implementado un nuevo flujo de trabajo y poder entender en principio cómo funciona. Mientras tanto, seguiré explorando las posibilidades de Github Actions.'
    ],
    autor: 'Germán',
    fecha: 'Diciembre 30, 2021',
    link: '/cd',
    tag: 'Devops'
  }
];

export default posts;
