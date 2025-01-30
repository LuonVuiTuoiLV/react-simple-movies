import { tmdbAPI } from '@/config';
import Button from '@bu/button/Button';
import PropTypes from 'prop-types';
import React from 'react';
import { withErrorBoundary } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';
import LoadingSkeleton from '../loading/LoadingSkeleton';

const MovieCard = ({ item }) => {
	const { title, vote_average, release_date, poster_path, id } = item;
	// navigate dùng để điều hướng
	const navigate = useNavigate();
	return (
		<div className="flex flex-col h-full p-3 text-white rounded-lg select-none movie-card bg-slate-800">
			<img
				src={tmdbAPI.image500(poster_path)}
				alt=""
				className="w-full h-[250px] object-cover rounded-lg mb-5"
			/>
			<div className="flex flex-col flex-1">
				<h3 className="mb-3 text-xl font-bold ">{title}</h3>
				<div className="flex items-center justify-between mb-10 text-sm opacity-50">
					<span>{new Date(release_date).getFullYear()}</span>
					<span>{vote_average}</span>
				</div>
				<Button full onClick={() => navigate(`/movie/${id}`)}>
					Watch now
				</Button>
			</div>
		</div>
	);
};

MovieCard.propTypes = {
	item: PropTypes.shape({
		title: PropTypes.string,
		vote_average: PropTypes.number,
		release_date: PropTypes.string,
		poster_path: PropTypes.string,
		id: PropTypes.number,
	}),
};

function FallbackComponent() {
	return (
		<p className="text-red-400 bg-red-50">
			Something went wrong with this component
		</p>
	);
}

export default withErrorBoundary(MovieCard, { FallbackComponent });

export const MovieCardSkeleton = () => {
	return (
		<div className="flex flex-col h-full p-3 text-white rounded-lg select-none movie-card bg-slate-800">
			<LoadingSkeleton className="w-full h-[250px] rounded-lg mb-5"></LoadingSkeleton>
			<div className="flex flex-col flex-1">
				<h3 className="mb-3 text-xl font-bold ">
					<LoadingSkeleton className="w-full h-[20px]"></LoadingSkeleton>
				</h3>
				<div className="flex items-center justify-between mb-10 text-sm opacity-50">
					<span>
						<LoadingSkeleton className="w-[50px] h-[10px]"></LoadingSkeleton>
					</span>
					<span>
						<LoadingSkeleton className="w-[30px] h-[10px]"></LoadingSkeleton>
					</span>
				</div>
				<LoadingSkeleton className="w-full h-[45px] rounded-md"></LoadingSkeleton>
			</div>
		</div>
	);
};
