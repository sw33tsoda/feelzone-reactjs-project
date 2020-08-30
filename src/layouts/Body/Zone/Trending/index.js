import React, { useEffect, useState } from 'react';
import './Trending.scss';
import { Container, Row, Col } from 'reactstrap';
import TrendingItemProp from './TrendingItemProp';
import PropTypes from 'prop-types';
import ContentTitle from '../ContentTitle';
import Axios from 'axios';
import Top from './TopItemProp';
import {isMobile} from 'react-device-detect';
import classnames from 'classnames';

Trending.propTypes = {
    items : PropTypes.array,
}

Trending.defaultProps = {
    items : [],
}


function Trending() {
    const [items,setItems] = useState([]);
    const [currentPage,setCurrentPage] = useState(0);
    const [totalItems,setTotalItems] = useState(0);
    const itemsPerPage = 27;
    const totalPages = Math.ceil(totalItems/itemsPerPage);
    
    const Pagination = () => {
        let result = [];
        for (let i = 0; i < totalPages; i++) {
            result.push(<a className={classnames('page',{'current-page':i === currentPage})} onClick={() => setCurrentPage(i)}>{i+1}</a>);
        }

        if (currentPage > 0)
            result.unshift(<a className="page" onClick={() => setCurrentPage(currentPage-1)}>P</a>);
        if (totalPages - 1 > currentPage)
            result.push(<a className="page" onClick={() => setCurrentPage(currentPage+1)}>N</a>);

        return result;
    }

    console.log(currentPage,totalPages);

    useEffect(() => {
        const API = () => {
            Axios.get('http://mp3.zing.vn/xhr/chart-realtime').then(response => {
                if (response.status === 200) {
                    const {data:{data:{song}}} = response;
                    setTotalItems(song.length);
                    setItems(song.slice(currentPage * itemsPerPage,(currentPage + 1) * itemsPerPage));
                }
            }).catch((error) => {
                console.log(error);
            });
        }
        API();
    },[currentPage]);

    return (
        <div className="trending">
            <ContentTitle title="TRENDING NOW"></ContentTitle>
            <Container>
                <Row>
                    <Col lg="7">
                        <Row>
                            {items.map((item,index) => <Col key={index} sm="6" lg="4">
                                <TrendingItemProp item={item}></TrendingItemProp>
                            </Col>)}
                        </Row>
                        <div className="pagination">
                            {Pagination().map((page,index) => <React.Fragment key={index}>{page}</React.Fragment>)}
                        </div>
                    </Col>

                    <Col lg="5">
                        <div className="top" style={
                            !isMobile && {
                                borderLeft: '1px #E91E63 dashed',
                                paddingLeft: '1em'
                            }
                        }>
                            {items.slice(0,6).map((item,index) => <Top item={item} index={index} key={index}></Top>)}
                        </div>
                    </Col>
                </Row>
                
            </Container>
        </div>
    );
}

export default Trending;