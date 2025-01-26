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
    <div className='jobMiniContainer'>
    <div className='title'>
      Example Job Posting
    </div>
    <div className='date'>
      January 26, 2025
    </div>
    <div className='author'>
      Mr. Bob
    </div>
    <div className='description'>
      Description
      <div className='description-text'>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Litora leo sem fringilla purus at mollis senectus. Praesent molestie eget nisl torquent vulputate. 
                        Fringilla netus per elementum, convallis facilisi morbi et. Phasellus litora praesent lacus adipiscing felis. Parturient ex ex porttitor vehicula mollis 
                        lacus rutrum morbi massa?
                        Interdum vulputate accumsan turpis purus bibendum himenaeos. Interdum curabitur aenean risus a primis; consequat quisque cras himenaeos. 
                        Nunc bibendum sodales nec augue turpis curae tellus habitasse. Mattis a molestie sem convallis dui accumsan nascetur metus. Velit aenean 
                        elementum venenatis feugiat vivamus enim semper turpis. Sed per magnis facilisis magnis habitant hac. Finibus habitant elementum amet nullam 
                        magna libero vehicula cras. Aliquam porttitor fringilla blandit condimentum magna bibendum. Lobortis pharetra iaculis ad metus fermentum habitasse 
                        amet nostra.
      </div>
    </div>
    <div className='contactText'>
      Interested? Contact At:
    </div>
    <div className="contact-info">
      <div>
        Email: myemail@gmail.com
      </div>
      <div>
        Phone Number: {phoneNumber}
      </div>
    </div>
      
    </div>


    </div>
    </>
  )
}