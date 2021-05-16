import React, { useState } from 'react';
import { Link } from '@reach/router';
import posts from './posts';
import './App.css';

function NoExiste(){
		let contenido = {
		maxWidth: '600px',
		margin: '0 auto',
		fontFamily: 'kepler-std-light',
		fontSize: '1.1875rem',
		lineHeight: 1.625,
		fontKerning: 'auto',
	};

	return (
		<b style={ contenido } > La página que ud. está buscando no existe </b>
	)
}

function ContenedorGrid({ children }){
	let css = {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
		gridAutoFlow: 'dense',
		gridGap: '.15rem .15rem',
		margin: '0 0',
	};

	let card = {
		backgroundColor: 'rgba(8, 226, 110, 0.81)',
		padding: '1rem',
		textAlign: 'center', 
	};

	let titulo = {
		fontFamily: 'geomanist-regular',
		fontSize: '1.65rem',
		fontWeight: 400,
		textDecoration: 'none',
		color: '#000',
	};

	let descripcion = {
		fontFamily: 'kepler-std-light',
		fontSize: '1.1875rem',
		lineHeight: 1.1,
	};

	let listaApps = [    
		{
			"app": 'Integración Webpay',
			"url": '#',
			"descripcion": 'Integración con Webpay usando Nodejs SDK (pendiente)',
		},
				{
			"app": 'App con portal privado',
			"url": '#',
			"descripcion": 'App con portal privado para usuarios registrados levantado con Reactjs + Firebase (pendiente)',
		},
				{
			"app": 'Clon LinkedIn',
			"url": '#',
			"descripcion": 'Clon de LinkedIn levantado con Reactjs + Firebase (pendiente)',      
		},
		{
			"app": 'The Cybernetist',
			"url": 'https://thecybernetist.herokuapp.com',
			"descripcion": 'Copia de blog personal levantado con Nodejs/Stylus/Pug',
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
			"app": 'Documentación Técnica Redux',
			"url": 'https://gnietto.github.io/resumenredux',
			"descripcion": 'Resumen de la documentación técnica de la librería Redux',
		},
		{
			"app": 'Tuba Landing Page',
			"url": 'https://gnietto.github.io/tubalanding',
			"descripcion": 'Página de aterrizaje experimental',
		},
		{
			"app": 'Horóscopo',
			"url": 'https://gnietto.github.io/horoscopo',
			"descripcion": 'Horóscopo basado en formularios HTML',
		}
	];

	return (
		<div style={css} id='apps'>			
			{          
				listaApps.map((app, index) => {
					return (              
						<div key={index} style={card}>
							<a href={app.url}  style={titulo} target='_blank' rel='noopener noreferrer'> {app.app} </a>
							<p style ={descripcion}> {app.descripcion} </p>
						</div>
					)
				})
			}
		</div>
	)
}

function Frases(){
	let [itemFrases1, setItemFrases1] = useState('Hola,')
	let [itemFrases2, setItemFrases2] = useState('Soy')
	let [itemFrases3, setItemFrases3] = useState('Germán:')
	let [itemFrases4, setItemFrases4] = useState('Programador & Desarrollador;')
	let [itemFrases5, setItemFrases5] = useState('Cibernetista & Humanista,')

	let css = {
		fontFamily: 'geomanist-regular',
		fontSize: '2.5rem',
		fontWeight: 400,		
		color: '#000',
		padding: 0,
		margin: 0,
	};

	return (
		<>
			<Link to='/acerca'> <h3 style={css} onMouseEnter={() => setItemFrases1('Acerca de')} onMouseLeave={() => setItemFrases1('Hola')} > {itemFrases1} </h3> </Link>
			<Link to='/blog'> <h3 style={css} onMouseEnter={() => setItemFrases2('Blog')} onMouseLeave={() => setItemFrases2('Yo soy')} > {itemFrases2} </h3> </Link>
			<Link to='/contacto'> <h3 style={css} onMouseEnter={() => setItemFrases3('Contacto')} onMouseLeave={() => setItemFrases3('Germán')} > {itemFrases3} </h3> </Link>
			<Link to='#apps'> <h3 style={css} onMouseEnter={() => setItemFrases4('Portafolio\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t')} onMouseLeave={() => setItemFrases4('Programador & Desarrollador;')} > {itemFrases4} </h3> </Link>
			<Link to='/glosario'> <h3 style={css} onMouseEnter={() => setItemFrases5('Glosario\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t')} onMouseLeave={() => setItemFrases5('Cibernetista & Humanista.')} > {itemFrases5} </h3> </Link>
		</>
	)
}

