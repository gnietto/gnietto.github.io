import React from 'react';
//import './App.css';

function ContenedorGrid({ children }){
	let css = {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
		gridAutoFlow: 'dense',
		gridGap: '.2rem .2rem',
		margin: '0 0',
	};

	let card = {
		backgroundColor: 'rgba(8, 226, 110, 0.81)',
		padding: '1rem',
	};

	let celda = {
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
			"descripcion": 'Tienda en línea con integración API Webpay (Transbank)',      
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
			"app": 'FrutaKids',
			"url": 'https://gnietto.github.io/frutakids',
			"descripcion": 'Juego para niños que enseña la habilidad de clasificar frutas según su precio de venta',      
		}, 
		{
			"app": 'Emisor de Frases Célebres',
			"url": 'https://gnietto.github.io/frasescelebres',
			"descripcion": 'Generador de frases célebres acerca de programación, vida y más',
		},
		{
			"app": 'Tributo a Francisco Varela',
			"url": 'https://gnietto.github.io/tributovarela',
			"descripcion": 'Tributo póstumo que resalta el notable producción científica del destacado biólogo chileno',
		},
		{
			"app": 'Gráfico de Barras SVG',
			"url": 'https://gnietto.github.io/pibeeuu',
			"descripcion": 'Evolución del PIB de EEUU 1945-2015 levantado con la librería D3js',
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
			"app": 'Reductor URL',
			"url": 'https://reductorurl.herokuapp.com',
			"descripcion": 'Aplicación web que retorna una URL corta levantada en Nodejs y Mongo Atlas',
		},
		{
			"app": 'Documentación Técnica OpenSSH (wip)',
			"url": 'https://gnietto.github.io/resumen-ssh',
			"descripcion": 'Resumen de la documentación técnica de la librería OpenSSH',
		},
		{
			"app": 'Lemon Brass Landing Page (wip)',
			"url": 'https://gnietto.github.io/tuba-landing',
			"descripcion": 'Página de aterrizaje experimental',
		},
		{
			"app": 'Formulario del Futuro (wip)',
			"url": 'https://gnietto.github.io/encuestadelfuturo',
			"descripcion": 'Encuesta que ejercita las posibilidades básicas del uso de formularios en HTML5',
		},
	];

	{          
		listaApps.map((app, index) => {
			return (              
				<div key={index} className='celda card'>
					<a href={app.url}  className='titulo' target='_blank' rel='noopener noreferrer'> {app.app} </a>
					<p className ='descripcion'> {app.descripcion} </p>
				</div>
			)
		})
	}
}

function Frases(){
	let frases = ['Hola', 'soy', 'gnietto', 'cibernetista aficionado'];
	let css = {
		fontFamily: 'Ovo',
		fontSize: '5rem',
		color: '#333',
	};

	{frases.map((item, index) => {
		return (
			<h3 className={ css } key={index}> { item[index] } </h3>
		);
	})}
}

function Secciones( {children, estilo} ){
	let secc1 = {
		color: '#222',
		width: '100%',
		height: '100%',
	};

	let secc2 = {
		color: '#333',
		width: '100%',
		height: '100%',
	};
	return (
		<section className={ estilo }> {children} </section>
	);
}

function App(){
	return (
		<>
			<Secciones>      	
					<Frases />
			</Secciones>
		
			<Secciones>
				<ContenedorGrid />
			</Secciones>
		</>
	);
}

export default App;