const posts = [
  {
    key: '0004',
    titulo: 'Linux desde Cero',
    texto: [
      'Cuando instalé OpenBSD con GUI, noté que ocupaba sólo 50 Mb de RAM. Al instalar Linux con GUI, el consumo mínimo de RAM es de 330 Mb. Me pregunto si puedo bajar el uso de RAM ensamblando una distro de Linux propia desde cero. Iré comentando en este blog a medida que avance en este periplo.'
    ],
    autor: 'Germán',
    fecha: 'Junio 25, 2022',
    link: '/linux-desde-cero',
    tag: 'Devops'
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
    tag: 'Devops'
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
