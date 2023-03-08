import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import useForm from "./FormLogic";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Search = () => {
  let [movie, setMovie] = useForm({ mName: "" });
  let [result, setresult] = useState([]);
  let [flag, setFlag] = useState(0);

  const searchMovie = () => {
    console.log("movie",movie)
    axios.post("http://localhost:3002/search",movie).then((response) => {
      console.log(response.data);
      setresult((result = response.data));
      if (flag === 0) {
        setFlag(1);
      }
    });
  };

  useEffect(() => {
    console.log("result", result);
    console.log("length", result.length);
  }, [result]);

  return (
    <div style={{marginLeft:"5vw",marginRight:"5vw"}} >
      <Typography  style={{color:"red", marginTop:"20px"}} variant="h3">Movie Search</Typography>
      <TextField
        className="text"
        name="mName"
        InputLabelProps={{
          style: { color: '#fff' },
        }}
        value={movie.mName}
        onChange={setMovie}
        variant="outlined"
        label="Movie Name"
        fullWidth
        margin="normal"
      />
      <Button style={{marginTop:"10px",marginBottom:"10px"}} onClick={searchMovie} variant="contained" color="error">
        Search
      </Button>

      {result.length !== 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Movie Name</StyledTableCell>
                <StyledTableCell align="right">Actor</StyledTableCell>
                <StyledTableCell align="right">Actress</StyledTableCell>
                <StyledTableCell align="right">Director</StyledTableCell>
                <StyledTableCell align="right"> Released year</StyledTableCell>
                <StyledTableCell align="right"> Camera</StyledTableCell>
                <StyledTableCell align="right"> Producer</StyledTableCell>
                <StyledTableCell align="right"> Language</StyledTableCell>
            
              </TableRow>
            </TableHead>
            <TableBody>
              {result.map((value, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {value.mName}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {value.mActor}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {value.mActress}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {value.mDirector}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {value.mRelYear}
                  </StyledTableCell>
                  <StyledTableCell align="right">{value.mCam}</StyledTableCell>
                  <StyledTableCell align="right">
                    {value.mProducer}
                  </StyledTableCell>
                  <StyledTableCell align="right">{value.mLang}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : flag === 0 ? null : (
        <p>No search result found</p>
      )}
    </div>
  );
};

export default Search;
