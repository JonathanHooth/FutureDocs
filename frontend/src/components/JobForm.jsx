import {useState} from 'react'


import "./JobForm.css"
export default function JobForm(props){

  const [title, setTitle] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("");
  const [author, setAuthor] = useState("")
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  //const [] = useState("")


  const [titleField, setTitleField] = useState('')
  const [locationField, setLocationField] = useState('')
  const [experienceField, setExperienceField] = useState('')

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

  const handleSchoolChange = (e) => {
      setSchoolField(e.target.value);
  };

  const handleYearChange = (e) => {
      setYearField(e.target.value);
  };

  const handleDescriptionChange = (e) =>{
      setExperienceField(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    props.changeMe();

  }

  return(<>
    <div className="Job-container">
      <div className="jobMiniContainers">
        <form onSubmit={handleSubmit}>
          <div className='title'>
            Title
            <input onChange={handleTitleChange} value={titleField}/>
          </div>
          <div className='location'>
            Location
            <input onChange={handleLocationChange} value={locationField}/>
          </div>
          <div className='description'>
            Description
            <textarea onChange={handleDescriptionChange} value={experienceField}/>
          </div>

          <button>
            Create Posting
          </button>
        </form>


      </div>
    </div>
  </>)
}