function ContenedorFrases({ children }){
	let centrar = {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-start',
		padding: '4rem 0 4rem 4rem',
	}

	return (
		<div style={centrar}> {children} </div>
	)
}

function Secciones( {children} ){
	let seccion = {
		backgroundColor: '#fff',
	};
	return (
		<section style={ seccion }> {children} </section>
	);
}


function Acerca(){
	let contenido = {
		maxWidth: '600px',
		margin: '0 auto',
		fontFamily: 'kepler-std-light',
		fontSize: '1.1875rem',
		lineHeight: 1.625,
		fontKerning: 'auto',
	}

	let titulo = {
		fontFamily: 'geomanist-regular',
		fontSize: '2.25rem',
		fontWeight: 400,
		textAlign: 'center',
		fontKerning: 'normal',
	}

	let parrafo = {
		margin: '0 0 2.36rem 0',
	}

	return (
		<article style={ contenido }>
			<h3 style={ titulo }>Acerca de</h3>
			<p style={ parrafo }>Hola! Mi nombre es Germán. Desempeño mi trabajo ligado a las tecnologías de la información usando Javascript y su ecosistema. Pronto sumaré Python y su ecosistema. Escogí voluntariamente desempeñar los roles personales de programador, cibernetista & humanista. </p> 
			<p style={ parrafo }>Como una breve declaración de principios, creo que es importante crear entidades (software, relaciones, textos, organizaciones, etc.) que sean basados en la verdad, útiles para los demás y útiles para uno mismo. A la vez creo que es importante entender los flujos de acontecimientos tanto de los que somos parte como de los que (aparentemente) no somos parte. Entender estos flujos, que por regla general son más grandes que nosotros y/o tienen mayor alcance que nuestro horizonte de entendimiento, puede volverse confuso rápidamente. Es como tratar de mirarse directamente la punta de la nariz o tratar de encapsular humo con las manos. </p>
			<p style={ parrafo }>Este portafolio plasma un collage de mis preferencias personales que se actualizan en forma incremental. Espero que los lectores de estas líneas puedan encontrar algo de inspiración de los contenidos de este espacio en Internet.</p>
		</article>
	)
}

function Blog(){
	let contenido = {
		maxWidth: '600px',
		margin: '0 auto',
		fontFamily: 'kepler-std-light',
		fontSize: '1.1875rem',
		lineHeight: 1.625,
		fontKerning: 'auto',
	}

	let titulo = {
		fontFamily: 'geomanist-regular',
		fontSize: '2.25rem',
		fontWeight: 400,
		textAlign: 'center',
		fontKerning: 'normal',
	}

	let parrafo = {
		margin: '0 0 2.36rem 0',
	}

	return (
		<article style={ contenido }>
			<h3 style={ titulo }> Blog </h3>
			<p style={ parrafo } >Bienvenidos a mis "lentes de percepción de la realidad". Estos posts son escritos de acuerdo a alguno de los 4 "lentes de percepción de la realidad" principales que dispongo: programación, cibernética, humanismo o todo eso junto a la vez. Probablemente opte por publicar algunos posts traducidos del inglés que me parezcan interesantes de compartir. </p>
			<ListaPosts />
		</article>
	)
}

