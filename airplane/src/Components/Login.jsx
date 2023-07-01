import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import heroImg from "../media/img4.png";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";


function LoginForm() {
    const navigate = useNavigate();
    const handleNavigation = () => {
      navigate("/Reservation");
    };
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
        <Box sx={{ flex: "1.25" }}>
            <img
              src={heroImg}
              alt="heroImg"
              style={{ maxWidth: "40%", marginBottom: "2%", marginTop:-10 , marginLeft:"10%",  borderRadius: "5%"}}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", flexWrap: "wrap" , marginLeft:'60%', marginTop:'-30%', color:'#000336',marginBottom:'10%'}}>
        <Typography sx={{marginBottom:'5%', marginLeft:'2%'}}>Login </Typography>
      <TextField
        label="Email"
        variant="outlined"
        value={email}
        onChange={handleEmailChange}
        sx={{ m: 1, width: "25ch" }}
      />
      <FormControl variant="outlined" sx={{ m: 1, width: "25ch" }} >
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={handlePasswordChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <Button variant="contained"     onClick={handleNavigation} style={{ backgroundColor: "#000336", color: "#fff" , 
      width:'35%' , borderRadius:15, marginLeft:'2%',marginTop:'5%',marginBottom:'3%', 
       boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.6), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)" }}>Login</Button>
    </Box>
    </div>
  );
}

export default LoginForm;
