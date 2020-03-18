import React from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faPhoneSquareAlt, faDollarSign, faDesktop, faCalendarDay, faUserMinus } from '@fortawesome/free-solid-svg-icons';

const User = (props) => {
    const updateButton = () => {
        if(props.user.friendZone){
            return <button onClick={() => props.handleConnectBtn(props.user,'disconnect')} className="disconnect">
            <FontAwesomeIcon icon={faUserMinus} /> disconnect
        </button>
        } else{
            return <button onClick={() => props.handleConnectBtn(props.user,'connect')} className="connect">
            <FontAwesomeIcon icon={faUserFriends} /> connect
        </button>
        }
    }

    return (
        
        <div className="container">
        <div className="img-container">
            <img src={props.user.background} alt="" className="banner-img"></img>
            <img src={props.user.profile_image} alt="" className="profile-img"></img>
        </div>


        <div className="content">
            <div className="title">
            <p>{props.user.employee_name}</p>
            </div>

            <div className="info">
                <p><FontAwesomeIcon icon={faCalendarDay}  />{props.user.employee_age} years</p>
                <p><FontAwesomeIcon icon={faDollarSign} /> {props.user.employee_salary}</p>
                <p><FontAwesomeIcon icon={faPhoneSquareAlt} /> {props.user.phone}</p>
                <p><FontAwesomeIcon icon={faDesktop}  /> {props.user.website}</p>
            </div>

            {updateButton()}

        </div>
        </div>
        
    );
};

export default User;