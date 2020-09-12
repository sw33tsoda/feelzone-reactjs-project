import React from 'react'; 
import { Row, Col, Container } from 'reactstrap';
import './ListAlbum.scss'
import ContentTitle from '../ContentTitle';
import PropTypes from 'prop-types';
import classnames from 'classnames';

ListAlbum.propTypes = {
    data : PropTypes.array,
    title : PropTypes.string,
}

ListAlbum.defaultProps = {
    data : [],
    title : 'untitled',
}


function ListAlbum(props) {
    const {data:items,title,latestAlbums} = props;

    return (
        <div className="zone__list-album">
            <ContentTitle title={title}></ContentTitle>
            <Container>
                <Row>
                    {items && items.map((item,index) => <Col key={index}>
                        <div className="zone__list-album__album">
                            <img alt="" className="zone__list-album__album__picture" src={item.src} width="100%" height="100%"/>
                            <div className={classnames("zone__list-album__album__overlay",{"latest_albums":latestAlbums === 1})}>
                                <p>{item.title}</p>
                            </div>
                        </div>
                    </Col>)}
                </Row>
            </Container>
        </div>
    )
}

export default ListAlbum;