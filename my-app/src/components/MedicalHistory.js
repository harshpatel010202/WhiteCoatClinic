import React from "react";
import Nav from "./Nav";
import {
  Box,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Checkbox,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@mui/material";

const MedicalHistory = () => {
  //   const [FullName, setFullName] = useState("Jon Snow");
  //   const [age, setAge] = useState("35");
  //   const [sex, setSex] = useState("Male");
  //   const [healthNumber, setHealthNumber] = useState("0123456789");
  return (
    <>
      <Nav />
      <Box sx={{ padding: "2rem" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <Box>
            <TextField label="Full Name" defaultValue={"Jon Snow"} />
          </Box>
          <Box>
            <TextField label="Age" defaultValue={"35"} />
          </Box>
          <Box>
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                row
                aria-label="gender"
                name="row-radio-buttons-group"
                defaultValue={"male"}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box>
            <TextField label="Health Number" defaultValue={"0123456789"} />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <Box>
            <FormControlLabel control={<Checkbox />} label="Asthma" />
            <FormControlLabel control={<Checkbox />} label="Cardiac Disease" />
            <FormControlLabel control={<Checkbox />} label="Cancer" />
          </Box>
          <Box>
            
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <Box>
            <TextField label="Medications" multiline rows={4}/>
          </Box>

        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <Box>
            <TextField label="Allergies" multiline rows={4}/>
          </Box>

        </Box>


        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <Box>
            <TextField label="Alcohol Consumption" multiline rows={4}/>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <Box>
            <TextField label="Illegal Drug Usage" multiline rows={4}/>
          </Box>
        </Box>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Reason For Visit</TableCell>
                <TableCell>Treatment</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>04/01/2019</TableCell>
                <TableCell>General Check</TableCell>
                <TableCell>----</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>06/17/2020</TableCell>
                <TableCell>Diagnosed with Covid19</TableCell>
                <TableCell>Antibiotics</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "2rem",
          }}
        >
          <Button variant="contained">Create New Report</Button>
        </Box>
      </Box>
    </>
  );
};

export default MedicalHistory;
