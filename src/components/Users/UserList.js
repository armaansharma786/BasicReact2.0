

import React from "react";
import Card from "../UI/Card";
import classes from './UserList.module.css';

const UserList = props => {
    console.log("props=--------<", props.userList);
    return (
        <Card className={classes.users}>
        <ul>
            {props.userList && props.userList.map((user, index)=>
             <li key={index}>
                {user.name} ({user.age} years old)
             </li>
             )
            }
        </ul>
        </Card>
    )
}

export default UserList;