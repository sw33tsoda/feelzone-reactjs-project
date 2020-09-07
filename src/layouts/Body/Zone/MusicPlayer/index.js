import React, { useState } from 'react';
import './MusicPlayer.scss';
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faBackward, faForward, faStop } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';

function MusicPlayer(props) {
    const {thumbnail,title,singer} = props;
    const [isPlaying,setIsPlaying] = useState(false);
    return (
        <div className="music-player">
            <div className={classnames('disc', {'playing': isPlaying === true})} style={{
                background:`url(${thumbnail})`,
            }}>

            </div>

            <div className="info">
                <p className="title">{title}</p>
                <p className="singer">{singer}</p>
                <div className="duration"></div>
                <div className="controls">
                    <FontAwesomeIcon icon={faPlay} size="1x" color="white" onClick={() => setIsPlaying(true)}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStop} size="1x" color="white" onClick={() => setIsPlaying(false)}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faBackward} size="1x" color="white"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faForward} size="1x" color="white"></FontAwesomeIcon>
                </div>
            </div>
        </div>
    );
}

export default MusicPlayer;