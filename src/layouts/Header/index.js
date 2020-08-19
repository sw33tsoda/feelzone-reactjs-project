import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import Logo from './Logo';
import './Header.scss';
import SearchBar from './SearchBar';
import BodyNavigation from './BodyNavigation';

Header.propTypes = {};
Header.defaultProps = {};

function Header(props) {

    const handleSearchInput = () => {
        //unused
    }

    return (
        <div className="header">
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <Logo logoTitle="Feelzone"/>
                    </Col>

                    <Col>
                        <SearchBar inputPlaceholder="What's playing in your mind?" searchInput={handleSearchInput}/>
                    </Col>

                    <Col>
                        <BodyNavigation/>
                    </Col>
                </Row>
            </Container>
        </div>
        
    );
}

export default Header;