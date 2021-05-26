import React, { useState } from 'react';
import { Link } from '@reach/router';
import posts from './posts';
import peep from './peep-52.svg';



function NoExiste({ className }){
	return (
		<b className={ className } > La página que ud. está buscando no existe </b>
	)
}


function ContenedorGrid({ children, className }){
	let listaApps = [
		{
			"app": 'Maps',
			"url": 'https://gnietto.github.io/maps',
			"descripcion": 'Clon de Google Maps básico',
		},
		{
			"app": 'Integración Webpay',
			"url": '#',
			"descripcion": 'Integración con Webpay usando Nodejs SDK de Transbank (pendiente)',
		},
				{
			"app": 'Autenticación',
			"url": '#',
			"descripcion": 'App con autenticación de usuarios levantado con Reactjs + Firebase (pendiente)',
		},
		{
			"app": 'LinkedIn',
			"url": '#',
			"descripcion": 'Clon de LinkedIn levantado con Reactjs + Firebase (pendiente)',   
		},
		{
			"app": 'Whatsapp',
			"url": '#',
			"descripcion": '(pendiente)',
		},
		{
			"app": 'The Cybernetist',
			"url": 'https://thecybernetist.herokuapp.com',
			"descripcion": 'Blog personal levantado con Nodejs/Stylus/Pug',
		},
		{
			"app": 'FrutaKids',
			"url": 'https://gnietto.github.io/frutakids',
			"descripcion": 'Juego para niños que enseña la habilidad de clasificar frutas según su precio de venta',      
		}, 
		{
			"app": 'Histograma PIB EEUU',
			"url": 'https://gnietto.github.io/pibeeuu',
			"descripcion": 'Visualización de datos del PIB de EEUU en el período 1945-2015 levantado con D3js',
		},
		{
			"app": 'Emisor de Frases Célebres',
			"url": 'https://gnietto.github.io/frasescelebres',
			"descripcion": 'Generador de frases célebres acerca de programación, vida y más',
		},
		{
			"app": 'Tributo a Francisco Varela',
			"url": 'https://gnietto.github.io/tributovarela',
			"descripcion": 'Tributo póstumo que resalta la producción científica del notable biólogo chileno',
		},
		{
			"app": 'Calculadora Simple',
			"url": 'https://gnietto.github.io/calculadora',
			"descripcion": 'Calculadora que realiza operaciones aritméticas básicas',
		},
		{
			"app": 'Previsualizador Markdown',
			"url": 'https://gnietto.github.io/markdown',
			"descripcion": 'Previsualización de texto desde Markdown a HTML',
		},
		{
			"app": 'Documentación @redux/toolkit',
			"url": 'https://gnietto.github.io/resumenredux',
			"descripcion": 'Resumen de la documentación técnica de @redux/toolkit',
		},
		{
			"app": 'Tuba Landing Page',
			"url": 'https://gnietto.github.io/tubalanding',
			"descripcion": 'Página de aterrizaje para venta de instrumentos musicales',
		},
		{
			"app": 'Horóscopo',
			"url": 'https://gnietto.github.io/horoscopo',
			"descripcion": 'Horóscopo basado en formularios HTML (pendiente)',
		}
	];

	return (
		<div className={'grid'} id='apps'>			
			{          
				listaApps.map((app, index) => {
					return (              
						<div key={index} className={'card'}>
							<a href={app.url}  className={'card_titulo'} target='_blank' rel='noopener noreferrer'> {app.app} </a>
							<p className={'card_descripcion'}> {app.descripcion} </p>
						</div>
					)
				})
			}
		</div>
	)
}


