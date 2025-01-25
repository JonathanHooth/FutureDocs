import React from 'react';
import "../styles/userPage.css"
export default function UserPage() {
    return(
        <div className='userBox'>
            <div className='editButton'>
                <img src="editIcon.png"/>
            </div>
            <div className='picNameContainer'>
                <div className='profilePic'></div>
                <div className='name'>
                    Anna Portugal
                </div>
            </div>

            <div className='contactContainer'>
                <div>Phone</div>
                <div>Email</div>
                <div>Location(s)</div>
                <div>School</div>
                <div>Year</div>
                <div>My experience</div>
            </div>
        </div>
    )
    
}
