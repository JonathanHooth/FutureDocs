import React , {useState}from 'react';
import "../styles/userPage.css"
import "../styles/webpage.css"

export default function UserPage(props) {



    const [sampleText, setSampleText] = useState(`Lorem ipsum odor amet, consectetuer adipiscing elit. Litora leo sem fringilla purus at mollis senectus. Praesent molestie eget nisl torquent vulputate. 
                        Fringilla netus per elementum, convallis facilisi morbi et. Phasellus litora praesent lacus adipiscing felis. Parturient ex ex porttitor vehicula mollis 
                        lacus rutrum morbi massa?
                        Interdum vulputate accumsan turpis purus bibendum himenaeos. Interdum curabitur aenean risus a primis; consequat quisque cras himenaeos. 
                        Nunc bibendum sodales nec augue turpis curae tellus habitasse. Mattis a molestie sem convallis dui accumsan nascetur metus. Velit aenean 
                        elementum venenatis feugiat vivamus enim semper turpis. Sed per magnis facilisis magnis habitant hac. Finibus habitant elementum amet nullam 
                        magna libero vehicula cras. Aliquam porttitor fringilla blandit condimentum magna bibendum. Lobortis pharetra iaculis ad metus fermentum habitasse 
                        amet nostra.`);
    
    const [name, setName] = useState("Anna Portugal")
    const [phone, setPhone] = useState("123-456-7890");
    const [email, setEmail] = useState("me@gmail.com");
    const [location, setLocation] = useState("Here, Florida")
    const [school, setSchool] = useState("America");
    const [year, setYear] = useState(2025);

    //input field values
    const [phoneField, setPhoneField] = useState(phone)
    const [emailField, setEmailField] = useState(email)
    const [locationField, setLocationField] = useState(location)
    const [schoolField, setSchoolField] = useState(school)
    const [yearField, setYearField] = useState(year)
    const [experienceField, setExperienceField] = useState(sampleText)


    //Handle changes
    const handlePhoneChange = (e) => {
        setPhoneField(e.target.value);
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

    const handleExperienceChange = (e) =>{
        setExperienceField(e.target.value);
    }
    

    //Tracking for editing
    const [editInfo, setEditInfo] = useState(false);

    const updateInformation = (event) =>{
        event.preventDefault();
        setPhone(phoneField);
        setEmail(emailField);
        setLocation(locationField);
        setSchool(schoolField);
        setYear(yearField);
        setSampleText(experienceField);

        setEditInfo(!editInfo);
    }

    const toggleEdit = () =>{
        setEditInfo(!editInfo);
    }
    return(
        props.displayUser ? (<div className='userBox basicWebStyle'>
            <div className='AccountBox'>
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
            <div className='titleAcc'>
                User
            </div>

            </div>
            <div className="ModifyInfo">
                <div className='header'>
                <div className='picNameContainer'>
                    <div className='profilePic'></div>
                    <div className='name'>
                        {name}
                    </div>
                </div>
                <div className='editButton'>
                    <button onClick={toggleEdit}>
                        <img src="editIcon.png"/>
                    </button>
                </div>
                </div>
                

                <div className='contactContainer'>
                    {editInfo ? (<form onSubmit={updateInformation}>
                        <div>
                            Phone: <input value={phoneField} onChange={handlePhoneChange} />
                        </div>
                        <div>
                            Email:<input value={emailField} onChange={handleEmailChange}/>
                        </div>
                        <div>
                            Location(s): <input value={locationField} onChange={handleLocationChange}/>
                        </div>
                        <div>
                            School: <input value={schoolField} onChange={handleSchoolChange}/>
                        </div>
                        <div>
                            Year: <input value={yearField} onChange={handleYearChange}/>
                        </div>    
                        <div className="experienceBoxEdit">
                            My Experience
                        </div>
                        <div className="myExperienceEdit">
                            <textarea className="experienceHere" value={experienceField} onChange={handleExperienceChange}/> 
                        </div>

                        <div className='updateMyInfo'>
                            <button className="button" type="submit" >
                                Update Information
                            </button>
                        </div>
                    </form>) : (<>
                        <div>
                            Phone: {phone}
                        </div>
                        <div>
                        Email: {email}
                        </div>
                        <div>
                            Location(s): {location}
                        </div>
                        <div>
                            School: {school}
                        </div>
                        <div>
                            Year: {year}
                        </div>
                        <div className="experienceBox">
                        <div>
                            My Experience
                        </div>
                        <div className="myExperience">
                            {sampleText}
                        </div>
                    </div>
                    </>)}
                    
                    
                </div>
            </div>
        </div>) : <> </>
    )
    
}
