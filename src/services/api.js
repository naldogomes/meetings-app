import axios from 'axios';

const api = axios.create({
    baseURL: 'https://rgpf-quiz.herokuapp.com'
});

export default api;