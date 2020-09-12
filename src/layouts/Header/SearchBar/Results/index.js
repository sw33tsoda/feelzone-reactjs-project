import React from 'react';
import PropTypes from 'prop-types';
import Result from './Result';

Results.propTypes = {
    resultsList: PropTypes.array,
}

Results.defaultProps = {
    resultsList: [],
}

function Results(props) {
    const {resultsList} = props;
    return (
        <div className="results">
            {resultsList && resultsList.map((item,index) => <Result resultData={item} key={index}></Result>)}
        </div>
    );
}

export default Results;
