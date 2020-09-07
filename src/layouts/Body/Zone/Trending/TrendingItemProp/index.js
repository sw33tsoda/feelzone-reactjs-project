import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones,faPlay } from '@fortawesome/free-solid-svg-icons';

function TrendingItemProp(props) {
    const {item,setCurrentPlaying} = props;
    return (
        <div className="trending-item" onClick={() => setCurrentPlaying(item)}>
            <div className="picture">
                <img src={item.thumbnail}></img>
                <FontAwesomeIcon icon={faPlay} color="white"></FontAwesomeIcon>
            </div>
            
            <div className="info">
                <p className="title">{item.title}</p>
                <p className="singer">{item.artists[0].name}</p>
                {/* <p className="views">{Intl.NumberFormat().format(item.total * 50)} <FontAwesomeIcon icon={faHeadphones}/></p> */}
            </div>
        </div>
    );
}

export default TrendingItemProp;