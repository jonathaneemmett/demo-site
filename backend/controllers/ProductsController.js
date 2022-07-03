const mongoose = require('mongoose');
const axios = require('axios');

// Import Model
const Products = require('../models/Product');

/**
 * @desc    Get all products
 * @return {Promise<void>}
 */
const getAll = async (req, res, next) => {

    try {
        // Mock get from db
        let products = await axios.get('http://localhost:3200/products', {headers: {'Content-Type': 'application/json'}}).catch((error) => console.error(error.message));

        if (products.status === 200) {
            res.status(200).json(products.data);
        }
    } catch (e) {
        res.status(500);
        next(new Error(e.message));
    }
}

/**
 * @desc    Get a single product
 * @return {Promise<void>}
 */
const getSingleProduct = async (req, res, next) => {
    res.status(200).json({ msg: 'Get a single product by id.' });
}

/**
 * @desc    Create a new product
 * @return {Promise<void>}
 */
const createProduct = async (req, res, next) => {
    res.status(200).json({ msg: 'Create a new product.' });
}

/**
 * @desc    Update a single product
 * @return {Promise<void>}
 */
const updateProduct = async (req, res, next) => {
    res.status(200).json({ msg: 'Update a single product by id.' });
}

/**
 * @desc    Delete a single product
 * @return {Promise<void>}
 */
const deleteProduct = async (req, res, next) => {
    res.status(200).json({ msg: 'Delete a single product by id.' });
}


// Export Modules
module.exports = { getAll, getSingleProduct, createProduct, updateProduct, deleteProduct }
