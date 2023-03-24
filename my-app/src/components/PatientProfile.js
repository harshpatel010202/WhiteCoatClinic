import React, { useState } from "react";
import Nav from "./Nav";
import {
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const PatientProfile = () => {
  const [name, setName] = useState("Jon");
  const [lastName, setLastName] = useState("Snow");
  const [dateOfBirth, setDateOfBirth] = useState("12/01/1988");
  const [age, setAge] = useState("35");
  const [sex, setSex] = useState("Male");
  const [healthNumber, setHealthNumber] = useState("0123456789");
  const [phoneNumber, setPhoneNumber] = useState("+1 (777) 777 7777");
  const [emailAddress, setEmailAddress] = useState("JonSnow@got.com");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleDateOfBirthChange = (event) => {
    setDateOfBirth(event.target.value);
  };

  const handleSexChange = (event) => {
    setSex(event.target.value);
  };
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };
  const handleHealthNumberChange = (event) => {
    setHealthNumber(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleEmailAddressChange = (event) => {
    setEmailAddress(event.target.value);
  };

  return (
    <>
      <Nav locked={false} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Field</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>
                <TextField value={name} onChange={handleNameChange} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Last Name</TableCell>
              <TableCell>
                <TextField value={lastName} onChange={handleLastNameChange} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Date of Birth</TableCell>
              <TableCell>
                <TextField
                  value={dateOfBirth}
                  onChange={handleDateOfBirthChange}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Age</TableCell>
              <TableCell>
                <TextField value={age} onChange={handleAgeChange} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Sex</TableCell>
              <TableCell>
                <TextField value={sex} onChange={handleSexChange} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Health Number</TableCell>
              <TableCell>
                <TextField
                  value={healthNumber}
                  onChange={handleHealthNumberChange}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Phone Number</TableCell>
              <TableCell>
                <TextField
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Email Address</TableCell>
              <TableCell>
                <TextField
                  value={emailAddress}
                  onChange={handleEmailAddressChange}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default PatientProfile;
