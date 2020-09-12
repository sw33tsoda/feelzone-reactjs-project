import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

Feature.propTypes = {
    title: PropTypes.string,
    sub_title: PropTypes.string,
    description: PropTypes.string,
}

Feature.defaultProps = {
    title:'Blah blah blah',
    sub_title:'Blah blah blah',
    description:'Blah blah blah blah blah blah',
}

function Feature(props) {
    const {title,sub_title,description} = props;
    return (
        <div className={classnames("intro__features__feature",title)}>
            <h1 className="intro__features__feature__title">{title}</h1>
            <p className="intro__features__feature__sub-title">{sub_title}</p>
            <p className="intro__features__feature__description">{description}</p>
            <a href="# " className="intro__features__feature__button">Learn more</a>
        </div>
    );
}

export default Feature;