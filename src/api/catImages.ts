import axios from 'axios';

const API_KEY = import.meta.env.VITE_IMAGES_API_KEY;

export const catImagesApi = {
  getCatImages() {
    const KEYWORD = 'cat';
    return axios.get(`https://api.shecodes.io/images/v1/search?query=${KEYWORD}&key=${API_KEY}`);
  },
};
