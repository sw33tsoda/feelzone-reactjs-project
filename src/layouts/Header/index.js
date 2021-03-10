import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Logo from './Logo';
import './Header.scss';
import SearchBar from './SearchBar';
import BodyNavigation from './BodyNavigation';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

Header.propTypes = {};
Header.defaultProps = {};

function Header(props) {
    const {pathname} = useLocation();

    const handleSearchInput = () => {};

    const [searchToggle,setSearchToggle] = useState(false);

    useEffect(() => {
        if (pathname === '/intro')
            setSearchToggle(false);
    },[pathname])


    return (
        <div className="header">
            <Container>
                <Row className="align-items-center">
                    {searchToggle ? (
                        <Col>
                            {pathname === '/zone' && <div className="search-wrapper">
                                <SearchBar inputPlaceholder="What's playing in your mind?" searchInput={handleSearchInput}/>
                                <p><FontAwesomeIcon icon={faTimes} onClick={() => setSearchToggle(!searchToggle)}/></p>
                            </div>}
                        </Col>
                    ) : (
                        <React.Fragment>
                            <Col>
                                <Logo logoTitle="Feelzone"/>
                            </Col>
                            <Col>
                                {pathname === '/zone' && <p className="search-icon"><FontAwesomeIcon icon={faSearch} onClick={() => setSearchToggle(!searchToggle)}/></p>}
                            </Col>
                        </React.Fragment>
                    )}
                    <Col>
                        <BodyNavigation/>
                    </Col>
                </Row>
            </Container>
        </div>
        
    );
}

export default Header;