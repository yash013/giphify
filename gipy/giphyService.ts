import axios from 'axios';

const apiKey = 'GlVGYHkr3WSBnllca54iNt0yFbjz7L65';
const baseURL = 'https://api.giphy.com/v1/gifs';

const giphyService = axios.create({
  baseURL,
  params: {
    api_key: apiKey,
  },
});

export default giphyService;
