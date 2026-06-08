import { useState } from 'react';
import './App.css';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { BrowserRouter } from 'react-router-dom';
import { dragonBallTheme } from './theme';
import { Navbar } from './components/Navbar';
function App() {
  return (
    <MantineProvider theme={dragonBallTheme} defaultColorScheme="dark">
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </MantineProvider>
  );
}
export default App
