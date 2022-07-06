import React, { useState } from 'react';

// Styles
import { useStyles } from "../../assets/styles";

const SearchInput = ({search, setSearch, showSearch}) => {
    const classes = useStyles();

    return (
        <div className={classes.search} style={!showSearch ? {visibility: "hidden"} : {visibility: "visible"}}>
            <input type="text" name="search" id="search" value={search} onChange={(e) => setSearch(e.target.value)} className={classes.formControl}
                   placeholder="Search needs work still"  disabled/>
        </div>
    );
};

export default SearchInput;
