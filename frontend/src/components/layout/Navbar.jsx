import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

// Actions
import { logOut } from "../../actions/authActions";

// Components
import { FaBars } from "react-icons/fa";

// Styles
import { useStyles } from "../../assets/styles";

/**
 * @desc    Site Navbar
 * @return {JSX.Element}
 * @constructor
 */
const Navbar = ({user: {user}, logOut}) => {
    const classes = useStyles();

    // To handle closing of menu when link is clicked, primarily for mobile view or dropdowns.
    const [isChecked, setIsChecked] = useState(false);

    // funcs
    const handleLogout = async (e) => {
        e.preventDefault();
        await logOut();
        setIsChecked(!isChecked);
    }
    console.log(isChecked);
    return (
        <nav className={classes.navbar}>
            <div className={classes.logo}><Link to="/">Demo Site</Link></div>
            <ul className={classes.navLinks}>
                <input type="checkbox" name="checkboxToggle" id="checkboxToggle" checked={isChecked} onChange={() => setIsChecked(!isChecked)}/>
                <label htmlFor="checkboxToggle" className={classes.hamburger}><FaBars /></label>
                <div className={classes.menu}>
                    {user ? <li><a onClick={(e) => handleLogout(e)}>Logout</a></li> : <li><Link to="/login" onClick={() => setIsChecked(!isChecked)}>Login</Link></li>}
                </div>
            </ul>
        </nav>
    );
};

const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps, {logOut})(Navbar);
