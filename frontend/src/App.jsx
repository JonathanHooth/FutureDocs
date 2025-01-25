import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/navBar'
import Home from './pages/Home/Home'

function App() {
  const [count, setCount] = useState(0)
  const [displayHome, setDisplayHome] = useState(true)

  const homeToggle = () => {
    setDisplayHome(!displayHome);
  }

  return (
      <div className="mainLayout">
        <NavBar />
        <div className='container-popUps'>
          <UserPage />
        </div>
        
      </div>
  )
}

export default App
