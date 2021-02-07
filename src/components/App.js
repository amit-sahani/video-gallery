import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideosList from './VideoList';
import VideoDetail from './VideoDetail';


class App extends React.Component {
    
    state = {videos: [], selectedVideo: null }

    onVideoSelect = video =>{
        this.setState({selectedVideo: video});
    }

    getVideoList = async (query) => {
        try {
            const videos = await youtube.get("/search", {
                params: {
                    q: query
                }
            });
            this.setState({
                videos: videos.data.items,
                selectedVideo: videos.data.items[0]
            });
            
        } catch (error) {
            console.log(error)
        }
        
    }


    render(){
        return (<div className="ui container">
                    <SearchBar onSubmitForm={this.getVideoList} />
                    <div className="ui grid">
                        <div className="ui row">
                            <div className="ten wide column">
                                <VideoDetail video={this.state.selectedVideo} />
                            </div>
                            <div className="six wide column">
                                <VideosList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            )}
}

export default App;