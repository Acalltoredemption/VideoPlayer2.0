import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(term);
        // TODO: Make sure we call callback from parent component
    };


    return(
        <div className="search-bar ui segment searchsize">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label className="search-label">Video Search</label>
                    <input 
                    value={term}
                     type="text"
                     onChange={(event) => setTerm(event.target.value)}
                     />
                </div>
            </form>
        </div>
        );
};

export default SearchBar;