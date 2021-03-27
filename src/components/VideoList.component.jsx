import React from 'react';
import VideoItem from './VideoItem.component';

const VideoList = (props) => {
    const renderedVideosList = props.videos.map((video) => {
        return (
            <VideoItem
                video={video}
                onVideoSelect={props.onVideoSelect}
                key={video.id.videoId}
            />
        );
    });

    return (
        <div className='ui relaxed divided list'>
            {props.videos.length} Videos Found!!!
            {renderedVideosList}
        </div>
    );
};

export default VideoList;
