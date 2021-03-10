import React, { useEffect, useState } from 'react';
import './Trending.scss';
import { Container, Row, Col } from 'reactstrap';
import TrendingItemProp from './TrendingItemProp';
import PropTypes from 'prop-types';
import ContentTitle from '../ContentTitle';
import Axios from 'axios';
import Top from './TopItemProp';
import classnames from 'classnames';
import MusicPlayer from '../MusicPlayer';

Trending.propTypes = {
    items : PropTypes.array,
}

Trending.defaultProps = {
    items : [],
}


function Trending() {
    const [items,setItems] = useState([]);
    const [topItems,setTopItems] = useState([]);
    const [currentPlaying,setCurrentPlaying] = useState({});
    const [currentPage,setCurrentPage] = useState(0);
    const [totalItems,setTotalItems] = useState(0);
    const itemsPerPage = 27;
    const totalPages = Math.ceil(totalItems/itemsPerPage);
    
    const Pagination = () => {
        const result = {pages:[]};
        for (let i = 0; i < totalPages; i++) {
            result.pages.push(
                <a 
                    href="# " 
                    className={classnames('page',{'current-page':i === currentPage})} 
                    onClick={(event) => {
                        event.preventDefault();setCurrentPage(i);
                    }}>{i+1}
                </a>
            );
        }
        return result.pages;
    }

    useEffect(() => {
        const API = () => {
            Axios.get('https://mp3.zing.vn/xhr/chart-realtime').then(response => {
                if (response.status === 200) {
                    const {data:{data:{song}}} = response;
                    setTopItems(song.slice(0,6));
                    setTotalItems(song.length);
                    setItems(song.slice(currentPage * itemsPerPage,(currentPage + 1) * itemsPerPage));
                }
            }).catch((error) => {
                console.log(error);
            });
        }
        API();
    },[currentPage]);

    const handleSetCurrentPlaying = async (song) => {
        const {thumbnail,title,performer} = song;
        setCurrentPlaying({
            thumbnail:thumbnail,
            title:title,
            singer:performer,
        });
    }

    return (
        <div className="trending">
            <ContentTitle title="TRENDING NOW"></ContentTitle>
            <Container>
                <Row>
                    <Col lg="7">
                        <Row className="list">
                            {items.map((item,index) => <Col key={index} sm="6" lg="4">
                                <TrendingItemProp item={item} setCurrentPlaying={handleSetCurrentPlaying}></TrendingItemProp>
                            </Col>)}
                        </Row>
                        <div className="pagination">
                            {Pagination().map((page,index) => <React.Fragment key={index}>{page}</React.Fragment>)}
                        </div>
                    </Col>

                    <Col lg="5">
                        <div className="top">
                            {topItems.map((item,index) => <Top item={item} setCurrentPlaying={handleSetCurrentPlaying} index={index} key={index}></Top>)}
                        </div>
                    </Col>
                </Row>
            </Container>
            {Object.keys(currentPlaying).length > 0 && <MusicPlayer 
                thumbnail={currentPlaying.thumbnail}
                title={currentPlaying.title}
                singer={currentPlaying.singer}
            ></MusicPlayer>}
        </div>
    );
}

export default Trending;