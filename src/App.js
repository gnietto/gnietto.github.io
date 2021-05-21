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
			"descripcion": 'Clon de Whatsapp levantado con Reactjs + Firebase (pendiente)',
		},
		{
			"app": 'Maps',
			"url": '#',
			"descripcion": 'Clon de Google Maps levantado con Reactjs + Firebase (pendiente)',
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
			<Link to='/contacto' className={'links'}> <h3 onMouseEnter={() => setItemFrases3('Contacto')} onMouseLeave={() => setItemFrases3('Germán:')} > {itemFrases3} </h3> </Link>
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
		'Creo que es importante entender los flujos de acontecimientos tanto de los que somos parte como de los que (aparentemente) no somos parte. Entender estos flujos, que por regla general son más grandes que nosotros y/o tienen mayor alcance que nuestro horizonte de entendimiento, puede volverse confuso rápidamente. Es como tratar de mirarse directamente la punta de la nariz o tratar de encapsular humo con las manos.',
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
		'Bienvenidos! Estos posts son escritos de acuerdo a alguno de los 4 "lentes de percepción de la realidad" que dispongo: programación, cibernética, humanismo o todo eso junto a la vez. Sumado a eso, es probable que opte por publicar algunos posts traducidos del inglés que me parezcan interesantes de compartir.',
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
	let datos = [
		{
			concepto: 'Capitalismo. ',
			acepcion: 'The economic system based on private property and private enterprise...',
			cita: '...oxford',
			key: 1
		},
		{
			concepto: 'Liberalismo. ',
			acepcion: 'family of political philosophies, and a set of associated institutions and policies, that give primacy to the protection of basic liberty... El concepto de neoliberalismo puede rastrearse a varios orígenes distintos. Uno primero parece encontrarse en algunos escritos de von Mises; uno segundo es el que le atribuye a la creación colectiva de un coloquio convocado por Walter Lippman la autoría del término; uno tercero es el que lo vincula a la llamada economía social de mercado; y uno cuarto, a la escuela liberal italiana de las entreguerras...',
			cita: '...oxford',
			key: 2
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

	return (
		<article className={ 'article' }>
			<h3 className={ 'article_titulo' }> Glosario </h3>
			<p className={'article_parrafo'}> Considerando los tiempos de agitación sociopolítica que vivimos desde el año 2019 a la fecha, y considerando la confusión de conceptos y narrativas que los aprendizajes sociales previos han facilitado, y que los medios de comunicación han viralizado, decidí desenrredar el hilo narrativo sociopolítico publicando un glosario en mi sitio. Espero que sea de provecho para mis lectores. </p>
				{datos.map((dato) => {
					return (
						<div key={dato.key} className={'article_parrafo'} >
							<p> <b> {dato.concepto} </b> <span> {dato.acepcion} </span>	</p>					
						</div>
					)
				})}
		</article>
	)
}


function App(){
	return (
		<>
			<Secciones className={'flexbox'}>
				<ContenedorFrases className={'frases_centrar'}>
					<Frases className={'frases links'} />
				</ContenedorFrases>
				<Imagen url={peep} alt='adulto joven señalando hacia el menú' className={'dibujo'} />
			</Secciones>
		
			<Secciones>
				<ContenedorGrid />
			</Secciones>
		</>
	);
}

export {App, Acerca, Contacto, Blog, PostUnico, Glosario, NoExiste}