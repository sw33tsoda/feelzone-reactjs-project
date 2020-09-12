import React from 'react';
import PropTypes from 'prop-types';

GenreProp.propTypes = {
    item: PropTypes.object,
}

GenreProp.defaultProps = {
    item: {},
}

function GenreProp(props) {
    const {item} = props;

    return (
        <div className="zone__genres__genre">
            <img alt="" src={item.src} className="zone__genres__genre__picture" width="100%" height="100%"></img>
            <div className="zone__genres__genre__overlay">
                <p>{item.genre}</p>
            </div>
        </div>
    );
}

export default GenreProp;