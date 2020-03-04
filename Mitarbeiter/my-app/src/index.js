import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import Leiter from './leiter.js'
import Erklaerung from './erklaerung.js'

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
				<div><h1>Feedback - Mitabeiter</h1></div>
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
				<input type="submit" value="absenden" style={ButtonStyle1}/>
				</p>
			</form>)
	}
}
const ButtonStyle1 = {
	height: "30px",
	width: "150px",
	color: "blue",
	fontsize: "50px"
};

const routing = (
  <Router>
    <div>
      	<p><Link to="/"><button style={ButtonStyle1}>Mitabeiter Voting</button></Link></p>
      	<p><Link to="/leiter.js"><button style={ButtonStyle1}>Projektleiter Übersicht</button></Link></p>
		<p><Link to="/erklaerung.js"><button style={ButtonStyle1}>Einführung</button></Link></p>
      	<Route exact path="/" component={FeedbackFormular} />
      	<Route path="/leiter" component={Leiter} />
      	<Route path="/erklaerung" component={Erklaerung} />
    </div>
  </Router>
)

ReactDOM.render([
	routing],
	document.getElementById('root')
);

export default FeedbackFormular