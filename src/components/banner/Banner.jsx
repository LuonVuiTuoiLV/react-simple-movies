import { apiKey, fetcher } from '@/config';
import Button from '@bu/button/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import useSWR from 'swr';

const Banner = () => {
	const { data } = useSWR(
		`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`,
		fetcher
	);
	const movies = data?.results || [];

	return (
		<section className="banner h-[650px] page-container mb-20 overflow-hidden">
			<Swiper grabCursor="true" slidesPerView={'auto'}>
				{movies.length > 0 &&
					movies.map((item) => (
						<SwiperSlide key={item.id}>
							<BannerItem item={item}></BannerItem>
						</SwiperSlide>
					))}
			</Swiper>
		</section>
	);
};

function BannerItem({ item }) {
	const { title, poster_path, id } = item;
	const navigate = useNavigate();
	return (
		<div className="relative w-full h-full rounded-lg">
			<div className="absolute overlay inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
			<img
				src={`https://image.tmdb.org/t/p/original/${poster_path}`}
				alt=""
				className="object-cover object-top w-full h-full rounded-lg"
			/>
			<div className="absolute w-full text-white bottom-5 left-5">
				<h2 className="mb-5 text-3xl font-bold ">{title}</h2>
				<div className="flex items-center mb-8 gap-x-3">
					<span className="px-4 py-2 border border-white rounded-md">
						Action
					</span>
					<span className="px-4 py-2 border border-white rounded-md">
						Adventure
					</span>
					<span className="px-4 py-2 border border-white rounded-md">
						Drama
					</span>
				</div>
				<Button onClick={() => navigate(`/movie/${id}`)}>Watch now</Button>
			</div>
		</div>
	);
}

export default Banner;
