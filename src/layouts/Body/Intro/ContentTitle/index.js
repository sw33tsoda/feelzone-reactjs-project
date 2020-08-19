import React, { useEffect } from 'react';
import "./ContentTitle.scss";
import WOW from 'wowjs';
import { Container } from 'reactstrap';

function ContentTitle(props) {
    const {title,sub_title,textAlign} = props;

    useEffect(() => {
        new WOW.WOW().init();
    },[]);

    return (
        <Container>
            <div className="intro__content-title wow fadeIn center" data-wow-delay="0" data-wow-duration="2s" style={{textAlign:textAlign}}>
                <h1>{title}</h1>
                <p>{sub_title}</p>
            </div>
        </Container> 
    )
}

export default ContentTitle;