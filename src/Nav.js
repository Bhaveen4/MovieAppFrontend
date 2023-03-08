import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import background from "./assets/background.png";

const Nav = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            height: "50vh",
            background: `url(${background}) no-repeat center center`,
            boxShadow: "inset 44px 93px 113px black",
            backgroundSize: "cover",
          }}
        >
          <Toolbar >
            
              
            
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize:'3rem',fontWeight:'bold',color:'red',display:'flex'}}>
              NETFLIX
            </Typography>
            <Button variant="contained" color="error" sx={{mr:"20px"}} >
              <Link style={{ textDecoration: "none", color:"white" }} to="/">
                Movies
              </Link>
            </Button>
            <Button variant="contained" color="error" sx={{mr:"20px"}}>
              <Link
                style={{ textDecoration: "none",color:"white" }}
                state={{ value: null, isEdit: false }}
                to="/create"
              >
                Add Movies
              </Link>
            </Button>
            <Button variant="contained" color="error" >
              <Link style={{ textDecoration: "none",color:"white" }} to="/search">
                {" "}
                Search Movies
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Nav;
