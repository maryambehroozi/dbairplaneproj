import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../Css/Signup.css"

import heroImg from "../media/img4.png";
import { Typography } from "@mui/material";

function Signup() {
    const navigate = useNavigate();

    const handleNavigation = () => {
      navigate("/login");
    };
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [usernameError, setUsernameError] = React.useState(false);
    const [emailError, setEmailError] = React.useState(false);
    const [passwordError, setPasswordError] = React.useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = React.useState(false);
  
    const handleClickShowPassword = () => {
      setShowPassword(!showPassword);
    };
  
    const handleClickShowConfirmPassword = () => {
      setShowConfirmPassword(!showConfirmPassword);
    };
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
      setUsernameError(
        !/^[a-zA-Z]{6,10}$/.test(event.target.value)
      );
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
      setEmailError(
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(event.target.value)
      );
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
      setPasswordError(
        !/^[a-zA-Z0-9]{6,10}$/.test(event.target.value)
      );
    };
  
    const handleConfirmPasswordChange = (event) => {
      setConfirmPassword(event.target.value);
      setConfirmPasswordError(event.target.value !== password);
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
      <Box sx={{ display: "flex", flexDirection: "column", flexWrap: "wrap" , marginLeft:'60%', marginTop:'-40%', color:'#000336',marginBottom:'10%'}}>
        <Typography sx={{ marginBottom:'1%', marginLeft:'2%' }}> Sign Up </Typography>
          <TextField
            label="Username"
            id="outlined-username"
            sx={{ m: 1, width: "25ch" }}
            value={username}
            onChange={handleUsernameChange}
            error={usernameError}
            helperText={
              usernameError
                ? "Username must be between 6 and 10 characters long and only contain alphabetic characters"
                : ""
            }
          />
          <TextField
            label="Email"
            id="outlined-email"
            sx={{ m: 1, width: "25ch" }}
            value={email}
            onChange={handleEmailChange}
            error={emailError}
            helperText={emailError ? "Invalid email address" : ""}
          />
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              error={passwordError}
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
            <FormHelperText error={passwordError}>
              {passwordError
                ? "Password must be between 6 and 10 characters long and contain only alphanumeric characters"
                : ""}
            </FormHelperText>
          </FormControl>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-confirm-password">
              Confirm Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-confirm-password"
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              error={confirmPasswordError}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowConfirmPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Confirm Password"
            />
            <FormHelperText error={confirmPasswordError}>
              {confirmPasswordError ? "Passwords do not match" : ""}
            </FormHelperText>
          </FormControl>
          <Button
      variant="contained"
      style={{ backgroundColor: "#000336", color: "#fff" , width:'35%' , borderRadius:15, marginLeft:'2%',marginTop:'5%',marginBottom:'3%',  boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.6), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)" }}
      onClick={handleNavigation}
    >
      Submit
    </Button>
    <Typography>
      Already have an account?{" "}
      <Link to="/login">
        Login
      </Link>
    </Typography>


      </Box>

      </div>
    );
  }

export default Signup;
