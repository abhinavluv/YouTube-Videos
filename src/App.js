import React, { Component } from 'react';
import './App.css';
import youtube from './apis/youtube';

import SearchBar from './components/SearchBar.component';
import VideoList from './components/VideoList.component';
import VideoDetail from './components/VideoDetail.component';

class App extends Component {
    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        this.onSearchTermSubmit('');
    }

    onSearchTermSubmit = async (searchString) => {
        const response = await youtube.get('/search', {
            params: { q: searchString },
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0],
        });
    };

    onVideoSelect = (video) => {
        console.log('[From App]: ', video);
        this.setState({ selectedVideo: video });
    };

    render() {
        return (
            <div className='App ui container'>
                <SearchBar onFormSubmit={this.onSearchTermSubmit} />
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className='five wide column'>
                            <VideoList
                                videos={this.state.videos}
                                onVideoSelect={this.onVideoSelect}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
