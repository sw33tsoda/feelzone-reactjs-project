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
                <div className="wrapper">
                    {items.map((item,index) =>
                        <GenreItemProp item={item}></GenreItemProp>
                    )}
                </div>
                <div className="hot-tags">
                    {hotTags.map((tag,index) => <a key={index} className="tag" href="# ">{tag}</a>)}
                </div>
            </Container>
        </div>
    );
}

export default Genre;