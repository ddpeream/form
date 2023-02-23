import { useContext } from "react";
import { FormContext } from "../common/context/formContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Loading from "../common/loading/loading";
import { ContainerLoading } from "./table.styled";

import TablePagination from '@mui/material/TablePagination';
import { options } from "./objects/options-selected";
import Error from "../common/error/error";

export function Tabla() {
    
  const { forms, loading, handleChangePage, handleChangeRowsPerPage, rowsPerPage, page, error } = useContext(FormContext);

  if(loading){
    return (
      <ContainerLoading>
        <Loading />
      </ContainerLoading>
    )
  }

  if(error) {
    return <Error/>
  }

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
          {forms
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row: any, consecutivo: number) => {
            return(
            <TableRow
            key={consecutivo+1}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{consecutivo + 1}</TableCell>
              <TableCell align="center">{row.Valor}</TableCell>
              <TableCell align="center">{options[row.idItemSelected-1].description}</TableCell>
              <TableCell align="center">{row.TMR}</TableCell>
            </TableRow>
          )})}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={forms.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}
