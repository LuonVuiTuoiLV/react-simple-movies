import MovieCard from '@/components/movie/MovieCard';
import { fetcher, tmdbAPI } from '@/config';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import useSWR from 'swr';

const MovieDetailsPage = () => {
	const { movieId } = useParams();
	const { data, error, isLoading } = useSWR(
		tmdbAPI.getMovieDetails(movieId),
		fetcher
	);

	if (!data) return null;
	const { backdrop_path, poster_path, title, genres, overview } = data;

	return (
		<div className="pb-10">
			<div className="w-full h-[600px] relative ">
				<div className="absolute inset-0 bg-black bg-opacity-50"></div>
				<div
					className="w-full h-full bg-no-repeat bg-cover"
					style={{
						backgroundImage: `url(${tmdbAPI.imageOriginal(backdrop_path)})`,
					}}
				></div>
			</div>
			<div className="w-full h-[400px] max-w-[800px] mx-auto relative -mt-[200px] z-10 pb-10">
				<img
					src={`${tmdbAPI.imageOriginal(poster_path)}`}
					className="object-cover w-full h-full rounded-xl "
					alt=""
				/>
			</div>
			<h1 className="mb-10 text-4xl font-bold text-center text-white">
				{title}
			</h1>
			{genres.length > 0 && (
				<div className="flex items-center justify-center mb-10 gap-x-5">
					{genres.map((item) => (
						<span
							key={item.id}
							className="px-4 py-2 border rounded text-primary border-primary"
						>
							{item.name}
						</span>
					))}
				</div>
			)}
			<p className="mx-auto text-sm leading-relaxed max-w-[800px] text-center mb-10">
				{overview}
			</p>
			<MovieCredits></MovieCredits>
			<MovieVideos></MovieVideos>
			<MovieSimilar></MovieSimilar>
		</div>
	);
};

function MovieCredits() {
	const { movieId } = useParams();
	const { data, error } = useSWR(
		tmdbAPI.getMovieMeta(movieId, 'credits'),
		fetcher
	);
	if (!data) return null;
	const { cast } = data;
	if (!cast || cast.length <= 0) return null;
	return (
		// Use swiper create slide ...
		<div className="py-10">
			<h2 className="mb-10 text-3xl text-center">Casts</h2>
			<div className="grid grid-cols-4 gap-5 text-center">
				{cast.slice(0, 4).map((item) => (
					<div className="cart-item" key={item.id}>
						<img
							src={`${tmdbAPI.imageOriginal(item.profile_path)}`}
							className="w-full h-[350px] object-cover rounded-lg mb-3"
							alt=""
						/>
						<h3 className="text-xl font-medium ">{item.name}</h3>
					</div>
				))}
			</div>
		</div>
	);
}

function MovieVideos() {
	const { movieId } = useParams();
	const { data, error } = useSWR(
		tmdbAPI.getMovieMeta(movieId, 'videos'),
		fetcher
	);
	if (!data) return null;
	const { results } = data;
	if (!results || results.length <= 0) return null;
	return (
		<div className="py-10">
			<div className="flex flex-col gap-10">
				{results.slice(0, 2).map((item) => (
					<div className="" key={item.id}>
						<h3 className="inline-block p-3 mb-5 text-xl font-medium font bg-secondary">
							{item.name}
						</h3>
						<div className="w-full aspect-video" key={item.id}>
							<iframe
								width="937"
								height="527"
								src={`${tmdbAPI.videosUrl(item.key)}`}
								title="ĐANG TALK XÔ THÌ BIM GỌI ĐẦY BẤT NGỜ TỪ ÚC VỀ"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerPolicy="strict-origin-when-cross-origin"
								allowFullScreen
								className="object-fill w-full h-full"
							></iframe>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

function MovieSimilar() {
	const { movieId } = useParams();
	const { data, error } = useSWR(
		tmdbAPI.getMovieMeta(movieId, 'similar'),
		fetcher
	);
	if (!data) return null;
	const { results } = data;
	if (!results || results.length < 0) return null;
	return (
		<div className="py-10">
			<h2 className="mb-10 text-3xl font-medium">Similar movies</h2>
			<div className="movie-list">
				<Swiper grabCursor={'true'} spaceBetween={40} slidesPerView={'auto'}>
					{results.length > 0 &&
						results.map((item) => (
							<SwiperSlide key={item.id}>
								<MovieCard item={item}></MovieCard>
							</SwiperSlide>
						))}
				</Swiper>
			</div>
		</div>
	);
}
export default MovieDetailsPage;
