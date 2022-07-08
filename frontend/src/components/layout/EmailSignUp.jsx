import React, { useState } from 'react';

// Styles
import { useStyles } from "../../assets/styles";
import {FaMailBulk} from "react-icons/fa";

const EmailSignUp = () => {
    const classes = useStyles();
    const [email, setEmail] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        console.log(email.value);
    }

    return (
        <div className={classes.emailSignUp}>
            <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email..." disabled/>
            <a onClick={(e) => handleClick(e)} href="">Sign Up</a>
        </div>
    );
};

export default EmailSignUp;
