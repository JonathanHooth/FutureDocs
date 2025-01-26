import {useState} from 'react'

import api from '../api';

import "./JobForm.css"
export default function JobForm(props){

  const [title, setTitle] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("");
  const [author, setAuthor] = useState("")
  const [date, setDate] = useState(new Date())
  const [description, setDescription] = useState("")
  
  //const [] = useState("")

  /**
   * title = job.title
  date = datetime.now()
  author = job.author
  description = job.description
  location = job.location
  email = job.email
  phone = job.phone
   */


  const [titleField, setTitleField] = useState('')
  const [locationField, setLocationField] = useState('')
  const [experienceField, setExperienceField] = useState('')
  const [emailField, setEmailField] = useState('')
  const [phoneField, setPhoneField] = useState('')
  const [authorField, setAuthorField] = useState('')
 

  //Handle changes
  const handleTitleChange = (e) => {
    setTitleField(e.target.value);
  };

  const handleEmailChange = (e) => {
      setEmailField(e.target.value);
  };

  const handleLocationChange = (e) => {
      setLocationField(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthorField(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhoneField(e.target.value);
  };

  const handleDescriptionChange = (e) =>{
      setExperienceField(e.target.value);
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    const formData = {
      title : titleField,
      author : authorField,
      description : experienceField,
      location : locationField,
      email : emailField,
      phone : phoneField,
      date : date
    };

    console.log(formData)

    const response = await api.post(`http://127.0.0.1:8000/api/create_job/${titleField}/${authorField}/${experienceField}/${locationField}/${emailField}/${phoneField}`)
    console.log(response);
    props.changeMe();

  }

  return(<>
    <div className="Job-container">
      <div className="jobMiniContainers">
        <form onSubmit={handleSubmit} className='form'>
          <div className='title'>
            Title
            <input onChange={handleTitleChange} value={titleField} className='inputFieldTime'/>
          </div>
          <div className='author'>
            Author
            <input onChange={handleAuthorChange} value={authorField} className='inputFieldTime'/>
          </div>
          <div className='location'>
            Location
            <input onChange={handleLocationChange} value={locationField} className='inputFieldTime'/>
          </div>
          <div className='description'>
            Description
            <textarea onChange={handleDescriptionChange} className="descriptionText" value={experienceField} maxLength={400} placeholder='400 character limit'/>
            
          </div>
          <div className='phone'>
            Phone Number
            <input onChange={handlePhoneChange} value={phoneField} className='inputFieldTime'/>
          </div>
          <div className='email'>
            Email
            <input onChange={handleEmailChange} value={emailField} className='inputFieldTime'/>
          </div>

          <button className='createJobButton'>
            Create Posting
          </button>
        </form>


      </div>
    </div>
  </>)
}