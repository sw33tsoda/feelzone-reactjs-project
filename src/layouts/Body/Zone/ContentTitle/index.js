import React from 'react';
import { Container } from 'reactstrap';
import './ContentTitle.scss';

function ContentTitle({title}) {
    return (
        <Container>
            <h2 className="zone__title">{title}</h2>
        </Container>
    );
}

export default ContentTitle;