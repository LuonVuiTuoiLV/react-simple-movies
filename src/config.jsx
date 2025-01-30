export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const apiKey = '1f6d49c3dce00046a01470b68ac8b0bf';
const tmdbEndPoint = 'https://api.themoviedb.org/3/movie/';
const tmdbEndPointSearch = 'https://api.themoviedb.org/3/search/movie';
export const tmdbAPI = {
	getMovieList: (type, page = '1') =>
		`${tmdbEndPoint}${type}?api_key=${apiKey}&page=${page}`,
	getMovieDetails: (movieId) => `${tmdbEndPoint}${movieId}?api_key=${apiKey}`,
	getMovieMeta: (movieId, type) =>
		`${tmdbEndPoint}${movieId}/${type}?api_key=${apiKey}`,
	getMovieSearch: (query, page) =>
		`${tmdbEndPointSearch}?api_key=${apiKey}&query=${query}&page=${page}`,
	imageOriginal: (url) => `https://image.tmdb.org/t/p/original/${url}`,
	image500: (url) => `https://image.tmdb.org/t/p/w500/${url}`,
	videosUrl: (url) => `https://www.youtube.com/embed/${url}`,
};
