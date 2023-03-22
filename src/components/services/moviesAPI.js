import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '8e8c3d98d3e43f50386cf07b0bdc43af',
  },
});
export const getTrending = async () => {
  const { data } = await instance.get(`/trending/movie/day`);
  return data.results;
};
export const fetchMovieById = async id => {
  // console.log(id);
  const { data } = await instance.get(`/movie/${id}`);

  return data;
};
export const fetchMovieByQuery = async keyword => {
  const { data } = await instance.get(`/search/movie`, {
    params: {
      query: keyword,
    },
  });
  return data.results;
};
// export const fetchMovieByQuery = async keyword => {
//   const response = await instance.get(`/search/movie?query=${keyword}`);
//   return response.data.results;
// };
export const getCast = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`);
  return data.cast;
};
export const getReviews = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews`);
  return data.results;
};
