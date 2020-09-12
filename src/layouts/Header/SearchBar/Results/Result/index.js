import React from 'react';
import PropTypes from 'prop-types';

Result.propTypes = {
    resultData: PropTypes.object,
}

Result.defaultProps = {
    resultData: [],
}


function Result(props) {
    const {resultData} = props;
    const {name:title,artist,thumb:thumbnail} = resultData;
    return (
        <div className="result">
            <div className="thumbnail">
                <img src={'https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/' + thumbnail} width="50px"></img>
            </div>
            <div className="info">
                <p className="title">{title}</p>
                <p className="artist">{artist}</p>
            </div>
        </div>
    );
}

export default Result;