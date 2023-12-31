// import PropTypes from 'prop-types';
import { useState } from 'react';
import Meal from '../Meal/Meal';
import { useLoaderData, useLocation } from 'react-router-dom';

const Meals = () => {
	const data = useLoaderData();
	const { meals } = data;
	const [isShowAll, setIsShowAll] = useState(meals?.length > 12 ? false : true);
	const location = useLocation();
	const message = !meals && <p className="text-center my-12">No meals Found</p>;
	const slicedMeal = isShowAll ? meals : meals?.slice(0, 12);

	return (
		<div className="container">
			{location.pathname === '/' ? (
				<h2 className="text-center font-bold text-4xl mt-10">All Meals</h2>
			) : (
				''
			)}
			{meals ? (
				<div>
					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-4 mt-10">
						{slicedMeal.map(meal => (
							<Meal key={meal.idMeal} meal={meal} />
						))}
					</div>
					<div className="text-center my-10">
						{!isShowAll ? (
							<button
								className="text-black font-bold py-1 px-4 bg-amber-400 hover:bg-amber-500  rounded-md"
								onClick={() => {
									setIsShowAll(!isShowAll);
								}}
							>
								Show All
							</button>
						) : meals.length > 12 ? (
							<button
								className="text-black font-bold py-1 px-4 bg-amber-400 hover:bg-amber-500  rounded-md"
								onClick={() => {
									setIsShowAll(!isShowAll);
								}}
							>
								Show less
							</button>
						) : (
							''
						)}
					</div>
				</div>
			) : (
				message
			)}
		</div>
	);
};

Meals.propTypes = {};

export default Meals;
