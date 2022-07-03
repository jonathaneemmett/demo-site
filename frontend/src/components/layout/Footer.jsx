import React from 'react';

// Styles
import {useStyles} from "../../assets/styles";
import {Link} from "react-router-dom";

/**
 * @desc    Site Footer
 * @return {JSX.Element}
 * @constructor
 */
const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.footer}>
            {new Date().getFullYear()} &copy; <Link to="/" >Demo Site</Link> an <a href="/" >Jonathan E. Emmett Site</a>
        </div>
    );
}

export default Footer;
