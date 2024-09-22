import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/navbar.jsx';
import CardContainer from './components/card-container.jsx';
import Footer from './components/footer.jsx';


function App() {
  return(
  <>
    <Navbar navbarElements={['Products','Prices','About us','Contact']} width='120px' />
    <h1>Global Merchandising</h1>
    <CardContainer/>
    <Footer footerElements={['Domicilio Av. J. D. Peron 7201','Tel.: 11 3232-4545','About us Contact']} />

  </> 
  )
}
export default App
