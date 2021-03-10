import React from 'react';
import ContentTitle from '../ContentTitle';
import { Container, Row, Col } from 'reactstrap';
import './MusicVideo.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlay} from '@fortawesome/free-solid-svg-icons';

function MusicVideo() {
    return (
        <div className="music-video">
            <ContentTitle title="MUSIC VIDEO"/>
            <Container>
               <div className="wrapper">

                    <div className="video"> 
                        <img alt="" className="thumbnail" src="https://i.ytimg.com/vi/-FlxM_0S2lA/maxresdefault.jpg" width="100%"></img>
                        <div className="overlay">
                            <FontAwesomeIcon icon={faPlay} color="white" size="1.75x"/>
                        </div>
                        <div className="background-overlay"/>
                    </div>
        
                    <div className="video">
                        <img alt="" className="thumbnail" src="https://i.scdn.co/image/d73f8e8096a7c8c9f7730bd37aacfd99c20ff393" width="100%"></img>
                        <div className="overlay">
                            <FontAwesomeIcon icon={faPlay} color="white" size="1.75x"/>
                        </div>
                        <div className="background-overlay"/>
                    </div>
                
                    <div className="video">
                        <img alt="" className="thumbnail" src="https://www.elleman.vn/wp-content/uploads/2019/07/02/so%CC%9Bn-tu%CC%80ng-mtp-ha%CC%83y-trao-cho-anh-outfit-feature.jpg" width="100%"></img>
                        <div className="overlay">
                            <FontAwesomeIcon icon={faPlay} color="white" size="1.75x"/>
                        </div>
                        <div className="background-overlay"/>
                    </div>

                    <div className="video">
                        <img alt="" className="thumbnail" src="https://vnn-imgs-f.vgcloud.vn/2020/08/19/09/phuong-ly-ngot-ngao-ngay-tro-lai-2.jpg" width="100%"></img>
                        <div className="overlay">
                            <FontAwesomeIcon icon={faPlay} color="white" size="1.75x"/>
                        </div>
                        <div className="background-overlay"/>
                    </div>
        
                    <div className="video">
                        <img alt="" className="thumbnail" src="https://i.pinimg.com/originals/59/de/75/59de75bf1618bea044cec281116c7d0f.jpg" width="100%"></img>
                        <div className="overlay">
                            <FontAwesomeIcon icon={faPlay} color="white" size="1.75x"/>
                        </div>
                        <div className="background-overlay"/>
                    </div>
            
                    <div className="video">
                        <img alt="" className="thumbnail" src="https://avatar-nct.nixcdn.com/singer/avatar/2019/07/22/f/e/a/2/1563758181487_600.jpg" width="100%"></img>
                        <div className="overlay">
                            <FontAwesomeIcon icon={faPlay} color="white" size="1.75x"/>
                        </div>
                        <div className="background-overlay"/>
                    </div>

                    <div className="video">
                        
                        <img alt="" className="thumbnail" src="https://static2.yan.vn/YanNews/2167221/201911/amee-gay-tranh-cai-voi-phat-ngon-ve-top-treding-youtube-8aaf11a7.jpg" width="100%"></img>
                        <div className="overlay">
                            <FontAwesomeIcon icon={faPlay} color="white" size="1.75x"/>
                        </div>
                        <div className="background-overlay"/>
                    </div>
                
                    <div className="video">
                        <img alt="" className="thumbnail" src="https://media.laodong.vn/Storage/NewsPortal/2020/3/13/790768/Viruss.jpg" width="100%"></img>
                        <div className="overlay">
                            <FontAwesomeIcon icon={faPlay} color="white" size="1.75x"/>
                        </div>
                        <div className="background-overlay"/>
                    </div>
            
                    <div className="video">
                        <img alt="" className="thumbnail" src="https://avatar-nct.nixcdn.com/singer/avatar/2018/06/27/e/8/8/5/1530074198530_600.jpg" width="100%"></img>
                        <div className="overlay">
                            <FontAwesomeIcon icon={faPlay} color="white" size="1.75x"/>
                        </div>
                        <div className="background-overlay"/>
                    </div>
            
                    <div className="video">
                        <img alt="" className="thumbnail" src="https://i1.sndcdn.com/avatars-000039908590-d1t19u-t500x500.jpg" width="100%"></img>
                        <div className="overlay">
                            <FontAwesomeIcon icon={faPlay} color="white" size="1.75x"/>
                        </div>
                        <div className="background-overlay"/>
                    </div>
                
                    <div className="video">
                        <img alt="" className="thumbnail" src="https://dep.com.vn/wp-content/uploads/2019/04/kham-pha-Billie-Eilish-2.jpg" width="100%"></img>
                        <div className="overlay">
                            <FontAwesomeIcon icon={faPlay} color="white" size="1.75x"/>
                        </div>
                        <div className="background-overlay"/>
                    </div>
                
                    <div className="video">
                        <img alt="" className="thumbnail" src="https://vcdn-giaitri.vnecdn.net/2020/08/10/binz-12-3426-1597048098.jpg" width="100%"></img>
                        <div className="overlay">
                            <FontAwesomeIcon icon={faPlay} color="white" size="1.75x"/>
                        </div>
                        <div className="background-overlay"/>
                    </div>
               </div>
            </Container>
        </div>
    );
}

export default MusicVideo;