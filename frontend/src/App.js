import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Actions
import { loadProducts } from "./actions/productsActions";

// Components
import Home from "./components/home/Home";
import Navbar from "./components/layout/Navbar";
import Footer from './components/layout/Footer';
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Profile from "./components/profile/Profile";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Page404 from "./error/404";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HeroCarousel from "./components/layout/HeroCarousel";

// Styles
import { useStyles } from "./assets/styles";

/**
 * @desc    Main App
 * @return {JSX.Element}
 * @constructor
 */
const App = ({products: { products }, loadProducts}) => {
    const classes = useStyles();

    // Will be required when I get the search piece in.
    const [search, setSearch] = useState("");

    // Loads products if they are empty
    useEffect(() => {
        if(products.length <= 0 ){
            loadProducts();
        }
    }, [products])

  return (
    <BrowserRouter>
        <Navbar />
        <HeroCarousel />
        <main className={classes.container} >
        <Routes>
            <Route exact path="/" element={<Home search={search} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={
                <ProtectedRoute>
                    <Profile />
                </ProtectedRoute>
            } />
            <Route path="*" element={<Page404 />} />
        </Routes>
        </main>
        <Footer />
        <ToastContainer
            position="top-center"
            autoClose={6000}
            closeOnClick

        />
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
    products: state.products
})

export default connect(mapStateToProps,  { loadProducts })(App);
