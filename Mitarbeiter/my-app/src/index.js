import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom'
import { Button, TextField } from "@material-ui/core";
import './index.css';
import Erklaerung from './erklaerung.js'
import Leiter from './leiter.js'

class FeedbackFormular extends React.Component {
	constructor(props) {
		super(props);
		this.state = { apiResponse: "" };
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
	    const file = new Blob(["(SurveyIDPlaceholder)|",this.name.value,"|", this.rate.value,"|", this.comment.value], {type: 'text/plain'});
	    element.href = URL.createObjectURL(file);
	    element.download = [this.name.value,".txt"];
	    document.body.appendChild(element); // Required for this to work in FireFox
	    element.click();			
  	}
	
	callAPI() {
		fetch("http://localhost:2999/testAPI")
			.then(res => res.text())
			.then(res => this.setState({ apiResponse: res }))
			.catch(err => err);
	}
	
	componentWillMount() {
		this.callAPI();
	}

	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<div><h1>Feedback - Mitabeiter</h1></div>
				{/* Name Input */}
				<p> Dein Name: <br /><br />
				<TextField type="text" defaultValue={this.name.value} onChange={this.handleNameChange} variant="outlined" label="Name"/>
				</p>

				{/* Rating Input */}
				<p> Deine Stimmung: <br /><br />
				<TextField type="number" min="1" max="5" defaultValue={this.rate.value} onChange={this.handleRateChange} variant="outlined" label="Min: 1 | Max: 5"/>
				</p>

				{/* Comment Input */}
				<p> Sonstiges: <br /><br />
				<TextField type="text" placeholder="optional" defaultValue={this.comment.value} onChange={this.handleCommentChange} variant="outlined" label="optional"/>
				</p>

				{/* Submit Button */}
				<p>
				<Button type="submit" value="absenden" variant="contained" color="Secondary"> Absenden </Button>
				</p>
				<p className="App-intro"><small>{this.state.apiResponse}</small></p>
			</form>
		)
	}
}

const routing = (
  <Router>
    <div><nav>
      	<p><Link to="/"><Button variant="contained" color="Secondary">Mitabeiter Voting</Button></Link> &nbsp;
      	<Link to="/leiter.js"><Button variant="contained" color="Secondary">Projektleiter Menü</Button></Link> &nbsp;  
		{/*<Link to="/erklaerung.js"><Button variant="contained" color="Secondary">Einführung</Button></Link>*/}
		</p> </nav>
		<Switch>
      	<Route exact path="/" component={FeedbackFormular} />
      	<Route exact path="/leiter.js"> <Leiter /> </Route>
      	<Route exact path="/erklaerung.js"> <Erklaerung /> </Route> 
      	</Switch>
    </div>
  </Router>
)

ReactDOM.render([
	routing],
	document.getElementById('root')
);

export default FeedbackFormular