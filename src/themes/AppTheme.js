import { createTheme, ThemeOptions } from '@mui/material/styles';
import { Grid, Typography, Paper, CssBaseline } from '@mui/material'

const AppTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#222',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

export default AppTheme;


