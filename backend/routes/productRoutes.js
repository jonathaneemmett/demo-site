const { Router } = require('express');
const { getAll, getSingleProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/ProductsController');

const router = Router();

/**
 * @desc    Get all products
 * @access  PUBLIC
 * @return  JSON
 */
router.get('/', getAll);

/**
 * @desc    Get a single product by Id
 * @param   id
 * @access  PUBLIC
 * @return  JSON
 */
router.get('/:id', getSingleProduct);

/**
 * @desc    Create a new product
 * @access  PRIVATE
 * @return  JSON
 */
router.post('/', createProduct);

/**
 * @desc    Update a single product
 * @param   id
 * @access  PRIVATE
 * @return  JSON
 */
router.put('/:id', updateProduct);

/**
 * @desc    Delete a product
 * @param   id
 * @access  PRIVATE
 * @return  JSON
 */
router.delete('/:id', deleteProduct);


// export modules
module.exports = router;
