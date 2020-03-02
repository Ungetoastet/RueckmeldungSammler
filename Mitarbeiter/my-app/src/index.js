import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class FeedbackFormular extends React.Component {
	render() {
		return(
			<form>
				<p> Dein Name: <br />
				<input type="text" />
				</p>
				<p> Deine Stimmung: <br />
				<input type="number" min="1" max="5"/>
				</p>
				<p> Sonstiges: <br />
				<input type="text" />
				</p>
				<p>
				<input type="submit" value="absenden"/>
				</p>
			</form>)
	}
}

console.log("Dies ist ein TestLog");

ReactDOM.render(
	<div>
		<h1> Feedback </h1>
		<FeedbackFormular />
	</div>,
	document.getElementById('root')
);