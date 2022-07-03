const axios = require('axios');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
// Models
const User = require('../models/User');

const register = async (req, res, next) => {
    const { name, email, password } = req.body;
    console.log(password);
    // Validation
    if(!name || !email || !password){
        res.status(400);
        next(new Error('Please include all fields.'));
    }

    // Does User exit
    // MongoDB
    const users = await axios.get('http://localhost:3200/users', {headers: {'Content-Type': 'application/json'}});

    // Return single user from users
    const userExists = users.data.filter((u) =>  u.email === email)[0];
    // const userExists = await User.findOne({email}); // MongoDB

    // If user already exists, return with message
    if(userExists){
        res.status(400);
        next(new Error('User already exists.'));
    }

    // Hash password
    const hash = await argon2.hash(password);
    const user = await axios.post('http://localhost:3200/users', {name, email, password: hash},{headers: {'Content-Type': 'application/json'},});

    // Mongodb
    // const user = await User.create({
    //     name, email, hash
    // });

    // For MongoDb change user.data.id to user.data._id
    if(user) {
        res.status(201).json({
            id: user.data.id,
            name: user.data.name,
            email: user.data.email,
            token: generateToken(user.data.id)
        });
    } else {
        res.status(400);
        next(new Error('Invalid user data.'));
    }

}

/**
 * @desc    Login User
 * @return {Promise<*>}
 */
const login = async (req, res, next) => {
    const {email, password} = req.body;

    try {
        const users = await axios.get('http://localhost:3200/users', {headers: {'Content-Type': 'application/json'}});

        // Return single user from users
        const user = users.data.filter((u) =>  u.email === email)[0];

        // Verify user and password, then send token
        // MongoDB
        // const user = await User.findOne({ email });
        if(user && (await argon2.verify(user.password, password))){
            res.status(200).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id)
            });
        } else {
            res.status(401).json({ message: 'Username or password is incorrect' });
        }
    } catch (error) {
        res.status(401).json({ message: 'Username or password is incorrect' });
    }
}

// Helper Functions

/**
 * @desc    Generate JWT token
 */
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

module.exports = {
    register,
    login
}
