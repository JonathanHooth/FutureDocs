import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import NavBar from './components/navBar'
import Home from './pages/Home/Home'

function Landing() {
  const [count, setCount] = useState(0)
  const [displayHome, setDisplayHome] = useState(true)

  const homeToggle = () => {
    setDisplayHome(!displayHome);
  }

  return (
    <>
      <div className="mainLayout">
        <NavBar />
        
        <div className='HomeScreen'>
          <div className='WindowScreensContainer'>
          <Home onClick={homeToggle} displayHome={displayHome}/>
          </div>

          <div className='appContainer'>
          <div className='appWidgets'>
          <div className='homeButton'>
          <button className="IconButton" onClick={homeToggle}>
            
            </button>
            Home
          </div>
          <div className='homeButton'>
          <button className="IconButton" onClick={homeToggle}>
            
          </button>
            Account
          </div>
          </div>


        </div>
        </div>

        
      </div>
    </>
  )
}

export default Landing
