import * as React from 'react';
import Box from '@mui/material/Box';
import { useState } from "react";

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
      alert("wrong credentials!\n Try again please")
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
        backgroundColor: 'primary.dark',
      }}
    >{!loggedIn ? <>
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
      <button onClick={check_credentials}>
        Submit
      </button>
    </> : <>Welcome Home!</>}

    </Box>
  );
}