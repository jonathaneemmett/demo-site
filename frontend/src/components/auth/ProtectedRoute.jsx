import React from 'react';
import { connect } from "react-redux";
import {Navigate} from "react-router";

/**
 * @desc    Protected route checks auth
 * @return {JSX.Element|*}
 * @constructor
 */
const ProtectedRoute = ({user: { user }, children}) => {
    if(!user) {
        return <Navigate to="/login" replace />
    }

    return children;
};

const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps)(ProtectedRoute);
