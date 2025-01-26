import React from "react"
import { Link } from 'react-router-dom'
import "./Home.css"
import "../../styles/webpage.css"

import RecentPosting from "../../components/RecentPosting"

function Home(props){

  return(
    props.displayHome ? (<>
      <div className="HomeContainer basicWebStyle">
        <div className="topBar">
          <div>
            <button className="windowExit" onClick={props.onClick}>
                
            </button>
          </div>
          <div className="line-holder">
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
            <RecentPosting />
            <RecentPosting />
            <RecentPosting />
            <RecentPosting />
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