import React , {useState}from 'react';
import "../styles/userPage.css"
import "../styles/webpage.css"
import { use } from 'react';

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
    const [phoneField, setPhoneField] = useState("")
    const [emailField, setEmailField] = useState("")
    const [locationField, setLocationField] = useState("")
    const [schoolField, setSchoolField] = useState("")
    const [yearField, setYearField] = useState("")
    const [experienceField, setExperienceField] = useState("")


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
        setExperienceField(e.target.field);
    }
    

    //Tracking for editing
    const [editInfo, setEditInfo] = useState(false);

    const onSubmit = () =>{



    }

    const toggleEdit = () =>{
        setEditInfo(!editInfo)
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
                <div className='editButton'>
                    <button onClick={toggleEdit}>
                        <img src="editIcon.png"/>
                    </button>
                </div>
                <div className='picNameContainer'>
                    <div className='profilePic'></div>
                    <div className='name'>
                        {name}
                    </div>
                </div>

                <div className='contactContainer'>
                    <div>
                        Phone: {editInfo ? (<input value={phoneField} onChange={handlePhoneChange} />) : (<>{phone}</>)}
                    </div>
                    <div>
                        Email: {editInfo ? (<input value={emailField} onChange={handleEmailChange}/>) : (<>{email}</>)}
                    </div>
                    <div>
                        Location(s): {editInfo ? (<input value={locationField} onChange={handleLocationChange}/>) : (<>{location}</>)}
                    </div>
                    <div>
                        School: {editInfo ? (<input value={schoolField} onChange={handleSchoolChange}/>) : (<>{school}</>)}
                    </div>
                    <div>
                        Year: {editInfo ? (<input value={yearField} onChange={handleYearChange}/>) : (<>{year}</>)}
                    </div>
                    <div className="experienceBox">
                        <div>
                            My Experience
                        </div>
                        <div className="myExperience">
                            {editInfo ? (<input  onChange={handleExperienceChange}/>) : (<>{sampleText}</>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>) : <> </>
    )
    
}
