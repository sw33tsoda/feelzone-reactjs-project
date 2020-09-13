import React, { useState, useLayoutEffect } from 'react';
import { Col, Row, Container } from 'reactstrap';
import classnames from 'classnames';
import PhoneImage from '../Headline/phone.png';
import "./Headline.scss";

function Headline(props) {
    const [size,setSize] = useState([0,0]);

    useLayoutEffect(() => {
        function updateSize() {
            const width = window.innerWidth;
            const height = window.innerHeight;
            setSize([width,height]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    },[]);  

    return (
        <div className="intro__headline">
            <Container>
                <Row className="align-items-center">
                    <Col sm="auto" md="6">
                        <div className={classnames("intro__headline__text", size[0] < 768 ? "intro__headline__text__hand-device" : "")}>
                            <h1>Listen and feel.</h1>
                            <p>The plant of English musical culture is a small and tender growth, for the very reason that those whose business it was to nurture it have failed to do so. It is said that England has never produced a virtuoso. This is possibly true, though surely Edward Elgar and Gustav Holst are virtuosi among composers. The virtuoso performer is the foaming crest of the wave, but the real power of the wave lies below the surface.</p>
                            <button>Get it now!</button>
                        </div>
                    </Col>
                    <Col sm="auto" md="6">
                        <div className={classnames("intro__headline__image", size[0] < 768 ? "intro__headline__image__hand-device" : "")}>
                            <img alt="" src={PhoneImage} width="75%"></img>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        
    );
}

export default Headline;