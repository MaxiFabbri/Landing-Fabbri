import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Navbar} from './components/navbar.jsx';


function App() {
  const handleClick = () => {
    console.log("Hola estoy haciendo Click!!")
  }
  return(
    <div>
      <Button texto="Click Aquí!!!" color={'#9999ff'} width={'200px'} height={'60px'} click={handleClick} />
    </div>
  )
}
export default App
