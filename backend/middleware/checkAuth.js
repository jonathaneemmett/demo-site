const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Check user token
const checkAuth = async (req, res, next) => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try{
            token = req.headers.authorization.split(' ')[1];
            // verify the token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            // get the user
            req.user = await User.findById(decoded.id).select('-password');
            next();
        } catch (e) {
            res.status(401);
            return next(new Error('Not Authorized'));
        }
    }
}

module.exports = { checkAuth }
