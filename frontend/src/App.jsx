import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/navBar'
import UserPage from './components/userPage'

function App() {
  const [count, setCount] = useState(0)

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
