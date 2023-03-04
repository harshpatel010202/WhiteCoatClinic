import * as React from 'react';
import Box from '@mui/material/Box';
import { useState } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ScheduleView from './ScheduleView';

export default function BoxSx() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const accepted_credentials = [["admin", "1234"]];

  function checkCredentials(credentials) {
    return (credentials[0] === name) && (credentials[1] === password);
  }

  const check_credentials = () => {
    const match = accepted_credentials.find(checkCredentials);
    console.log(match);
    if (match) {
      setLoggedIn(true);
      alert("Your are logged in!");
    } else {
      setName("");
      setPassword("");
      alert("Wrong credentials!\n Try again please");
    }
  }

  return (
    <Box
      sx={{
        height: 500,
        margin: "auto",
        width: "50%",
        border: 0,
        padding: 10,
        backgroundColor: 'lightblue',
      }}
    >{!loggedIn ? <Stack direction="column" spacing={2}>
      <label>Enter your user name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>Enter your Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <Button onClick={check_credentials} variant="contained" color="success">
        Submit
      </Button>
    </Stack> : <ScheduleView/>}

    </Box>
  );
}