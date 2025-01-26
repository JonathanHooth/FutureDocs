import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import NavBar from './components/navBar'
import Home from './pages/Home/Home'

import UserPage from './components/userPage'

function Landing() {
  const [count, setCount] = useState(0)
  const [displayHome, setDisplayHome] = useState(true);
  const [displayUser, setDisplayUser] = useState(true);

  const homeToggle = () => {
    setDisplayHome(!displayHome);
  }
  
  const userToggle = () =>{
    setDisplayUser(!displayUser);
  }

  const userOpen = () => {
    if(!displayUser)
    {
      setDisplayUser(true);
    }
  }

  const homeOpen = () =>{
    if(!displayHome)
    {
      setDisplayHome(true);
    }
  }

  return (
    <>
      <div className="mainLayout">
        <NavBar />
        
        <div className='HomeScreen'>
          <div className='WindowScreensContainer'>
            <UserPage onClick={userToggle} displayUser={displayUser}/>
            <Home onClick={homeToggle} 
            displayHome={displayHome} 
            styles={{
                    position: "absolute",
                    top:"6%",
                    left:`40%`,
                    }}/>
          </div>

          

          <div className='appContainer'>
          <div className='appWidgets'>
          <div className='homeButton'>
          <button className="IconButton" onClick={homeOpen}>
            
            </button>
            Home
          </div>
          <div className='homeButton'>
          <button className="IconButton" onClick={userOpen}>
            
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
