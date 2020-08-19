import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup } from 'reactstrap';

SearchBar.propTypes = {};
SearchBar.defaultProps = {};

function SearchBar(props) {
    const { inputPlaceholder,searchInput } = props;
    return (
        <div className="header__search-bar text-center">
            <input id="search-bar" className="header__search-bar__input" type="text" placeholder={inputPlaceholder} onChange={searchInput}/>
        </div>
    );
}

export default SearchBar;