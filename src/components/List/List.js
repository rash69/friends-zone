import React from 'react';
import './List.css';
import User from '../User/User';

const List = (props) => {
    return (
       <div className="user-list">
           {props.users.map(user => {
               return <User user={user} handleConnectBtn={props.handleConnectBtn}></User>
           })}
       </div>
   );
};

export default List;