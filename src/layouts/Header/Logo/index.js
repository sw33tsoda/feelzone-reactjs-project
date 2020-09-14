import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

Logo.propTypes = {
    logoTitle: PropTypes.string,
}

Logo.defaultProp = {
    logoTitle: "@Logo",
}

function Logo(props) {
    const { logoTitle } = props;
    const history = useHistory();

    const handleRedirectToHomepage = () => {
        history.push('/');
    }
    return (
        <div className="header__logo">
            <h1 className="header__logo__title" onClick={handleRedirectToHomepage}>{logoTitle}</h1>
        </div>
    );
}

export default Logo;
