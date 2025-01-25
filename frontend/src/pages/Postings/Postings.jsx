import { Link } from 'react-router-dom'

import NavBar from "../../components/navBar"

import "./Postings.css"

function Postings(){


  return(
    <>
    <div className='boxContainer'>
    <NavBar />
    <div className="webBrowserBar">
      <div>
        <Link to="/">
          <button className="windowExit" />
        </Link>
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
    <div className='PostingBox'>
      <div className="filtercontainer">
        
      </div>
      <div className="jobInformationContainer">
        <div className="jobPostContainer">

        </div>

        <div className="jobDetailContainer">

          </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Postings