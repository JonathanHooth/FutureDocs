import { useState, useEffect } from 'react'
import "./JobInfo.css"

export default function JobInfo(props){

  //call backend to retrive the information from the passed ID
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(()=>{
    setPhoneNumber("123-345-7890")
  })

  return(
    <>
    <div className="Job-container">
    <div>
      Title
    </div>
    <div>
      Date
    </div>
    <div>
      Author
    </div>
    <div>
      Description
    </div>
    <div>
      Interested? Contact At:
    </div>
    <div className="contact-info">
      <div>
        Email
      </div>
      <div>
        Phone Number: {phoneNumber}
      </div>

    </div>


    </div>
    </>
  )
}