function ListaPosts(){
	return (
		<>
			{
				(posts.length === 0) ? <b>Sin posts aun</b> : 
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
	let contenido = {
	maxWidth: '600px',
	margin: '0 auto',
	fontFamily: 'kepler-std-light',
	fontSize: '1.1875rem',
	lineHeight: 1.625,
	fontKerning: 'auto',
	}

	let titulo = {
		fontFamily: 'geomanist-regular',
		fontSize: '2.25rem',
		fontWeight: 400,
		textAlign: 'center',
		fontKerning: 'normal',
	}

	return (
		<>
			{
				posts
				.filter((datum) => {
					return (datum.link === `/${props.link}`)
				})

				.map((datumfiltrado) => {
					return (
						<div key={ datumfiltrado.key } >
								<p style={titulo}> { datumfiltrado.titulo } </p>
								<p style={contenido}> { datumfiltrado.texto } </p>
						</div>
					)
				})
			}
		</>
	)
}


function Contacto(){
	let contenido = {
		maxWidth: '600px',
		margin: '0 auto',
		fontFamily: 'kepler-std-light',
		fontSize: '1.1875rem',
		lineHeight: 1.625,
		fontKerning: 'auto',
	}

	let titulo = {
		fontFamily: 'geomanist-regular',
		fontSize: '2.25rem',
		fontWeight: 400,
		textAlign: 'center',
		fontKerning: 'normal',
	}

	return (
		<article style={ contenido }>
			<h3 style={ titulo }> Hablemos </h3>
			<p>LinkedIn /gnietto</p>
			<p>Github /gnietto</p>
			<p>Correo gnietto [en servidor de correo] pm.me</p>
		</article>
	)
}


function Glosario(){
	let datos = [
		{
			concepto: 'Capitalismo. ',
			acepcion: 'The economic system based on private property and private enterprise...',
			cita: '...oxford',
			key: 1
		},
		{
			concepto: 'Liberalismo. ',
			acepcion: 'family of political philosophies, and a set of associated institutions and policies, that give primacy to the protection of basic liberty...',
			cita: '...oxford',
			key: 2
		},
		{
			concepto: 'Neoliberalismo. ',
			acepcion: 'término con varios orígenes distintos. Uno primero parece encontrarse en algunos escritos de von Mises; uno segundo es el que le atribuye a la creación colectiva de un coloquio convocado por Walter Lippman la autoría del término; uno tercero es el que lo vincula a la llamada economía social de mercado; y uno cuarto, a la escuela liberal italiana de las entreguerras...',
			cita: '...oxford',
			key: 3
		},
		{
			concepto: 'Socialismo. ',
			acepcion: 'The idea that the economy\'s resources should be used in the interests of all its citizens, rather than allowing private...', 
			cita: '...oxford',
			key: 4
		},
		{
			concepto: 'Comunismo. ',
			acepcion: 'A theory of classless society with common ownership of property and wealth and centrally planned production and distribution based on ... (oxford)',
			cita: '...oxford',
			key: 5
		},
	];

	let contenido = {
		maxWidth: '600px',
		margin: '0 auto',
		fontFamily: 'kepler-std-light',
		fontSize: '1.1875rem',
		lineHeight: 1.625,
		fontKerning: 'auto',
	}

	let titulo = {
		fontFamily: 'geomanist-regular',
		fontSize: '2.25rem',
		fontWeight: 400,
		textAlign: 'center',
		fontKerning: 'normal',
	}

	return (
		<article style={ contenido }>
			<h3 style={ titulo }> Glosario </h3>
			{datos.map((dato) => {
				return (
					<div key={dato.key} >
						<p> <span> {dato.concepto} </span> <span> {dato.acepcion} </span>	</p>					
					</div>
				)
			})}
		</article>
	)
}


function App(){
	return (
		<>
			<Secciones>
				<ContenedorFrases>
					<Frases />
				</ContenedorFrases>
			</Secciones>
		
			<Secciones>
				<ContenedorGrid />
			</Secciones>
		</>
	);
}

export {App, Acerca, Contacto, Blog, PostUnico, Glosario, NoExiste}