import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';


function BodyNavigation(props) {
    return (
        <div className="header__body-navigation text-right">
            <Link to="/intro">
                <Button className='header__body-navigation__button' color="none">Intro</Button>
            </Link>
            {isMobile && <Link to="/zone">
                <Button className="header__body-navigation__button" color="none">Zone</Button>
            </Link>}
        </div>
    );
}

export default BodyNavigation;