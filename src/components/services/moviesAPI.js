import axios from "axios";
const instance = axios.create({
    baseURL:
        params: {
        
    },
});
export const getTrending = async () => {
    const { data } = await instance.get('/trending/movie/day');
    return data.results;
};
export const fetchMovieById = async id => {
    const { data } = await instance.get(`/movie/${id}`);
    return data;
}
export const fetchMovieByQuery = async keyword => {
    const { data } = await instance.get('/search/movie', {
        params: {
            query: keyword,
        },
    }),
    return data.results;
};
export const getCast = async id => {
    const { data } = await instance.get(`/movie/${id}/credits`);
    return data.cast;
};
export const getReviews = asyncid => {
    const { data } = await instance.get(`/movie/${id}/reviews`);
    return data.results;
};