import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class NameForm extends React.Component {
	render() {
		return(
			<form>
				<p> Dein Name: <br />
				<input type="text"/>
				</p>
			</form>)
	}
}

class RatingsForm extends React.Component {
	render() {
		return(
			<form>
				<p> Deine Stimmung: <br />
				<input type="number" min="1" max="5"/>
				</p>
			</form>)
	}
}

console.log("Dies ist ein TestLog");

ReactDOM.render(
	<div>
		<NameForm />
		<RatingsForm />
	</div>,
	document.getElementById('root')
);