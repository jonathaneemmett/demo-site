import React from 'react';
import { FaStar } from 'react-icons/fa';

// Styles
import { useStyles } from "../../assets/styles";

const ProductItem = (data) => {
    const classes = useStyles();

    return (
        <div className={classes.productItem}>
            <div className={classes.productItemHeader}>
                <div className={classes.productName}>{data.data.name}</div>
                <div className={classes.productStars}><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
            </div>
            <div className={classes.productImage}><img src="http://placehold.jp/150x150.png" alt=""/></div>
            <div className={classes.productAddToCart}>
                <div className={classes.productPrice}>${data.data.price}</div>
                <div><button className={`${classes.btn} ${classes.btnPrimary}`}>Add To Bag</button></div>
            </div>
        </div>
    );
};

export default ProductItem;
