import { Routes, Route, Navigate } from 'react-router-dom';
import { Global } from '@emotion/react';
import { GlobalStyles, Theme } from './styles';
import { ThemeProvider } from '@mui/material/styles';
// import { Layout } from "./components/Layout";
import { HomePage } from './pages';

export function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Global styles={GlobalStyles} />
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" />} />
          {/* </Route> */}
        </Routes>
      </ThemeProvider>
    </>
  );
}
