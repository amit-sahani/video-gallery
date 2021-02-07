import React from 'react';
import VideoItem from './VideoItem';

const VideosList = props => {

    const videolist = (props.videos).map( (video) => {
        return <VideoItem video={video}/>
    });

    return (
        <div style={{paddingTop: '20px'}} className="ui relaxed divided list">
            {videolist}
        </div>
    );
}

export default VideosList;