import React from 'react';
import './index.css';
import { Button } from '@material-ui/core';

export default class Leiter extends React.Component {
	callAPIForDelete() {
		fetch("http://localhost:2999/testAPI/Delete", {
			method: "POST",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				message: "Result deletion request"
			}),
		});
		setTimeout(function(){
			alert("Die Datei wurde gelöscht.");	
		}, 500);
	}
	callAPIForOpening = () => {
		fetch('http://localhost:2999/testAPI/ShowData')
			.then(response => {
				response.blob().then(blob => {
					let url = window.URL.createObjectURL(blob);
					let a = document.createElement('a');
					a.href = url;
					a.download = "Mitarbeiter_Feedback.txt";
					a.click();
				});
			})
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
