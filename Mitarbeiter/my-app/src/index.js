import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class FeedbackFormular extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {value: ''};
    	this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
  	}

  	handleChange(event) {
    	this.setState({value: event.target.value});
  	}

  handleSubmit(event) {
    	alert('A name was submitted: ' + this.state.value);
    	console.log([this.state.value])
    	event.preventDefault();
  	}

	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				{/* Name Input */}
				<p> Dein Name: <br />
				<input type="text" value={this.state.value} onChange={this.handleChange}/>
				</p>

				{/* Rating Input */}
				<p> Deine Stimmung: <br />
				<input type="number" min="1" max="5"/>
				</p>

				{/* Comment Input */}
				<p> Sonstiges: <br />
				<input type="text" placeholder="optional"/>
				</p>

				{/* Submit Button */}
				<p>
				<input type="submit" value="absenden"/>
				</p>
			</form>)
	}
}

ReactDOM.render(
	<div>
		<h1> Feedback </h1>
		<FeedbackFormular />
	</div>,
	document.getElementById('root')
);