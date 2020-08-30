import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones,faPlay } from '@fortawesome/free-solid-svg-icons';

function TrendingItemProp(props) {
    const {item} = props;
    return (
        <div className="trending-item">
            <div className="picture">
                <img src={item.thumbnail}></img>
                <FontAwesomeIcon icon={faPlay} color="white"></FontAwesomeIcon>
            </div>
            
            <div className="info">
                <p className="title">{item.title}</p>
                <p className="singer">{item.artists[0].name}</p>
            </div>
        </div>
    );
}

export default TrendingItemProp;