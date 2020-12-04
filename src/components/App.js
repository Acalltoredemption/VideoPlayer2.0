import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import StinoTube from './images/StinoTube.png';
import useVideos from '../hooks/useVideos';

const App = () => {
 
 const [selectedVideo, setsSelectedVideo] = useState(null);
 const [videos, search] = useVideos('cars');



useEffect(() => {
    setsSelectedVideo(videos[0]);
}, [videos]);


    
    return( 
    <div className="ui container">
            <img alt="StinoTube Logo" src={StinoTube} />
            <SearchBar onFormSubmit={search} />
            <div className="ui grid">
                <div className="ui row">
            <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={(video) => setsSelectedVideo(video)} />
            </div>
            </div>
            </div>
        </div>
        );
    

 };







export default App;