import React from 'react';

// Styles
import { useStyles } from "../../assets/styles";

/**
 * @desc    Used to paginate items
 * @param postsPerPage
 * @param totalPosts
 * @param paginate
 * @returns {JSX.Element}
 * @constructor
 */
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const classes = useStyles();

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className={classes.pagination}>
                {pageNumbers.length > 1 && pageNumbers.map((number) => (
                    <li key={number} className={classes.pageItem}>
                        <a onClick={(e) => paginate(e, number)} className={classes.pageItemLink}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};


export default Pagination;
