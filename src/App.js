import React from 'react';

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
			"descripcion": 'Tributo póstumo que resalta la notable producción científica del destacado biólogo chileno',
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
	let frases = [
		{
			id: 1,
			str: 'Hola',
			str2: ''
		},
		{
			id: 2,
			str: 'soy',
			str2: ''
		},
		{
			id: 3,
			str: 'gnietto',
			str2: ''
		},
		{
			id: 4,
			str: 'programador, cibernetista aficionado & humanista',
			str2: ''
		}
	];

	let css = {
		fontFamily: 'Ovo',
		fontSize: '2.5rem',
		color: '#ffa',
		padding: 0,
		margin: 0,
	};

	return (
		<>
			{frases.map((item) => {
				return (
					<h3 style={ css } key={item.id}> {item.str} </h3>
				);
			})}
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

export default App;