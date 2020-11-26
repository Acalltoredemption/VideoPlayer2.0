import React from 'react';
import './VideoItem.css';

const VideoItem = ({video, onVideoSelect}) => {
    return (
    <div className="item video-item" onClick={() => onVideoSelect(video)} >
       <div className="thumbnail-container">
       <img className="ui image" src={video.snippet.thumbnails.medium.url} alt="Music Video Thumbnail" /> 
      </div>

       <div className="content">
      <div className="header"> {video.snippet.title}</div>
       </div>
     </div>
        );
};

export default VideoItem;