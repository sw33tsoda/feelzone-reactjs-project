import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Logo from './Logo';
import './Header.scss';
import SearchBar from './SearchBar';
import BodyNavigation from './BodyNavigation';
import { useLocation } from 'react-router-dom';

Header.propTypes = {};
Header.defaultProps = {};

function Header(props) {
    const {pathname} = useLocation();

    const handleSearchInput = () => {};


    return (
        <div className="header">
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <Logo logoTitle="Feelzone"/>
                    </Col>

                    <Col>
                        {pathname === '/zone' && <SearchBar inputPlaceholder="What's playing in your mind?" searchInput={handleSearchInput}/>}
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