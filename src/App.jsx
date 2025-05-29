import BottomMenu from './components/BottomMenu'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Grid, Typography, Paper, CssBaseline } from '@mui/material'
import Box from '@mui/material/Box'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Tab from '@mui/material/Tab'
import logo from './assets/logo.png'
import React, { useState } from 'react';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // Determine tab from current path
  const getTabFromLocation = () => {
    if (location.pathname.startsWith('/about')) return 'about';
    if (location.pathname.startsWith('/rules')) return 'rules';
    if (location.pathname.startsWith('/settings')) return 'settings';
    return 'rules'; // default
  };

  const [tab, setTab] = useState(getTabFromLocation());

  // Update tab when location changes
  React.useEffect(() => {
    setTab(getTabFromLocation());
  }, [location]);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
    if (newValue === 'about') navigate('/about');
    else if (newValue === 'settings') navigate('/settings');
    else if (newValue === 'rules') navigate('/rules');
  };

  return (
    <>
      <CssBaseline />
      <Grid sx={{ width: 600, height: 600, minWidth: 0}}>
        <Grid item xs={12}>
          <Paper sx={{ bgcolor: "#222222", color: "#fff", borderRadius: 0, height: 50, p: 0 }}>
            <Grid
              container
              alignItems="center"
              sx={{ height: 1, minHeight: 50 }}
              wrap="nowrap"
            >
              <Grid
                item
                sx={{ display: "flex", alignItems: "center", height: 1, pl: 1, pr: 1 }}
              >
                <img src={logo} alt="Logo" style={{height: 32 }} />
              </Grid>
              <Grid
                item
                xs
                sx={{ display: "flex", alignItems: "center", height: 1 }}
              >
                <Typography variant="h6" sx={{ ml: 1 }}>
                  ServiceNow Monkey Patcher
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sx={{ height: 500 }}>
          <TabContext value={tab}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                <Tab label="Rules" value="rules" />
                <Tab label="Settings" value="settings" />
                <Tab label="About" value="about"/>
              </TabList>
            </Box>
            <TabPanel value="rules" sx={{ height: '100%', width: '100%' , p: 0 }}>
              <Outlet/>
            </TabPanel>
            <TabPanel value="settings" sx={{ height: '100%', p: 0 }}>
              Item Two
            </TabPanel>
            <TabPanel value="about" sx={{ height: '100%', p: 0 }}>
              Item Three
            </TabPanel>
          </TabContext>
        </Grid>
      </Grid>
    </>
  )
}

export default App