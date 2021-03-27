import React from 'react';
import styles from './VideoItem.module.css';

const VideoItem = (props) => {
    return (
        <div
            className={`${styles.VideoItem} item`}
            onClick={() => {
                props.onVideoSelect(props.video);
            }}>
            <img
                src={props.video.snippet.thumbnails.medium.url}
                alt={props.video.snippet.title}
                className={`${styles.VideoItemImage} ui image`}
            />
            <div className='content'>
                <div className='header'>{props.video.snippet.title}</div>
            </div>
        </div>
    );
};

export default VideoItem;
