import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
// import classnames from 'classnames';


function BodyNavigation(props) {
    // const currentPath = window.location.pathname;
    return (
        <div className="header__body-navigation text-right">
            <Link to="/intro">
                <Button className='header__body-navigation__button' color="none">Intro</Button>
            </Link>
            <Link to="/zone">
                <Button className="header__body-navigation__button" color="none">Zone</Button>
            </Link>
        </div>
    );
}

export default BodyNavigation;