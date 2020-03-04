import React from 'react';
import './index.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, rating, comment) {
  return { name, rating, comment };
}

const rows = [
  createData('Arjan', 5, "Hi!"),
  createData('Ifan', 5, "Fantastisch!"),
  createData('Iona', 3, "Wo bin ich?"),
  createData('Andre', 1, "Müde"),
  createData('Shereen', 4, "Yay!")
];

export default function Leiter (){
	const classes = useStyles();
	return(
		<React.Fragment>
		<div><h1>Projektleiter - Übersicht</h1></div>
		<div>
		<TableContainer component={Paper}>
	      <Table className={classes.table} aria-label="simple table">
	        <TableHead>
	          <TableRow>
	            <TableCell>Stimmungsbild deiner Mitarbeiter:</TableCell>
	            <TableCell align="right">Stimmung</TableCell>
	            <TableCell align="right">Kommentar</TableCell>
	          </TableRow>
	        </TableHead>
	        <TableBody>
	          {rows.map(row => (
	            <TableRow key={row.name}>
	              <TableCell component="th" scope="row">
	                {row.name}
	              </TableCell>
	              <TableCell align="right">{row.rating}</TableCell>
	              <TableCell align="right">{row.comment}</TableCell>
	            </TableRow>
	          ))}
	        </TableBody>
	      </Table>
	    </TableContainer>
	    </div>
		</React.Fragment>
	)
}