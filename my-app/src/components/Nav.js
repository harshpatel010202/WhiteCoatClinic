import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


function Nav(props) {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };


  const navigate = useNavigate();
  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            White Coats Clinic
          </Typography>
          {!props.locked? <Button onClick={()=>{alert("Your are logged out!"); navigate('/');}} color="inherit">Log Out</Button >:<></> }
        </Toolbar>
      </AppBar>
      {!props.locked? <List>
      <Drawer anchor="left" open={isDrawerOpen} onClose={(handleDrawerClose)}>
          <ListItem
            button
            component={Link}
            to="/MainPage"
            onClick={handleDrawerClose}
          >
            <ListItemText
              primary="Main Page"
              style={{ textDecorationLine: "none" }}
            />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/PatientProfile"
            onClick={handleDrawerClose}
          >
            <ListItemText
              primary="Patient Profile"
              style={{ textDecorationLine: "none" }}
            />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/schedule"
            onClick={handleDrawerClose}
          >
            <ListItemText
              primary="Schedule"
              style={{ textDecorationLine: "none" }}
            />
          </ListItem>
          <ListItem button onClick={handleDrawerClose}>
            <ListItemText primary="Medical History" />
          </ListItem>
          </Drawer>
        </List> : <></>}
    </Box>
  );
}

export default Nav;
