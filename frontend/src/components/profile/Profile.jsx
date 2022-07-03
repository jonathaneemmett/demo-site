import React from 'react';
import { connect } from "react-redux";

// Styles
import { useStyles } from "../../assets/styles";

const Profile = ({ user: {user}}) => {
    const classes = useStyles();

    return (
        <div className={classes.content}>
            <h1>Welcome: {user.name}</h1>
        </div>
    );
};

const mapStateToProps = (state) => ({
    products: state.products,
    user: state.user
})

export default connect(mapStateToProps, {})(Profile);
