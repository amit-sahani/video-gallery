import React from 'react';
import './VideoItem.css';

const VideoItem = props => {

    const playVideo = () => {
            props.onVideoSelect(props.video);
    }

    return (
        <div className="video-item item" onClick={playVideo.bind(this, props.video)}>
            <img className="ui image" src={props.video.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">{props.video.snippet.title}</div>
                
            </div>
        </div>
    );
}

export default VideoItem;