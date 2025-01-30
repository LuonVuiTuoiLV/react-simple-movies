import MovieCard from '@m/MovieCard';
import React from 'react';
// Thư viện hổ trợ silde cho ui/ux
import { fetcher, tmdbAPI } from '@/config';
import { Swiper, SwiperSlide } from 'swiper/react';
import useSWR from 'swr';
// Thư viện swr một thư viện mạnh về fetching dữ liệu.
import PropTypes from 'prop-types';
import { withErrorBoundary } from 'react-error-boundary';
import { MovieCardSkeleton } from './MovieCard';

// https://api.themoviedb.org/3/movie/now_playing?api_key=1f6d49c3dce00046a01470b68ac8b0bf
const MovieList = ({ type = 'now_playing' }) => {
	// const [movies, setMovies] = useState([]);
	const { data, error } = useSWR(tmdbAPI.getMovieList(type), fetcher);
	const isLoading = !data && !error;
	const movies = data?.results || [];
	// useEffect(() => {
	// 	if (data && data.results) setMovies(data.results);
	// }, [data]);
	// console.log('movies:', movies);

	return (
		<div className="movie-list">
			{isLoading && (
				<>
					<Swiper grabCursor={'true'} spaceBetween={40} slidesPerView={'auto'}>
						<SwiperSlide>
							<MovieCardSkeleton></MovieCardSkeleton>
						</SwiperSlide>
						<SwiperSlide>
							<MovieCardSkeleton></MovieCardSkeleton>
						</SwiperSlide>
						<SwiperSlide>
							<MovieCardSkeleton></MovieCardSkeleton>
						</SwiperSlide>
						<SwiperSlide>
							<MovieCardSkeleton></MovieCardSkeleton>
						</SwiperSlide>
						<SwiperSlide>
							<MovieCardSkeleton></MovieCardSkeleton>
						</SwiperSlide>
					</Swiper>
				</>
			)}
			{!isLoading && (
				<Swiper grabCursor={'true'} spaceBetween={40} slidesPerView={'auto'}>
					{movies.length > 0 &&
						movies.map((item) => (
							<SwiperSlide key={item.id}>
								<MovieCard item={item}></MovieCard>
							</SwiperSlide>
						))}
				</Swiper>
			)}
		</div>
	);
};

MovieList.propTypes = {
	type: PropTypes.string.isRequired,
};

function FallbackComponent() {
	return (
		<p className="text-red-400 bg-red-50">
			Something went wrong with this component
		</p>
	);
}

export default withErrorBoundary(MovieList, { FallbackComponent });
