import React from 'react';
import './Search.css';

const Search = () => {
    return(
        <div id="search">
            <div class="logo">
                <span>D!</span>
            </div>
            <div id="heading">
                Find Best Place Near You
            </div>
            <div class="dropdown">
                <select>
                    <option>-----SELECT YOUR CITY-----</option>
                    <option>Delhi</option>
                    <option>Mumbai</option>
                </select>
                <select id="restSelect">
                    <option>-----SELECT YOUR RESTAURANT-----</option>
                    <option>Wow Momos</option>
                    <option>Pret A Manager</option>
                </select>
            </div>
        </div>
    )
}

export default Search;