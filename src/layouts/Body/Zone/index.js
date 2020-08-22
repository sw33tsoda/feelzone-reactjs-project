import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import CarouselSlider from './CarouselSlider';
import ListAlbum from './ListAlbum';

function Zone(props) {


    return (
        <div className="zone">
            <Container>
                <Row>
                    <CarouselSlider></CarouselSlider>
                    <ListAlbum></ListAlbum>
                </Row>
            </Container>
        </div>
    );
}

export default Zone;