import React from 'react';
import './index.css';
import { Button } from '@material-ui/core';

export default class Leiter extends React.Component {
	callAPIForDelete(event) {
		fetch("http://localhost:2999/testAPI/Delete")
			.then(res => res.text())
			.then(res => this.setState({ apiResponse: res }))
			.catch(err => err);
	}
	callAPIForOpening(event) {
		fetch("http://localhost:2999/testAPI/ShowData")
			.then(res => this.res)
			.catch(err => err);
		
	}
	render(){
		return(
			<React.Fragment>
			<div><h1>Projektleiter Menü</h1></div>
			<div><Button variant="outlined" color="Secondary" onClick={this.callAPIForOpening}> Feedback Datei Herunterladen </Button> &nbsp;
			<Button color="Secondary" onClick={this.callAPIForDelete}> Feedback Datei Löschen </Button></div>
			</React.Fragment>
		)
	}
}
