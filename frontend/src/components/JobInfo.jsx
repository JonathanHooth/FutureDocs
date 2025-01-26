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
      {props.job ? (props.job.title) : (<>Empty Event</>)}
    </div>
    <div className='date'>
      {props.job ? (new Date(props.job.date).toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        })) : (<>Empty Date</>)}
    </div>
    <div className='author'>
      {props.job ? props.job.author : (<>Mr. Bob</>)}
    </div>
    <div className='description'>
      Description
      <div className='description-text'>
        {props.job ? props.job.description : (<>Lorem ipsum odor amet, consectetuer adipiscing elit. Litora leo sem fringilla purus at mollis senectus. Praesent molestie eget nisl torquent vulputate. 
                        Fringilla netus per elementum, convallis facilisi morbi et. Phasellus litora praesent lacus adipiscing felis. Parturient ex ex porttitor vehicula mollis 
                        lacus rutrum morbi massa?
                        Interdum vulputate accumsan turpis purus bibendum himenaeos. Interdum curabitur aenean risus a primis; consequat quisque cras himenaeos. 
                        Nunc bibendum sodales nec augue turpis curae tellus habitasse. Mattis a molestie sem convallis dui accumsan nascetur metus. Velit aenean 
                        elementum venenatis feugiat vivamus enim semper turpis. Sed per magnis facilisis magnis habitant hac. Finibus habitant elementum amet nullam 
                        magna libero vehicula cras. Aliquam porttitor fringilla blandit condimentum magna bibendum. Lobortis pharetra iaculis ad metus fermentum habitasse 
                        amet nostra.</>)}
      </div>
    </div>
    <div className='contactText'>
      Interested? Contact At:
    </div>
    <div className="contact-info">
      <div>
        Email: {props.job ? props.job.email : (<>myemail@gmail.com</>)}
      </div>
      <div>
        Phone Number: {props.job ? props.job.phone : phoneNumber}
      </div>
    </div>
      
    </div>


    </div>
    </>
  )
}