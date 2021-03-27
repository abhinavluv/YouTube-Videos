import axios from 'axios';

const KEY = 'AIzaSyA7UMIsWKmv-gxLk5zJZJnHnmvo-f9r52k';

// pre configured base url instance for axios
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 20,
        key: KEY,
    },
});
