import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Meal = ({ meal }) => {
	// console.log(meal);
	const { idMeal, strMealThumb, strMeal } = meal;
	return (
		<div className="flex justify-center items-center flex-col">
			<Link to={`/meal/${idMeal}`} className="hover:text-amber-600">
				<div className="w-64 h-64">
					<img src={strMealThumb} alt="" className="w-full" />
				</div>

				<p className="text-center">{strMeal}</p>
			</Link>
		</div>
	);
};

Meal.propTypes = {
	meal: PropTypes.object.isRequired,
};

export default Meal;
