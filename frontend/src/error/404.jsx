import React from 'react';

// Styles
import { useStyles } from "../assets/styles";

/**
 * @desc    404 Error Page
 * @return {JSX.Element}
 * @constructor
 */
const Page404 = () => {
    const classes = useStyles();

    return (
        <div className={classes.errorPageContainer}>That route seems to not go anywhere!</div>
    );
};

export default Page404;
