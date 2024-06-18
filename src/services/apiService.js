import axios from 'axios';

const API_KEY = '247101f74864ef7596eb96546bdfac5e';  
const BASE_URL = 'https://api.themoviedb.org/3';

const apiClient = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY
  }
});

export function searchMoviesAndTVShows(query) {
    return Promise.all([
      apiClient.get('/search/movie', {
        params: {
          query: query,
          language: 'it-IT'
        }
      }),
      apiClient.get('/search/tv', {
        params: {
          query: query,
          language: 'it-IT'
        }
      })
    ])
    .then(([moviesResponse, tvResponse]) => {
      return [...moviesResponse.data.results, ...tvResponse.data.results];
    })
    .catch(error => {
      console.error('Error ', error);
      return [];
    });
  }
