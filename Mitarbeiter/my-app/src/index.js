import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom'
import { Button, TextField, Slider } from "@material-ui/core";
import './index.css';
import Leiter from './leiter.js'
var bodyParser = require("body-parser");

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
    	event.preventDefault();	
		this.callAPIForSave();	
  	}
	
	callAPI() {
		fetch("http://localhost:2999/testAPI")
			.then(res => res.text())
			.then(res => this.setState({ apiResponse: res }))
			.catch(err => err);
		if (this.state.apiResponse === ""){
			this.state={value: "API not working!"};
		}
		console.log(">API Connected<");
	}
	
	callAPIForSave() {
		fetch("http://localhost:2999/testAPI/SaveFormPost", {
			method: "POST",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: this.name.value,
				rate: this.rate.value,
				comment: this.comment.value,
			}),
		})
		}

	UNSAFE_componentWillMount() {
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
				<TextField type="number" inputProps={{ min: "1", max: "5", step: "1" }} defaultValue={this.rate.value} onChange={this.handleRateChange} variant="outlined" label="Rating"/>
				{/*<Slider color="secondary" width={200} defaultValue={30} aria-labelledby="discrete-slider" valueLabelDisplay="auto" step={1} min={1} max={5} onChange={this.handleRateChange}/>*/}
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
      	</Switch>
    </div>
  </Router>
)

ReactDOM.render([
	routing,
	],
	document.getElementById('root')
);

export function callAPIForDelete() {
	fetch("http://localhost:2999/testAPI/Delete")
		.then(res => res.text())
		.then(res => this.setState({ apiResponse: res }))
		.catch(err => err);
}

export default FeedbackFormular