import React from 'react';

const Button = ({
	onClick,
	className = '',
	full,
	type = 'button',
	bgColor = 'primary',
	children,
	...props
}) => {
	let bgClassName = 'bg-primary';
	switch (bgColor) {
		case 'primary':
			bgClassName = 'bg-primary';
			break;
		case 'secondary':
			bgClassName = 'bg-secondary';
			break;
		default:
			break;
	}
	return (
		<div>
			<button
				type={type}
				onClick={onClick}
				className={`${
					full ? 'w-full' : ''
				} px-6 py-3 mt-auto text-xl font-bold capitalize rounded-lg ${bgClassName} ${className}`}
				{...props}
			>
				{children}
			</button>
		</div>
	);
};

export default Button;
