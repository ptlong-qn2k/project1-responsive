import axios from 'axios';

const fetchData = axios.create({
    baseURL: 'https://dummyjson.com',
    timeout: 5000,
    headers: { 'X-Custom-Header': 'foobar' },
});

export { fetchData };
