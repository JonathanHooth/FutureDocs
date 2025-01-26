import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/navBar'
import Home from './pages/Home/Home'
import Auth from "./components//Auth";

import { Outlet } from 'react-router';

function App() {
  //const [count, setCount] = useState(0)
  //const [displayHome, setDisplayHome] = useState(true)

  return (
    <Outlet />
  )
}

export default App
