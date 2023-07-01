import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Signup from "./Components/Signup";
import LoginForm from "./Components/Login";
import FlightReservationForm from "./Components/Reservation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/landing" element={<Hero />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/Reservation" element={<FlightReservationForm />} />
        {/* Add more routes here */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
