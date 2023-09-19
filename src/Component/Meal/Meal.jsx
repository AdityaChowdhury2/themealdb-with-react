import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Meal = ({ meal }) => {
	// console.log(meal);
	const { idMeal, strMealThumb, strMeal } = meal;
	return (
		<div className="flex justify-center items-center flex-col">
			<Link to={`/meal/${idMeal}`}>
				<div className="w-64 h-64">
					<img src={strMealThumb} alt="" className="w-full" />
				</div>
			</Link>
			<Link to={`/meal/${idMeal}`} className="hover:text-amber-700">
				{strMeal}
			</Link>
		</div>
	);
};

Meal.propTypes = {
	meal: PropTypes.object.isRequired,
};

export default Meal;
