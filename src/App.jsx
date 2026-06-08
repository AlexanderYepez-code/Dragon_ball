// import { useState } from 'react';
import './App.css';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import { dragonBallTheme } from './theme';
import { Navbar } from './components/Navbar';
import Characterpage from './pages/Characterpage'
import { Footer } from './components/Footer';
import LandingPage from './pages/LandingPage';
import ListaPianeti from './pages/PaginaPianeti';

function App() {
  return (
    <MantineProvider theme={dragonBallTheme} defaultColorScheme="dark">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path = "/" element={<LandingPage/>} />
          <Route path = "/personaggi" element={<Characterpage/>} />
          <Route path="/pianeti/:id" element={<ListaPianeti />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </MantineProvider>
  );
}
export default App
