import { Link } from 'react-router-dom'

import NavBar from "../../components/navBar"
import JobBlock from '../../components/JobBlock'
import JobInfo from '../../components/JobInfo'

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
          <div className="jobRow">
            <JobBlock />
            <JobBlock />
            <JobBlock />
            <JobBlock />
          </div>
          <div className="jobRow">
            <JobBlock />
            <JobBlock />
            <JobBlock />
            <JobBlock />
          </div>
          <div className="jobRow">
            <JobBlock />
            <JobBlock />
            <JobBlock />
            <JobBlock />
          </div>
        </div>

        <div className="jobDetailContainer">
          <JobInfo id={1} />
        </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Postings