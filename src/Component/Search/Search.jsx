import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
const Search = ({ handleSearch }) => {
	return (
		<div className="container">
			<div className="divider after:h-1 before:h-1"></div>
			<div className="join flex justify-center">
				<input
					className="input input-bordered join-item w-4/12 focus:outline-none"
					placeholder="Search for a Meal..."
				/>
				<button className="btn join-item" onClick={handleSearch}>
					<Icon icon="material-symbols:search" width="28" />
				</button>
			</div>
			<div className="flex gap-2 items-center justify-center mt-3">
				<div className="flex items-center gap-1">
					<Icon icon="game-icons:meal" />
					<p>Total Meals: {'294'}</p>
				</div>
				<div className="flex items-center gap-1">
					<Icon icon="mdi:chicken-leg" />
					<p>Total Ingredients: {'574'}</p>
				</div>
				<div className="flex items-center gap-1">
					<Icon icon="material-symbols:image" />
					<p>Images: {'294'}</p>
				</div>
			</div>
			<div className="divider after:h-1 before:h-1"></div>
		</div>
	);
};

Search.propTypes = {
	handleSearch: PropTypes.func.isRequired,
};

export default Search;
