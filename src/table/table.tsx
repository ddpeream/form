import { useContext } from "react";
import { FormContext } from "../common/formContext";
// import { TableContainer } from "./table.styled"
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// const found = array1.find(element => element > 10);
export function TableBas() {

  const options = [  
    "selected 1", 
    "selected 2", 
    "selected 3"
  ];
  
  const { forms } = useContext(FormContext);
  console.log("form udate", forms);
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Consecutivo</TableCell>
            <TableCell align="center">Valor</TableCell>
            <TableCell align="center">
              Descripción Del Campo Seleccionado
            </TableCell>
            <TableCell align="center">TRM</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {forms.map((row: any, consecutivo: number) => (
            <TableRow
            key={consecutivo+1}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{consecutivo + 1}</TableCell>
              <TableCell align="center">{row.Valor}</TableCell>
              <TableCell align="center">{options[row.idItemSelected-1]}</TableCell>
              <TableCell align="center">{row.TMR}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
