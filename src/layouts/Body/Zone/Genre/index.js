import React from 'react';
import './Genre.scss';
import ContentTitle from '../ContentTitle';
import PropTypes from 'prop-types';
import { Row, Container, Col } from 'reactstrap';
import GenreItemProp from './GenreProp';
import { hotTags } from '../Data';

Genre.propTypes = {
    data : PropTypes.array,
    title : PropTypes.string,
}

Genre.defaultProps = {
    data : [],
    title : 'untitled',
}

function Genre(props) {
    const {data:items,title} = props;

    return (
        <div className="zone__genres">
            <ContentTitle title={title}></ContentTitle>
            <Container>
                <Row>
                    {items.map((item,index) => <Col className="genre-item" sm="6" md="6" lg="2" key={index}>
                        <GenreItemProp item={item}></GenreItemProp>
                    </Col>)}
                </Row>
                <div className="hot-tags">
                    {hotTags.map((tag,index) => <a key={index} className="tag" href="# ">{tag}</a>)}
                </div>
            </Container>
        </div>
    );
}

export default Genre;