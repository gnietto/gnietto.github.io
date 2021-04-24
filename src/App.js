import React, { useState } from 'react';
import { Link } from '@reach/router';

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
		fontFamily: 'Ovo',
		fontSize: '1.5rem',
		textDecoration: 'none',
		color: '#333',
	};

	let descripcion = {
		fontFamily: 'Muli',
		fontSize: '1.1rem',
	};

	let listaApps = [    
		{
			"app": 'ECommerce + Webpay',
			"url": '#',
			"descripcion": 'Tienda en línea básica con integración Webpay (Transbank) en Reactjs & Nodejs',
		},
				{
			"app": 'Clon de Instagram',
			"url": '#',
			"descripcion": 'Clon de Instagram con backend Firebase',      
		},
				{
			"app": 'Clon de LinkedIn',
			"url": '#',
			"descripcion": 'Clon de LinkedIn con backend Mongo, Nodejs y Expressjs',      
		},
		{
			"app": 'The Cybernetist',
			"url": 'https://thecybernetist.herokuapp.com',
			"descripcion": 'Copia de blog personal levantado con Nodejs/Stylus/Pug',
		},
		{
			"app": 'Reductor URL',
			"url": 'https://reductorurl.herokuapp.com',
			"descripcion": 'Aplicación web que retorna una URL corta levantada en Nodejs y Mongo Atlas',
		},
		{
			"app": 'FrutaKids',
			"url": 'https://gnietto.github.io/frutakids',
			"descripcion": 'Juego para niños que enseña la habilidad de clasificar frutas según su precio de venta',      
		}, 
		{
			"app": 'Histograma PIB EEUU',
			"url": 'https://gnietto.github.io/pibeeuu',
			"descripcion": 'Visualización de datos de la evolución del PIB de EEUU en el período 1945-2015 levantado con la librería D3js',
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
			"url": 'https://gnietto.github.io/previsualizador-markdown',
			"descripcion": 'Previsualización de texto desde Markdown a HTML',
		},
		{
			"app": 'Documentación Técnica OpenSSH',
			"url": 'https://gnietto.github.io/resumen-ssh',
			"descripcion": 'Resumen de la documentación técnica de la librería OpenSSH',
		},
		{
			"app": 'LemonBrass Landing Page',
			"url": 'https://gnietto.github.io/tuba-landing',
			"descripcion": 'Página de aterrizaje experimental',
		},
		{
			"app": 'Encuesta del Futuro',
			"url": 'https://gnietto.github.io/encuestadelfuturo',
			"descripcion": 'Encuesta que ejercita las posibilidades básicas del uso de formularios en HTML5',
		},
		{
			"app": 'TicTacToe',
			"url": '#',
			"descripcion": 'Juego del gato, conocido como TicTacToe en países angloparlantes',
		},
	];

	return (
		<div style={css}>			
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
	let [itemFrases1, setItemFrases1] = useState('Hola')
	let [itemFrases2, setItemFrases2] = useState('Yo soy')
	let [itemFrases3, setItemFrases3] = useState('gnietto')
	let [itemFrases4, setItemFrases4] = useState('Programador, ')
	let [itemFrases5, setItemFrases5] = useState('...cibernetista aficionado,')
	let [itemFrases6, setItemFrases6] = useState('...& humanista')

	let css = {
		fontFamily: 'Ovo',
		fontSize: '2.5rem',
		color: '#ffa',
		padding: 0,
		margin: 0,
	};

	return (
		<>
			<Link to='/acerca'> <h3 style={css} onMouseEnter={() => setItemFrases1('Acerca de')} onMouseLeave={() => setItemFrases1('Hola')} > {itemFrases1} </h3> </Link>
			<Link to='/'> <h3 style={css} onMouseEnter={() => setItemFrases2('Portafolio')} onMouseLeave={() => setItemFrases2('Yo soy')} > {itemFrases2} </h3> </Link>
			<Link to='/contacto'> <h3 style={css} onMouseEnter={() => setItemFrases3('Contacto')} onMouseLeave={() => setItemFrases3('gnietto')} > {itemFrases3} </h3> </Link>
			<Link to='/blog'> <h3 style={css} onMouseEnter={() => setItemFrases4('Blog')} onMouseLeave={() => setItemFrases4('Programador,')} > {itemFrases4} </h3> </Link>
			<Link to='/blog'> <h3 style={css} onMouseEnter={() => setItemFrases5('Blog')} onMouseLeave={() => setItemFrases5('...cibernetista aficionado')} > {itemFrases5} </h3> </Link>
			<Link to='/blog'> <h3 style={css} onMouseEnter={() => setItemFrases6('Blog')} onMouseLeave={() => setItemFrases6('...& humanista')} > {itemFrases6} </h3> </Link>
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
		backgroundColor: '#222',
	};
	return (
		<section style={ seccion }> {children} </section>
	);
}

function Acerca(){
	return (<p>acerca de</p>)
}

function Blog(){
	return (<p>blog</p>)

}

function Contacto(){
 return (<p>contacto</p>)
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

export {App, Acerca, Contacto, Blog}