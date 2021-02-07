import axios from 'axios';

const KEY = 'AIzaSyCP2rqP9sBY6t2vb_4KomoR5nW-OR6OWxo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxReesults: 5,
        key: KEY,
        type: 'video'
    }
});