function Frases({ className }){
	let [itemFrases1, setItemFrases1] = useState('Hola,')
	let [itemFrases2, setItemFrases2] = useState('Soy')
	let [itemFrases3, setItemFrases3] = useState('Germán:')
	let [itemFrases4, setItemFrases4] = useState('Programador;')
	let [itemFrases5, setItemFrases5] = useState('Cibernetista;')
	let [itemFrases6, setItemFrases6] = useState('& Humanista;')

	return (
		<>
			<Link to='/acerca' className={'links'}> <h3 onMouseEnter={() => setItemFrases1('Acerca de')} onMouseLeave={() => setItemFrases1('Hola')} > {itemFrases1} </h3> </Link>
			<Link to='/blog' className={'links'}> <h3 onMouseEnter={() => setItemFrases2('Blog')} onMouseLeave={() => setItemFrases2('Soy')} > {itemFrases2} </h3> </Link>
			<Link to='/contacto' className={'links'}> <h3 onMouseEnter={() => setItemFrases3('Hablemos')} onMouseLeave={() => setItemFrases3('Germán:')} > {itemFrases3} </h3> </Link>
			<Link to='#apps' className={'links'}> <h3 onMouseEnter={() => setItemFrases4('Portafolio')} onMouseLeave={() => setItemFrases4('Programador;')} > {itemFrases4} </h3> </Link>
			<Link to='/glosario' className={'links'}> <h3 onMouseEnter={() => setItemFrases5('Glosario')} onMouseLeave={() => setItemFrases5('Cibernetista;')} > {itemFrases5} </h3> </Link>
			<Link to='/glosario' className={'links'}> <h3 onMouseEnter={() => setItemFrases6('Glosario')} onMouseLeave={() => setItemFrases6('& Humanista;')} > {itemFrases6} </h3> </Link>
		</>
	)
}


function Imagen({ url, alt, className }) {
	return (
		<>
			<img src={url} alt={alt} className={className} />
		</>
	)
}


function ContenedorFrases({ className, children }){
	return (
		<div className={ className }> {children} </div>
	)
}


function Secciones( {children, className} ){
	return (
		<section className={ className }> {children} </section>
	);
}


function Acerca({ className }){
	let textos = [
		'Acerca de',
		'Hola! Mi nombre es Germán. Desempeño mi trabajo ligado a las tecnologías de la información usando Javascript y su ecosistema. Escogí voluntariamente desempeñar los roles personales de programador, cibernetista & humanista.',
		'Parte de la razón de escoger estos roles personales reside en que creo importante entender los flujos de acontecimientos tanto de los que somos parte como de los que (aparentemente) no somos parte. Entender estos flujos, que por regla general son más grandes que nosotros y/o tienen mayor alcance que nuestro horizonte de entendimiento, puede volverse confuso rápidamente. Es como tratar de mirarse directamente la punta de la nariz o tratar de encapsular humo con las manos.',
		'Este sitio plasma un collage de preferencias personales que se actualizan en forma incremental. Espero que los lectores de estas líneas puedan encontrar algo de inspiración de los contenidos y puntos de vista presentados en este espacio de Internet.'
	]

	return (
		<article className={ 'article' }>
			<h3 className={ 'article_titulo' }> {textos[0]} </h3>
			<p className={ 'article_parrafo' }> {textos[1]} </p> 
			<p className={ 'article_parrafo' }> {textos[2]} </p>
			<p className={ 'article_parrafo' }> {textos[3]} </p>
		</article>
	)
}


function Blog(){
	let texto = [
		'Blog',
		'Bienvenidos! Estos posts son escritos de acuerdo a alguno de los 4 "lentes de percepción de la realidad" que dispongo: programación, cibernética, humanismo o todo eso junto a la vez. Es probable que opte también por publicar algunos posts traducidos del inglés que me parezcan interesantes de compartir.',
	]

	return (
		<article className={ 'article' }>
			<h3 className={ 'article_titulo' }> {texto[0]} </h3>
			<p className={ 'article_parrafo' }> {texto[1]} </p>
			<ListaPosts />
		</article>
	)
}

function ListaPosts(){
	return (
		<>
			{
				(posts.length === 0) ? <b className={'article_parrafo'} >Sin posts aun</b> : 
				(posts.map((item) => {
					return (
						<article key={ item.key }>
							<h3> {item.titulo} </h3>
							<p> Escrito por {item.autor} el día {item.fecha} </p>
							<p> {item.texto.substring(0, 70)} [...] </p>
							<Link to={ item.link }> <button name='button' value={ item.key } > Leer más </button> </Link>
						</article>
					)
				}))
			}
		</>
	)
}

function PostUnico(props){
	return (
		<>
			{
				posts
				.filter((datum) => {
					return (datum.link === `/${props.link}`)
				})

				.map((datumfiltrado) => {
					return (
						<div key={ datumfiltrado.key } className={'article'} >
								<p className={'article_titulo'}> { datumfiltrado.titulo } </p>
								<p className={'article_parrafo'}> { datumfiltrado.texto } </p>
						</div>
					)
				})
			}
		</>
	)
}


