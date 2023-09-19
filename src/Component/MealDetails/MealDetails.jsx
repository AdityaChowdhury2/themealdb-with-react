import { useLoaderData } from 'react-router-dom';
import Ingredient from '../Ingredient/Ingredient';

const MealDetails = () => {
	const data = useLoaderData();
	const { meals } = data;
	const foodItem = meals[0];
	const { strMealThumb, strTags, strMeal, strInstructions } = foodItem;
	const ingredients = [];
	const measurements = [];
	for (const property in foodItem) {
		if (property.includes('strIngredient') && foodItem[property].length) {
			ingredients.push(foodItem[property]);
		}
		if (
			property.includes('strMeasure') &&
			foodItem[property].length &&
			foodItem[property] !== ' '
		) {
			measurements.push(foodItem[property]);
		}
	}
	// const ingredientsMeasurement = ingredients.reduce((obj, key, index) => {
	// 	obj[key] = measurements[index].trim();
	// 	return obj;
	// }, []);
	const ingredientsMeasurement = [];
	ingredients.forEach((ingredient, idx) => {
		ingredientsMeasurement.push({
			name: ingredient,
			measurement: measurements[idx],
		});
	});
	// console.log(ingredientsMeasurement);
	return (
		<>
			<div className="container p-3">
				<div className="flex">
					<div className="flex flex-col lg:w-4/12">
						<h3 className="font-semibold text-3xl">{strMeal}</h3>
						<div className="mt-4">
							<img src={strMealThumb} alt="" className="w-full" />
						</div>
						<div className="mt-4">
							{strTags ? (
								<button className="text-black py-1 px-4 bg-amber-400 hover:bg-amber-500">
									{strTags}
								</button>
							) : (
								'No Tags'
							)}
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 flex-1 gap-4">
						{ingredientsMeasurement.map((ingredient, idx) => (
							<Ingredient key={idx} ingredient={ingredient} />
						))}
					</div>
				</div>
				<div className=" w-2/4 mx-auto text-justify">
					<h3 className="my-4 font-bold text-xl text-center">Instruction</h3>
					<p>{strInstructions}</p>
				</div>
			</div>
		</>
	);
};

export default MealDetails;
