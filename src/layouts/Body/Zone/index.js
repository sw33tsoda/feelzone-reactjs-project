import React from 'react';
import CarouselSlider from './CarouselSlider';
import ListAlbum from './ListAlbum';
import {mostListenedAlbums,latestAlbums,genre, trending} from './Data.js';
import Genre from './Genre';
import Trending from './Trending';

function Zone(props) {
    return (
        <div className="zone">
            <CarouselSlider></CarouselSlider>
            <ListAlbum data={mostListenedAlbums} title="MOST LISTENED ALBUMS"></ListAlbum>
            <Trending data={trending}></Trending>
            <ListAlbum data={latestAlbums} title="LATEST ALBUMS"></ListAlbum>
            <Genre data={genre} title="GENRES"></Genre>
            
        </div>
    );
}

export default Zone;