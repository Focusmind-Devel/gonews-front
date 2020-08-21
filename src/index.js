import React from 'react';
// import ReactDOM from 'react-dom';
// import { render } from 'react-snapshot';
import { hydrate, render } from 'react-dom';
import './index.css';
import NotasState from './context/notas/NotasState';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
	hydrate(
		<Router>
			<NotasState>
				<App />
			</NotasState>
		</Router>,
		rootElement
	);
} else {
	render(
		<Router>
			<NotasState>
				<App />
			</NotasState>
		</Router>,
		rootElement
	);
}
/*
// ReactDOM.render(
render(
	<Router>
		<NotasState>
			<App />
		</NotasState>
	</Router>,
	document.getElementById('root')
);
// );
*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
