import * as React from 'react';
import { useState } from "react";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Fade from '@mui/material/Fade';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';

import { Customers } from './pages/Customers';
import { Trainings } from './pages/Trainings';
import { Calendar } from './pages/Calendar';
import { Statistics } from './pages/Statistics';

function App() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [stateTable,setStateTable]=useState("Customers");
  const open = Boolean(anchorEl); 
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (text) => {
    setAnchorEl(null);
    setStateTable(text)
  };
  return (
    <Container maxWidth="xl">
      <AppBar position="static">
        <Toolbar>
        <div>
      <Button
        id="fade-button"
        color="inherit"
        sx={{ m: 2 }}
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={e=> handleClose("Customers")}>Customers</MenuItem>
        <MenuItem onClick={e=> handleClose("Trainings")}>Trainings</MenuItem>
        <MenuItem onClick={e=> handleClose("Calendar")}>Calendar</MenuItem>
        <MenuItem onClick={e=> handleClose("Statistics")}>Statistics</MenuItem>
      </Menu>
    </div>
          <Typography variant="h6">Personal Trainer</Typography>
        </Toolbar>
      </AppBar>
      { 
      {
        "Customers":<Customers/>,
        "Trainings":<Trainings/>,
        "Calendar":<Calendar/>,
        "Statistics":<Statistics/>
      }[stateTable]
      }
    </Container>
  );
}

export default App;
