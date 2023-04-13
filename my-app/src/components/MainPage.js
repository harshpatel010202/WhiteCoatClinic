import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import { color } from "@mui/system";

export default function MainPage() {
  const buttonStyle = {
    backgroundColor: "green",
    color: "white",
    fontWeight: "bold",
    borderRadius: "10px",
    padding: "10px 20px",
    textTransform: "uppercase",
    "&:hover": {
      backgroundColor: "darkgreen",
    },
  };

  return (
    <>
      <Nav locked={false}/>
      <Box
        sx={{
          height: 500,
          margin: "auto",
          width: "50%",
          border: 0,
          padding: 10,
          backgroundColor: "lightblue",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            height: 400,
          }}
        >
          <Box
            sx={{
              width: "30%",
              height: "70%",
              backgroundColor: "cornflowerblue",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h2>Patient Profile</h2>
            <p>
              View and update patient's personal and healthcare information such
              as contact information and etc.
            </p>
            <Link style={{ textDecorationLine: "none" }} to="/PatientProfile">
              <Button sx={buttonStyle} href="/patient-profile">
                View
              </Button>
            </Link>
          </Box>
          <Box
            sx={{
              width: "30%",
              height: "70%",
              backgroundColor: "lightgreen",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h2>Schedule</h2>
            <p>
              View your daily and monthly schedules for appointments, lab visits
              and etc.
            </p>
            <Link style={{ textDecorationLine: "none" }} to="/schedule">
              <Button sx={buttonStyle} variant="contained">
                View
              </Button>
            </Link>
          </Box>
          <Box
            sx={{
              width: "30%",
              height: "70%",
              backgroundColor: "lightpink",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h2>Medical History</h2>
            <p>
              Find out about patients previous appointments, lab tests,
              prescriptions, etc.
            </p>
            <Link style={{ textDecorationLine: "none" }} to="/MedicalHistory">
              <Button sx={buttonStyle} href="/medical-history">
                View
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
}
