import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import StinoTube from './images/StinoTube.png';


const App = () => {
 const [videos, setVideos] = useState([]);
 const [selectedVideo, setsSelectedVideo] = useState(null);


 useEffect(() => {
    onTermSubmit('buildings');
 }, []);

 const onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
         params: {
             q: term
         }
     });
     

     setVideos(response.data.items);
     setsSelectedVideo(response.data.items[0]);
 };
    const onVideoSelect = (video) => {
        setsSelectedVideo(video);
    };
    
    return( 
    <div className="ui container">
            <img alt="StinoTube Logo" src={StinoTube} />
            <SearchBar onFormSubmit={onTermSubmit} />
            <div className="ui grid">
                <div className="ui row">
            <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={onVideoSelect} />
            </div>
            </div>
            </div>
        </div>
        );
    

 };







export default App;