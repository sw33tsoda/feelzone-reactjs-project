import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Footer.scss';
import { isMobile } from 'react-device-detect';

function Footer() {
    return (
        <React.Fragment>
            <h3 className="quote">“Without music, life would be a mistake” ― Friedrich Nietzsche</h3>
            <div className="footer">
                <Container>
                    <Row>
                        <Col>
                            <div className="footer__column">
                                <h2>Feelzone</h2>
                                <p>Our mission is to connect people around the world.</p>
                                <p>Contact : contact@feelzone.com</p>
                            </div>
                        </Col>

                        {!isMobile && <Col></Col>}

                        <Col>
                            <div className="footer__column">
                                <h5>Explore</h5>
                                <a href="# ">Home</a>
                                <a href="# ">Intro</a>
                                <a href="# ">Zone</a>
                            </div>
                        </Col>

                        <Col>
                            <div className="footer__column">
                                <h5>Address</h5>
                                <p>
                                    Portland, Oregon <br/>
                                    7000 NE Airport Way <br/>
                                    Portland, OR 97218, United States
                                </p>
                            </div>
                        </Col>
                        
                        <Col>
                            <div className="footer__column">
                                <h5>Follow</h5>
                                <a href="# ">Facebook</a>
                                <a href="# ">Twitter</a>
                                <a href="# ">Lotus</a>
                            </div>
                        </Col>

                        <Col>
                            <div className="footer__column">
                                <h5>Legal</h5>
                                <a href="# ">Term</a>
                                <a href="# ">Twitter</a>
                                <a href="# ">Lotus</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default Footer;