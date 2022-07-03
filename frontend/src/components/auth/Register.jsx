import React, { useState } from 'react';
import {Link} from "react-router-dom";
import { connect } from "react-redux";

// Actions
import { register } from "../../actions/authActions";

// Styles
import { useStyles } from "../../assets/styles";
import {Navigate} from "react-router";

const Register = ({user: {user}, register}) => {
    const classes = useStyles();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    // Errors
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [passwordConfirmError, setPasswordConfirmError] = useState(false);

    if(user) {
        return <Navigate to="/profile" replace />
    }

    // funcs
    const handleName = (e) => {
        e.preventDefault();
        setName(e.target.value);
        setNameError(false);
    }

    const handleEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
        setEmailError(false);
    }

    const handlePassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
        setPasswordError(false);
    }

    const handlePasswordConfirm = (e) => {
        e.preventDefault();
        setPasswordConfirm(e.target.value);
        setPasswordConfirmError(false);
    }

    const handleRegister = async (e) => {
        e.preventDefault();

        if(validate()){
            await register({name, email, password});
            setName("");
            setPassword("");
            setEmail("");
            setPasswordConfirm("");
        }
    }

    const validate = () => {
        let isValid = true;

        if(email === ""){
            setEmailError(true);
            isValid = false;
        }

        if(password === "") {
            setPasswordError(true);
            isValid = false;
        }

        if(password !== passwordConfirm){
            setPasswordConfirmError(true);
            isValid = false;
        }

        return isValid;
    }

    return (
        <div className={classes.formContainer}>
            <form onSubmit={(e) => handleRegister(e)} className={classes.horizontalForm}>
                <div className={classes.heading}>
                    <h5>Register</h5>
                    <p>Register to create events!</p>
                </div>
                <div className={ classes.formGroup }>
                    <input type="name" name="name" id="name" value={name} className={ classes.formControl } placeholder="Name" onChange={(e) => handleName(e)}/>
                    {nameError && <span className={classes.error}>Please enter a name!</span>}
                </div>
                <div className={ classes.formGroup }>
                    <input type="email" name="email" id="email" value={email} className={ classes.formControl } placeholder="Email" onChange={(e) => handleEmail(e)}/>
                    {emailError && <span className={classes.error}>Please enter an email!</span>}
                </div>
                <div className={ classes.formGroup }>
                    <input type="password" name="password" id="password" value={password} className={ classes.formControl } placeholder="Password" onChange={(e) => handlePassword(e)}/>
                    {passwordError && <span className={classes.error}>Please enter a password!</span>}
                </div>
                <div className={ classes.formGroup }>
                    <input type="password" name="passwordConfirm" id="passwordConfirm" value={passwordConfirm} className={ classes.formControl } placeholder="Confirm Password" onChange={(e) => handlePasswordConfirm(e)}/>
                    {passwordConfirmError && <span className={classes.error}>Passwords do not match!</span>}
                </div>
                <div className={ classes.formGroup }>
                    <button type="submit" className={`${classes.btn} ${classes.btnPrimary} ${classes.btnBlock}`}>Register</button>
                </div>
                <div className={ classes.formGroup }>
                    <p style={{ fontSize: ".9em" }}>Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps, {register})(Register);
