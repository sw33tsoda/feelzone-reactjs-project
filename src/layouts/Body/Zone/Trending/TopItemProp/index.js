import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones,faPlay } from '@fortawesome/free-solid-svg-icons';

function Top(props) {
    const {item,index} = props;
    return (
        <div className="top-item">
            <div className="left">
                <img className="picture" src={item.thumbnail}></img>
                <FontAwesomeIcon icon={faPlay} color="white"/>
                <h2 className="position">{index + 1}</h2>
                <div className="info">
                    <h3 className="title">{item.title}</h3>
                    <p className="singer">{item.artists[0].name}</p>
                </div>
            </div>
            <div className="views">
                <p>{Intl.NumberFormat().format(item.total * 50)} <FontAwesomeIcon icon={faHeadphones}/></p>
            </div>
        </div>
    );
}

export default Top;