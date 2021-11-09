import React from "react";
import Card from "../UI/Card";

import classes from './Users.module.css';

const Users = (props) => {
    return (
        <Card className={classes.users}>
            {!props.users && <span>Nessun utente attualmente in archivio</span>}
            {props.users && props.users.map((user) =>
                <li id={user.id} key={user.id}>
                    {user.name} ({user.age} anni)
                </li>
            )}
        </Card>
    )
}

export default Users