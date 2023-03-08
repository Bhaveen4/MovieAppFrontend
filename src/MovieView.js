import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import {Typography} from '@mui/material';


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
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
 
const MovieView = () => {

  var [movie, setMovie] = useState([]);

  useEffect(() => {
      fetchMovie();
  },[]);

  const fetchMovie = () => {
    axios.get("http://localhost:3002/view")
      .then((response)=> {
        console.log(response.data)
        setMovie(movie = response.data);
      })
  }

  const deleteMovie = (id) => {
   const data = {"_id": id}
   axios.post("http://localhost:3002/delete", data)
   .then((response)=> {
    console.log(response.data)
     alert("Successfully Deleted!!");
     fetchMovie();

   })

  }

  return (
    <div style={{marginLeft:"5vw",marginRight:"5vw"}} >
      <Typography  style={{color:"red", marginTop:"20px"}} variant="h3">Movie List</Typography>
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
            <StyledTableCell align="right"> </StyledTableCell>
            <StyledTableCell align="right"> </StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {movie.map((value,index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">{value.mName}</StyledTableCell>
              <StyledTableCell align="right">{value.mActor}</StyledTableCell>
              <StyledTableCell align="right">{value.mActress}</StyledTableCell>
              <StyledTableCell align="right">{value.mDirector}</StyledTableCell>
              <StyledTableCell align="right">{value.mRelYear}</StyledTableCell>
              <StyledTableCell align="right">{value.mCam }</StyledTableCell>
              <StyledTableCell align="right">{value.mProducer  }</StyledTableCell>
              <StyledTableCell align="right">{value.mLang  }</StyledTableCell>
              <StyledTableCell align="right"><Button onClick={()=>{ deleteMovie(value._id) }}  variant='contained' color='error' >Delete</Button></StyledTableCell>
              <StyledTableCell align="right"><Button variant='contained' color='error'  > <Link style={{textDecoration:"none", color:"white"}} to='/create' state = {{value:value,isEdit:true}} >Edit</Link> </Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default MovieView
