import './UserForm.css'
import { useContext } from 'react';
import AppContext from "../../context";


// import React, { useEffect, useState } from 'react';
const UserForm = (props) => {

    const [userData, setUserDate] = useContext(AppContext).userData;

    const nameChangeHandeler = (event) => {
        let currUserData = userData;
        currUserData.UserName = event.target.value;
        setUserDate(currUserData)
        // props.onUserNameChange(event.target.value);
    }
    const idChangeHandeler = (event) => {
        let currUserData = userData;
        console.log(event.target.value);
        currUserData.UserId = event.target.value;
        setUserDate(currUserData)
        // props.onUserIdChange(event.target.value);

    }

    return (
        <>
            <div className="new-user__control">
                <div className="new-user__control">
                    <label>User name</label>
                    <input type='text' value={userData.UserName} onChange={nameChangeHandeler} />
                </div>
                <div className="new-user__control">
                    <label>User id</label>
                    <input type='number' min="0" value={userData.UserId} onChange={idChangeHandeler} />
                </div>
            </div>
        </>
    );



}

export default UserForm;