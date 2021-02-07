import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideosList from './VideoList';


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
            this.setState({videos: videos.data.items});
            
        } catch (error) {
            console.log(error)
        }
        
    }


    render(){
        return (<>
                    <div className="ui container">
                        <SearchBar onSubmitForm={this.getVideoList}/>
                    </div>
                    <div className="ui container">
                        <VideosList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                    </div>
                </>
            )
            }
}

export default App;