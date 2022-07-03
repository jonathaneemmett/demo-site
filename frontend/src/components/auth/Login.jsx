import React, {useEffect, useState} from 'react';
import { connect } from "react-redux";
import { Navigate } from 'react-router';


import { login } from "../../actions/authActions";

// Styles
import { useStyles } from "../../assets/styles";
import {Link} from "react-router-dom";

const Login = ({user: { user, is_loading }, login}) => {
    const classes = useStyles();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Errors
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    if(user){
        return <Navigate to="/profile" replace />
    }

    // funcs
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

    const handleLogin = async (e) => {
        e.preventDefault();

        if(validate()){
            await login({email, password});
            setPassword("");
            setEmail("");
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

        return isValid;
    }

    return (
        <div className={classes.formContainer}>
            <form onSubmit={(e) => handleLogin(e)} className={classes.horizontalForm}>
                <div className={classes.heading}>
                    <h5>Login</h5>
                    <p>Please login to see your account!</p>
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
                    <button type="submit" className={`${classes.btn} ${classes.btnPrimary} ${classes.btnBlock}`} disabled={emailError || passwordError ? true : false}>Login</button>
                </div>
                <div className={ classes.formGroup }>
                    <p style={{ fontSize: ".9em" }}>Need an account? <Link to="/register">Register today!</Link></p>
                </div>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps, { login })(Login);
