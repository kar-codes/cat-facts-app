import { ThemeProvider } from '@mui/material';

import './App.css';
import Router from './routes/Router';
import { createTheme } from './theme';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
