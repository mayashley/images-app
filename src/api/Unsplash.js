import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ZzA9YqGCgDezaqVcf8I5jgjc4B5-a5hzq9lBykwlO0I'
      }
})