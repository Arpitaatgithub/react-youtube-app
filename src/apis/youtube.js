import axios from 'axios';

const KEY = 'AIzaSyBiFtBbpH-erhT1V0UjJyacBTbJoAMn5lg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})