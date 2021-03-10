import React from 'react';
import CarouselSlider from './CarouselSlider';
import ListAlbum from './ListAlbum';
import {mostListenedAlbums,latestAlbums,genre, trending} from './Data.js';
import Genre from './Genre';
import Trending from './Trending';
import Navigation from './Navigation';
import MusicVideo from './MusicVideo';

function Zone(props) {
    return (
        <div className="zone">
            <Navigation></Navigation>
            <CarouselSlider></CarouselSlider>
            <ListAlbum data={mostListenedAlbums} title="MOST LISTENED ALBUMS"></ListAlbum>
            <ListAlbum data={latestAlbums} latestAlbums={true} title="LATEST ALBUMS"></ListAlbum>
            <Genre data={genre} title="GENRES"></Genre>
            <Trending data={trending}></Trending>
            <MusicVideo></MusicVideo>
        </div>
    );
}

export default Zone;