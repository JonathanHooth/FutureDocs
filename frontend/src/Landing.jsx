import { useState, useEffect, useRef } from 'react'
import './App.css'
import api from './api'

import NavBar from './components/navBar'
import Home from './pages/Home/Home'

import UserPage from './components/userPage'

import {DndContext} from '@dnd-kit/core';
import {Droppable} from "./scripts/Droppable";
import {Draggable} from "./scripts/Draggable";

import House from "./assets/house.png"


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
  //User Page Info
  const [displayUser, setDisplayUser] = useState(true);
  const [userInfo, setUserInfo] = useState(userData);
  const userPositionRef = useRef(userInfo.position);

  const homeToggle = () => {
    
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
    
    setUserInfo((prev)=>({
      ...prev,
      priority : 10,
    }));

    setHomeInfo((prev)=>({
      ...prev,
      priority : homeInfo.priority - 1,
    }));
    console.log(`User ${userInfo.priority} should be above Home ${homeInfo.priority}`)
  }
  const userClose= () => {
    if(displayUser)
    {
      setDisplayUser(false);
    }
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

  const homeClose = () =>{
    if(displayHome)
    {
      setDisplayHome(false);
    }
  }


  function handleDragEnd(ev){
    if(ev.active.id === 'home'){

      let newX = homePositionRef.current.x + ev.delta.x;
      let newY = homePositionRef.current.y + ev.delta.y;

      homePositionRef.current = {
        x: newX,
        y: newY,        
      };
      
      setHomeInfo(prev => ({
        ...prev,
        position: homePositionRef.current,
      }));
    }else if(ev.active.id === 'user'){
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

  const getInfo = async() => {
    const msg = await api.get("/")
    console.log(msg.data);
  }

  useEffect(()=>{
    console.log("Getting Request")
    getInfo();

  },[])

  return (
    <>
      <div className="mainLayout">
        <NavBar />
        
        <div className='HomeScreen'>
          <DndContext onDragEnd={handleDragEnd}>
          <Droppable>
          <div className='WindowScreensContainer'>
            <Draggable id="user" onClick={userToggle}>
            <UserPage onClick={userClose} 
                      displayUser={displayUser}
                      styles={{
                        position: "absolute",
                        top:`${userInfo.position.y}px`,
                        left:`${userInfo.position.x}px`,
                        zIndex:`${userInfo.priority}`,
                        }}
                      />
            </Draggable>
            <Draggable id="home" onClick={homeToggle}>
            <Home onClick={homeClose} 
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
            <img className="House" src={House} />
            </button>
            <div className='buttonSubtext'>
            Home
            </div>
          </div>
          <div className='homeButton'>
          <button className="IconButton" onClick={userOpen}>
            
          </button>
            <div className='buttonSubtext'>
            Account
            </div>
          </div>
          </div>


        </div>
        </div>

        
      </div>
    </>
  )
}

export default Landing 
