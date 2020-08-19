import React, { useEffect } from 'react';
import './Features.scss';
import { Container, Row, Col } from 'reactstrap';
import Feature from './Feature';
import WOW from 'wowjs';


function Features(props) {

    useEffect(() => {
        new WOW.WOW().init();
    },[]);

    const WOW_delay = 0 + "s";
    const WOW_duration = 1 + "s";

    return (
        <div className="intro__features wow slideInLeft" data-wow-delay={WOW_delay} data-wow-duration={WOW_duration}>
            <Container>
                <Row>
                    <Col sm="12" md="4">
                        <Feature title="AI" sub_title="Artificial Intelligence" description="Artificial intelligence in real-time communications has the potential to greatly improve both video and audio quality. By dynamically altering the video and audio in real-time communication, the quality and reliability of the call can be enhanced to enrich the user experience."></Feature>
                    </Col>
                    <Col sm="12" md="4">
                        <Feature title="F-Point" sub_title="Feelzone's virtual currency" description="F-Point is virtual currency which is created by Feelzone Group. Speaking of F-Point uses, it can be use to purchase songs and upgrade your membership."></Feature>
                    </Col>
                    <Col sm="12" md="4">
                        <Feature title="Editor" sub_title="Music editor" description="The music editor is a type of sound editor in film or other multimedia productions (e.g. video or games) responsible for compiling, editing, and syncing music during the production of a soundtrack."></Feature>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Features;