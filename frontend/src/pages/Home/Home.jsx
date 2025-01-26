import React from "react"
import { Link } from 'react-router-dom'
import "./Home.css"
import "../../styles/webpage.css"

import { useEffect, useState } from "react"

import api from "../../api"

import RecentPosting from "../../components/RecentPosting"

import { useDraggableContext } from "../../scripts/Draggable"

function Home(props){
  const [newPostings, setNewPostings] = useState([]);
  const { setNodeRef, listeners, attributes, style} = useDraggableContext();

  const getCurrentJobs = async() =>{
    const newJobs = await api.get("/api/new_jobs");
    setNewPostings(newJobs.data)
  }

  useEffect(()=>{
    getCurrentJobs();

  },[])

  return(
    props.displayHome ? (<>
      <div className="HomeContainer basicWebStyle" style={{...props.styles, ...style}}>
        <div className="topBar">
          <div>
            <button className="windowExit" onClick={props.onClick}>
                
            </button>
          </div>
          <div className="line-holder" ref={setNodeRef} {...listeners} {...attributes}>
            <div className="line"> 
            </div>
            <div className="line"> 
            </div>
            <div className="line"> 
            </div>
          </div>
          <div className="titleName">
            Home
          </div>
        </div>
  
        <div className="content-container">
        <div className="content">
          <div className="welcomeMessage">
            Hello, User!
          </div>
          <div className="messageName">
            Ready to Look for Opportunites?
          </div>
          <div className="PostingHeader">
              Most Recent Postings
          </div>

          <div className="Posting-Container">
            {newPostings.map((job, index)=>{
              return <RecentPosting  job={job} />;
            })}
          </div>

          <div className="container2">
            <Link className="link" to="/postings">
              <button className="goToPostings">
                  Load More
              </button>
              </Link>
          </div>
        </div>
        
        </div>
      </div>
      
      </>): (<> </>)
  )
}

export default Home