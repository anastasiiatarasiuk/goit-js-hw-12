import axios from 'axios';

export async function getImages(query, page) {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = {
    key: '44012525-f6ee3715003c9db0af32c6494',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 15,
    page: page,
  };
  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
