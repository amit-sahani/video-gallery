import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';



class App extends React.Component {
    
    state = {videos: []}

    getVideoList = async (query) => {
        try {
            const videos = await youtube.get("/search", {
                params: {
                    q: query
                }
            });
            this.setState({videos: videos.data.items});
            console.log(videos.data.items);
            
        } catch (error) {
            console.log(error)
        }
        
    }


    render(){
        return (<div className="ui container">
                    <SearchBar onSubmitForm={this.getVideoList}/>
                    No. of videos fetched are {this.state.videos.length}
                </div>
            )
            }
}

export default App;