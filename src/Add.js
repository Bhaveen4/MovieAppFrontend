import { Edit } from "@mui/icons-material";
import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import useForm from "./FormLogic";
import { useLocation, useNavigate } from "react-router-dom";

const Add = () => {
  const location = useLocation();
  const { value, isEdit } = location.state;

  let navigate = useNavigate();

  const [movie, setMovie] = useForm(
    value
      ? {
          _id: value._id,
          mName: value.mName,
          mActor: value.mActor,
          mActress: value.mActress,
          mDirector: value.mDirector,
          mRelYear: value.mRelYear,
          mCam: value.mCam,
          mProducer: value.mProducer,
          mLang: value.mLang,
        }
      : {
          mName: "",
          mActor: "",
          mActress: "",
          mDirector: "",
          mRelYear: 0,
          mCam: "",
          mProducer: "",
          mLang: "",
        }
  );

  const addMovie = () => {
    axios.post("http://localhost:3002/create", movie).then((response) => {
      console.log(response.data);
      navigate("/");
    });
  };

  const editMovie = () => {
    console.log("movie", movie);
    axios.post("http://localhost:3002/update", movie).then((response) => {
      console.log(response.data);
      navigate("/");
    });
  };

  return (
    <div style={{marginLeft:"5vw",marginRight:"5vw"}}>
      <Typography style={{ color: "red", marginTop:"20px" }} variant="h3">
        {isEdit ? "Edit Movie" : "Add Movie"}
      </Typography>
      <TextField
        className="text"
        InputLabelProps={{
          style: { color: '#fff' },
        }}
        name="mName"
        value={movie.mName}
        onChange={setMovie}
        variant="outlined"
        label="Movie Name"
        fullWidth
        margin="normal"
      />
      <TextField
        className="text"
        InputLabelProps={{
          style: { color: '#fff' },
        }}
        name="mActor"
        value={movie.mActor}
        onChange={setMovie}
        variant="outlined"
        label="Actor Name"
        fullWidth
        margin="normal"
      />
      <TextField
        className="text"
        InputLabelProps={{
          style: { color: '#fff' },
        }}
        name="mActress"
        value={movie.mActress}
        onChange={setMovie}
        variant="outlined"
        label="Actress Name"
        fullWidth
        margin="normal"
      />
      <TextField
        className="text"
        InputLabelProps={{
          style: { color: '#fff' },
        }}
        name="mDirector"
        value={movie.mDirector}
        onChange={setMovie}
        variant="outlined"
        label="Director Name"
        fullWidth
        margin="normal"
      />
      <TextField
        className="text"
        InputLabelProps={{
          style: { color: '#fff' },
        }}
        name="mRelYear"
        value={movie.mRelYear}
        onChange={setMovie}
        variant="outlined"
        label="Released Year "
        fullWidth
        margin="normal"
      />
      <TextField
        className="text"
        InputLabelProps={{
          style: { color: '#fff' },
        }}
        name="mCam"
        value={movie.mCam}
        onChange={setMovie}
        variant="outlined"
        label="Camera "
        fullWidth
        margin="normal"
      />
      <TextField
        className="text"
        InputLabelProps={{
          style: { color: '#fff' },
        }}
        name="mProducer"
        value={movie.mProducer}
        onChange={setMovie}
        variant="outlined"
        label="Producer Name "
        fullWidth
        margin="normal"
      />
      <TextField
        className="text"
        InputLabelProps={{
          style: { color: '#fff' },
        }}
        name="mLang"
        value={movie.mLang}
        onChange={setMovie}
        variant="outlined"
        label="Language "
        fullWidth
        margin="normal"
      />
      <Button
        onClick={isEdit ? editMovie : addMovie}
        style={{ maxHeight: "30px", minWidth: "30px", minHeight: "30px", marginTop:"10px", marginBottom:"50px", paddingTop:"20px",paddingBottom:"20px" }}
        variant="contained"
        color="error"
        fullWidth
      >
        {isEdit ? "Edit" : "Add"}
      </Button>
    </div>
  );
};
export default Add;
