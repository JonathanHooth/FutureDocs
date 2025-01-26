import { Link } from 'react-router-dom'

import NavBar from "../../components/navBar"
import JobBlock from '../../components/JobBlock'
import JobInfo from '../../components/JobInfo'
import JobForm from '../../components/jobForm'
import { useState, useEffect } from 'react'
import "./Postings.css"

import api from '../../api'
import OSCAd from '../../assets/Ad1.png'

function Postings(){  

  const [jobPostings, setJobPostings] = useState([])
  const [selectedJob, setSelectedJob] = useState(1);
  const [selectedJobData, setSelectedJobData] = useState()

  const [postAmount, setPostAmount] = useState(jobPostings.length);

  const [addPost, setAddPost] = useState(false)


  const toggleAddForm = () => {
    setAddPost(!addPost);
  }

  const getPosting = async() =>{
    const msgList = await api.get("/api/jobs")
    setJobPostings(msgList.data);
    console.log(jobPostings)
  }

  const getSelectedJob = async(jobID) =>{
    const jobObj = await api.get(`/api/jobs/${selectedJob}`)
    const jobData = jobObj.data;
    setSelectedJobData(jobData)
    console.log(jobData);
  }

  useEffect(()=>{
    getPosting();
  },[])

  const changeMyJob = (jobID)=>{
    console.log("hi")
    setSelectedJob(jobID);
  }

  useEffect(()=>{
    getSelectedJob(selectedJob);
    console.log(selectedJob)
  },[selectedJob])

  useEffect(()=>{
    setPostAmount(jobPostings.length)
  },[jobPostings])

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
        <div className='OSCAd'>
          <img src={OSCAd} />
        </div>
      </div>
      <div className="jobInformationContainer">
        <div className="jobPostContainer">
          <div className='header'>
          
          <div className='displayPosts'>
            Displaying {postAmount} Results
          </div>
          <div className='addButton'>
            <button onClick={toggleAddForm} className='button'>
              {addPost ? (<>Cancel New Post</>) : (<>Create New Post</>)}
            </button>
          </div>

          </div>
          <div className='jobPostScroll'>
          
            {jobPostings.map((job, index) =>{
              return <JobBlock key={job.id} job={job} onClick={changeMyJob} />;
            })}
          
          </div>
        </div>

        <div className="jobDetailContainer">
          {addPost ? (<>
          <JobForm changeMe={toggleAddForm}/>
          </>) : 
          (<JobInfo id={selectedJob} job={selectedJobData}/>) }
          
        </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Postings