import { Link } from 'react-router-dom'

import NavBar from "../../components/navBar"
import JobBlock from '../../components/JobBlock'
import JobInfo from '../../components/JobInfo'
import JobForm from '../../components/jobForm'
import { useState, useEffect } from 'react'
import "./Postings.css"

import api from '../../api'

function Postings(){  

  const [jobPostings, setJobPostings] = useState([])

  const postAmount = 16;

  const [addPost, setAddPost] = useState(false)


  const toggleAddForm = () => {
    setAddPost(!addPost);
  }

  const getPosting = async() =>{
    const msgList = await api.get("/api/jobs")
    setJobPostings(msgList.data);
    console.log(jobPostings)
  }

  useEffect(()=>{
    getPosting();
  },[])

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
        Postings
      </div>
    </div>
    <div className='PostingBox'>
      <div className="filtercontainer">
        
      </div>
      <div className="jobInformationContainer">
        <div className="jobPostContainer">
          <div className='displayPosts'>
            Displaying {postAmount} Results
          </div>
          <div>
            <button onClick={toggleAddForm}>
              Create new Post
            </button>
          </div>
          <div className='jobPostScroll'>
          {/*
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
          <div className="jobRow">
            <JobBlock />
            <JobBlock />
            <JobBlock />
            <JobBlock />
          </div>*/}
          
            {jobPostings.map((job, index) =>{
              return <JobBlock key={job.id} job={job}/>;
            })}
          
          </div>
        </div>

        <div className="jobDetailContainer">
          {addPost ? (<>
          <JobForm changeMe={toggleAddForm}/>
          </>) : 
          (<JobInfo id={1} />) }
          
        </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Postings