import React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from 'react';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';

function BottomMenu () {
    
    const [value, setValue] = useState(0); // <-- Add this line


  return (
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          // Optionally handle navigation here, e.g., using React Router or window.location
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon /> } component={Link} to="/" />
        <BottomNavigationAction label="List" icon={<ListIcon />} />
        <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
        <BottomNavigationAction label="About" icon={<InfoIcon />} component={Link} to="/about" />
      </BottomNavigation>
    );
};

export default BottomMenu;