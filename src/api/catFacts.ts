import axios from 'axios';

export const catFactsApi = {
  getCatFacts() {
    return axios.get('https://catfact.ninja/fact');
  },
};
