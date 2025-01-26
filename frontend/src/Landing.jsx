import { useState, useEffect, useRef } from 'react'
import './App.css'

import NavBar from './components/navBar'
import Home from './pages/Home/Home'

import UserPage from './components/userPage'

import {DndContext} from '@dnd-kit/core';
import {Droppable} from "./scripts/Droppable";
import {Draggable} from "./scripts/Draggable";


const homeData = {
  position:{
    x: 700,
    y: 50
  },
  priority : 10,

};

const userData = {
  position:{
    x: 50,
    y: 40
  },
  priority : 10,
}

function Landing() {
  //Home Page Info
  const [displayHome, setDisplayHome] = useState(true);
  const [homeInfo, setHomeInfo] = useState(homeData);
  const homePositionRef = useRef(homeInfo.position);

  const [displayUser, setDisplayUser] = useState(true);
  const [userInfo, setUserInfo] = useState(userData);
  const userPositionRef = useRef(userInfo.position);

  const homeToggle = () => {
    setDisplayHome(!displayHome);
    setHomeInfo((prev)=>({
      ...prev,
      priority : 10,
    }));
    //decrease all other pages by 1 z index
    setUserInfo((prev)=>({
      ...prev,
      priority : userInfo.priority - 1,
    }));
  }


  const userToggle = () =>{
    setDisplayUser(!displayUser);
    setUserInfo((prev)=>({
      ...prev,
      priority : 10,
    }));

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


  function handleDragEnd(ev){
    console.log(ev.id)

      homePositionRef.current = {
        x: homePositionRef.current.x + ev.delta.x,
        y: homePositionRef.current.y + ev.delta.y,
      };
  
      setHomeInfo(prev => ({
        ...prev,
        position: homePositionRef.current,
      }));
      if (ev.id === 'user'){
      userPositionRef.current = {
        x: userPositionRef.current.x + ev.delta.x,
        y: userPositionRef.current.y + ev.delta.y,
      };
  
      setUserInfo(prev => ({
        ...prev,
        position: userPositionRef.current,
      }));
    }

  }

  const [data, setData] = useState();

  useEffect(()=>{
    fetch('http://localhost:5000/test')
    .then(response => response.json())
    .then(data => setData(data));
    console.log(`Hi this is ${data.name}`);
  },[])

  return (
    <>
      <div className="mainLayout">
        <NavBar />
        
        <div className='HomeScreen'>
          <DndContext onDragEnd={handleDragEnd}>
          <Droppable>
          <div className='WindowScreensContainer'>
            <Draggable id="user">
            <UserPage onClick={userToggle} 
                      displayUser={displayUser}
                      styles={{
                        position: "absolute",
                        top:`${userInfo.position.y}px`,
                        left:`${userInfo.position.x}px`,
                        zIndex:`${userInfo.priority}`,
                        }}
                      />
            </Draggable>
            <Draggable id="home">
            <Home onClick={homeToggle} 
            displayHome={displayHome} 
            styles={{
                    position: "absolute",
                    top:`${homeInfo.position.y}px`,
                    left:`${homeInfo.position.x}px`,
                    zIndex:`${homeInfo.priority}`,
                    }}/>
            </Draggable>
          </div>
          </Droppable>
          </DndContext>

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
