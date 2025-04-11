import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import React, { ReactNode } from 'react';

interface IAppThemeProvider {
  children: ReactNode;
}

const AppThemeProvider = ({ children }: IAppThemeProvider) => {
  const theme = createTheme({});

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
