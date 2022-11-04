import React from 'react';
import { MdSearch } from 'react-icons/md'


const Search = ({ handleSearchTitle }) => {
    return (
        <div className='search'>
            <MdSearch className="search-icon" />
            <input 
            onChange={(event) => 
                handleSearchTitle(event.target.value)
            } 
            type="text" 
            placeholder='Search...'></input>
        </div>
    )
}


export default Search;