import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class FeedbackFormular extends React.Component {
	constructor(props) {
    	super(props);
    	this.name = {defaultValue: ' '};
    	this.rate = {defaultValue: ' '};
    	this.comment = {defaultValue: ' '};
    	this.handleNameChange = this.handleNameChange.bind(this);
    	this.handleRateChange = this.handleRateChange.bind(this);
    	this.handleCommentChange = this.handleCommentChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
    	}

  	handleNameChange(event) {
    	this.name = {value: event.target.value};
  	}
  	handleRateChange(event) {
    	this.rate = {value: event.target.value};
  	}
  	handleCommentChange(event) {
    	this.comment = {value: event.target.value};
  	}

 	handleSubmit(event) {
    	console.log([this.name.value, this.rate.value, this.comment.value]);
    	event.preventDefault();
    	/*Download Form Data*/
	    const element = document.createElement("a");
	    const file = new Blob(["a65ec6d5b78a573dae6e4b6be4491aa9||",this.name.value,"|", this.rate.value,"|", this.comment.value], {type: 'text/plain'});
	    element.href = URL.createObjectURL(file);
	    element.download = [this.name.value,".txt"];
	    document.body.appendChild(element); // Required for this to work in FireFox
	    element.click();
  	}


	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				{/* Name Input */}
				<p> Dein Name: <br />
				<input type="text" defaultValue={this.name.value} onChange={this.handleNameChange}/>
				</p>

				{/* Rating Input */}
				<p> Deine Stimmung: <br />
				<input type="number" min="1" max="5" defaultValue={this.rate.value} onChange={this.handleRateChange}/>
				</p>

				{/* Comment Input */}
				<p> Sonstiges: <br />
				<input type="text" placeholder="optional" defaultValue={this.comment.value} onChange={this.handleCommentChange}/>
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