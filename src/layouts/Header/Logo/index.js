import React from 'react';
import PropTypes from 'prop-types';

Logo.propTypes = {
    logoTitle: PropTypes.string,
}

Logo.defaultProp = {
    logoTitle: "@Logo",
}

function Logo(props) {
    const { logoTitle } = props;
    return (
        <div className="header__logo">
            <h1 className="header__logo__title">{logoTitle}</h1>
        </div>
    );
}

export default Logo;
