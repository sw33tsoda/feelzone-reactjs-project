import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import Results from './Results';

SearchBar.propTypes = {};
SearchBar.defaultProps = {};

function SearchBar() {

    const [searchInput,setSearchInput] = useState('');
    const [result,setResult] = useState([]);
    let debounce = null;

    useEffect(() => {
        const API = () => {
            Axios.get(`https://cors-anywhere.herokuapp.com/https://ac.mp3.zing.vn/complete?type=artist,song,key,code&num=500&query=${searchInput}`).then(response => {
                if (response.status === 200) {
                    if (response.data.data.length > 0) {
                        const data = response.data.data[0].song;
                        setResult(data.slice(0,10));
                    }
                }
            }).catch((error) => {
                console.log(error);
            });
        }

        API();
    }, [searchInput]);

    const handleSetSearchInput = async (event) => {
        const {value} = event.target;
        clearTimeout(debounce);
        debounce = setTimeout(() => {
            setSearchInput(value);
        },250);
    }

    const handleCancelSearching = () => {
        setResult([]);
    }

    return (
        <div className="header__search-bar text-center">
            <input 
                id="search-bar" 
                className="header__search-bar__input" 
                type="text" 
                placeholder="What's in your mind?" 
                onChange={handleSetSearchInput} 
                onBlur={handleCancelSearching}
                autoComplete="off"/>
            <Results resultsList={result}></Results>
        </div>
    );
}

export default SearchBar;