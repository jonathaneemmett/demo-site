import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";

// Components
import Pagination from "../pagination/Pagination";
import ProductItem from "../products/ProductItem";
import HeroCarousel from "../layout/HeroCarousel";
import EmailSignUp from "../layout/EmailSignUp";

// Styles
import { useStyles } from "../../assets/styles";


/**
 * @desc    Site Home Page
 * @return {JSX.Element}
 * @constructor
 */
const Home = ({ products: { products, filteredProducts, is_loading }, search }) => {
    const classes = useStyles();

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(3);

    // Funcs
    const paginate = (e, pageNumber) => {
        e.preventDefault();
        setCurrentPage(pageNumber);
    }

    // Current Page handling
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.length <= 0 && search === "" ?
                            products.slice(indexOfFirstProduct, indexOfLastProduct) :
                            filteredProducts.length > 0 && search !== "" ? filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct) :
                            [];

    // Handles Loading
    if(is_loading) {
        //TODO: setup spinner for loading
        return <div>Loading...</div>
    }

    return (
       <>
           <HeroCarousel />
           <EmailSignUp />
           <div className={classes.content}>
               <div className={classes.productContent}>
                   {currentProducts.length > 0 ? currentProducts.map((product) => (
                       <ProductItem key={product._id} data={product} />
                   )) : <div>No products to show!</div>}
               </div>
               <Pagination paginate={paginate} postsPerPage={productsPerPage} totalPosts={filteredProducts.length <= 0 ? products.length : filteredProducts.length} />
           </div>
       </>
    );
};

const mapStateToProps = (state) => ({
    products: state.products
})

export default connect(mapStateToProps, {})(Home);
