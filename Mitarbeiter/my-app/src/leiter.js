import React from 'react';
import './index.css';
import { Button } from '@material-ui/core';

export default function Leiter (){
	return(
		<React.Fragment>
		<div><h1>Projektleiter Menü</h1></div>
		<div><Button variant="contained" color="Secondary"> Feedback Datei Herunterladen </Button> &nbsp;
		<Button variant="contained" color="Secondary"> Feedback Datei Löschen </Button></div>
		</React.Fragment>
	)
}