import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import heroImg from "../media/img4.png";
import { Typography } from "@mui/material";

function FlightReservationForm() {
  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");
  const [departingDate, setDepartingDate] = React.useState("");
  const [returningDate, setReturningDate] = React.useState("");
  const [passengers, setPassengers] = React.useState(1);

  const handleFromChange = (event) => {
    setFrom(event.target.value);
  };

  const handleToChange = (event) => {
    setTo(event.target.value);
  };

  const handleDepartingDateChange = (event) => {
    setDepartingDate(event.target.value);
  };

  const handleReturningDateChange = (event) => {
    setReturningDate(event.target.value);
  };

  const handlePassengersChange = (event) => {
    setPassengers(event.target.value);
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
  <Box sx={{ display: "flex", flexDirection: "column", flexWrap: "wrap" , marginLeft:'60%', marginTop:'-37%', color:'#000336',marginBottom:'10%'}}>
<Typography sx={{marginBottom:'1%', marginLeft:'2%'}}>FlightReservation </Typography>
      <TextField
        label="Flying from"
        sx={{ m: 1, width: "25ch" }}
        variant="outlined"
        value={from}
        onChange={handleFromChange}
      />
      <TextField
        label="Flying to"
        variant="outlined"
        value={to}
        onChange={handleToChange}
        sx={{ m: 1, width: "25ch" }}
      />
      <TextField
        label="Departing date"
        type="date"
        sx={{ m: 1, width: "25ch" }}
        variant="outlined"
        value={departingDate}
        onChange={handleDepartingDateChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        label="Returning date"
        type="date"
        variant="outlined"
        sx={{ m: 1, width: "25ch" }}
        value={returningDate}
        onChange={handleReturningDateChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        sx={{ m: 1, width: "25ch" }}
        label="Passengers"
        select
        variant="outlined"
        value={passengers}
        onChange={handlePassengersChange}
      >
        {[1, 2, 3, 4, 5].map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <Button variant="contained" style={{ backgroundColor: "#000336", color: "#fff" , 
      width:'35%' , borderRadius:15, marginLeft:'2%',marginTop:'5%',marginBottom:'3%', 
       boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.6), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)" }}>Show flights</Button>
    </Box>
    </div>
  );
}

export default FlightReservationForm;
