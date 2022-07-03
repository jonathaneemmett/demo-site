import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";

// Styles
import { useStyles } from "../../assets/styles";
import Pagination from "../pagination/Pagination";
import ProductItem from "../products/ProductItem";

const Home = ({ products: { products, filteredProducts, is_loading }, search }) => {
    const classes = useStyles();

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(10);

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

    if(is_loading) {
        //TODO: setup spinner for loading
        return <div>Loading...</div>
    }

    return (
       <>
           <div className={classes.productContent}>
               {currentProducts.length > 0 ? currentProducts.map((product) => (
                    <ProductItem key={product._id} data={product} />
               )) : <div>No products to show!</div>}
           </div>
           <Pagination paginate={paginate} postsPerPage={productsPerPage} totalPosts={filteredProducts.length <= 0 ? products.length : filteredProducts.length} />
       </>
    );
};

const mapStateToProps = (state) => ({
    products: state.products
})

export default connect(mapStateToProps, {})(Home);