function Contacto(){
	return (
		<article className={ 'article' }>
			<h3 className={ 'article_titulo' }> Hablemos </h3>
			<p className={''} >LinkedIn /gnietto</p>
			<p className={''}>Github /gnietto</p>
			<p className={''}>Correo gnietto [en servidor de correo] pm.me</p>
		</article>
	)
}


function Glosario(){
	let filopol = [
		{
			concepto: 'Filosofía Política. ',
			acepcion: 'En su componente teórico, es el estudio de las preguntas fundamentales acerca del Estado, gobierno, política, libertad, justicia y la obligatoriedad de la legislación. En su componente de acción, es ética aplicada a un grupo de personas en la cual se discute cómo una sociedad debiera configurarse, cómo las personas debieran actuar en una sociedad, y a los derechos individuales (a la vida, a la libertad, a la propiedad, a la conformación de una vida feliz, a la autodefensa, a la libre expresión, etc.) que una persona debiera tener para beneficiarse de la vida en sociedad (en vez de sufrirla) (Philosophy Basics, 2008).',
			key: 1
		},
		{
			concepto: 'Ideología Política. ',
			acepcion: 'Conjunto de ideas, creencias, valores y opiniones que influencian (justifican, explican o cambian) los planes de acción de las políticas públicas de una comunidad política (Freeden, 2002).',
			key: 2
		},
		{
			concepto: 'Liberalismo. ',
			acepcion: 'Familia de filosofías/teorías políticas que crea una arquitectura de sociedad que otorga primacía a la protección de libertades básicas de las personas naturales en relación a sus gobiernos (Oxford, _). Basado en lo anterior, se construye una arquitectura económica que enfatiza la importancia de los mercados (intercambios voluntarios de bienes y servicios) y un rol limitado y específico de los gobiernos (Rutherford, 2002).',
			key: 3
		},
		{
			concepto: 'Neoliberalismo. ',
			acepcion: 'Concepto denostativo con múltiples acepciones sin relación entre sí: (1) en el contexto de mercadeo político de la década de 1930, concepto usado para distinguirse de quienes profesan el liberalismo para evitar asumir sus costos sociopolíticos (2) etapa en el desarrollo del liberalismo como doctrina, carente de todo sentido peyorativo, en el que se trata de destacar algunas contribuciones importantes en el mundo de las ideas, después de la teoría subjetiva del valor (3) concepto que repudia el acercamiento subrepticio de ideas del ordoliberalismo alemán con las del socialismo alemán (4) concepto usado por los defensores de la economía social de mercado para denotar a cualquier teoría de corte liberal que no profese las ideas de economía social de mercado (5) en un contexto religioso del siglo 19 donde los liberales (anticatólicos) se oponían a los creyentes (católicos), concepto usado por los ex-liberales con el fin de distinguirse de los liberales para evitar problemas (Ghersi, 2004).',
			key: 4
		},
		{
			concepto: 'Socialismo. ',
			acepcion: 'Filosofía/teoría política de óptica colectivista en donde la sociedad es propietaria del capital productivo (Rutherford, 2002) el cual es controlado por el Estado, otras instituciones públicas u organizaciones sin fines de lucro (Stanford, 2008); y éstas distribuyen el ingreso nacional para el beneficio de todos. Las variaciones de la organización de la economía serían (1) economía centralmente planificada o (2) economía que combina planificación central con mecanismos de mercado (socialismo de mercado) (Rutherford, 2002).',
			key: 4
		},
		{
			concepto: 'Comunismo. ',
			acepcion: 'Filosofía/teoría política de óptica colectivista que crea una arquitectura de sociedad con economía centralmente planificada, distribución de los ingresos de acuerdo a la necesidad, propiedad común (colectiva) del capital (Rutherford, 2002). En la práctica, muestra la uniformidad forzada del pensamiento individual en beneficio del pensamiento colectivo impuesto por sus gobiernos.',
			key: 5
		},
		{
			concepto: 'Comunitarismo. ',
			acepcion: 'Filosofía/teoría política de óptica colectivista que se opone a la doctrina del individualismo y la aceptación del concepto de hombre económico. Es considerada como una ideología sucesora del socialismo puesto que también se opone, como éste, al liberalismo/libertarianismo (Rutherford, 2002).',
			key: 6
		},
	];

	let econom = [
		{
			concepto: 'Capitalismo. ',
			acepcion: 'Arquitectura económica basada (1) en el fomento de mercados no regulados por el Estado para asignar recursos económicos (Rutherford, 2002), y (2) en la actividad comercial de empresas privadas y de personas naturales basada en la creación, inversión o compra/venta de activos financieros con el objetivo de generar ganancias (Collin, 2003; Stanford, 2008).',
			key: 1
		},
	];

	let conducta = [
		{
			concepto: 'x',
			acepcion: 'y',
			key: 1
		}
	];

	let bibliografia = [
		{
			ref: 'Collin, P. (2003). Dictionary of Economics, London: ACBlack',
			key: 1,
		},
		{
			ref: 'Freeden, M. (2001). Ideology: Political Aspects. En N. Smelser & P. Baltes (Eds.), International Encyclopedia of the Social & Behavioral Sciences. (1° Edición, pp. 7174-7177). Pergamon.',
			key: 2,
		},
		{
			ref: 'Ghersi, E. (2004) El mito del neoliberalismo. Extraido desde https://www.elcato.org/el-mito-del-neoliberalismo',
			key: 3,
		},
		{
			ref: 'Philosophy Basics (2008). Political Philosophy. Extraido desde https://www.philosophybasics.com/branch_political.html.',
			key: 4,
		},
		{
			ref: 'Rutherford, D. (2002). Routledge Dictionary of Economics. 2° ed. London: Routledge',		
			key: 5,
		},
		{
			ref: 'Stanford, J. (2008). Economics for Everyone: On-line Glossary of Terms & Concepts. Canadian Centre for Policy Alternatives.',
			key: 6,
		},
	];

	let preludio = 'Considerando que (1) estamos en tiempos de agitación sociopolítica desde el año 2019 a la fecha, (2) dicha agitación ha hecho emerger una confusión de conceptos y narrativas, (3) los medios de comunicación (TV, RRSS, radio) han facilitado y viralizado dicha confusión, (4) que esa mezcla de significados ha sido dolosamente provocada por el activismo político en los centros de alumnos en colegios/universidades y en las poblaciones; decidí contribuir a desenrredar la confusión de ese hilo narrativo sociopolítico publicando un glosario en mi sitio. Quizás evolucione hacia un tesauro. Espero que los lectores de estos bytes encuentren un aporte y una inspiración positiva para sí mismos y para el futuro del país.';

	let titulos = [
		'Filosofías (o Ideologías) Políticas',
		'Economía & Finanzas',
		'Conducta (o Comportamiento) Humano',
		'Bibliografía'
	];

	return (
		<article className={ 'article' }>
			<h3 className={ 'article_titulo' }> Glosario </h3>
			<p className={'article_parrafo'}> {preludio} </p>
			<h3> {titulos[0]} </h3>
				{filopol.map((dato) => {
					return (
						<div key={dato.key} className={'article_parrafo'} >
							<p> <b> {dato.concepto} </b> <span> {dato.acepcion} </span>	</p>					
						</div>
					)
				})}

			<h3> {titulos[1]} </h3>
				{econom.map((dato) => {
					return (
						<div key={dato.key} className={'article_parrafo'} >
							<p> <b> {dato.concepto} </b> <span> {dato.acepcion} </span>	</p>					
						</div>
					)
				})}

			<h3> {titulos[2]} </h3>
				{conducta.map((dato) => {
					return (
						<div key={dato.key} className={'article_parrafo'} >
							<p> <b> {dato.concepto} </b> <span> {dato.acepcion} </span>	</p>					
						</div>
					)
				})}
			<h3> {titulos[3]} </h3>
				{bibliografia.map((dato) => {
					return (
						<div key={dato.key} className={'article_parrafo'} >
							<p> <span> {dato.ref} </span>	</p>					
						</div>
					)
				})}
		</article>
	)
}


function App(){
	return (
		<main>
			<Secciones className={'flexbox'}>
				<ContenedorFrases className={'frases_centrar'}>
					<Frases className={'frases links'} />
				</ContenedorFrases>
				<Imagen url={peep} alt='adulto joven señalando hacia el menú' className={'dibujo'} />
			</Secciones>
		
			<Secciones className={'bg'}>
				<ContenedorGrid />
			</Secciones>
		</main>
	);
}

export {App, Acerca, Contacto, Blog, PostUnico, Glosario, NoExiste}