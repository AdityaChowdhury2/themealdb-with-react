import PropTypes from 'prop-types';

const Ingredient = ({ ingredient }) => {
	console.log(ingredient);
	return (
		<div className="flex justify-center items-center flex-col">
			{/* <Link to={`/meal/${idMeal}`}> */}
			<div className="w-44 h-44">
				<img
					src={`https://www.themealdb.com/images/ingredients/${ingredient.name}.png`}
					alt=""
					className="w-full"
				/>
			</div>
			{/* </Link> */}
			{/* <Link to={`/meal/${idMeal}`} className="hover:text-amber-700"> */}
			<p className="mt-2">
				{ingredient.measurement} {ingredient.name}
			</p>
			{/* </Link> */}
		</div>
	);
};

Ingredient.propTypes = {
	ingredient: PropTypes.object.isRequired,
};

export default Ingredient;
