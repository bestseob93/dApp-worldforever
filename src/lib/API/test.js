import axios from 'axios';

export function fetchImageApi() {
  console.log('api called');
  return axios.get('https://picsum.photos/list')
    .then(response => {
      return response.data;
    });
}
