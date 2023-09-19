import './Hero.css';
import MealIcon from '/meal-icon.png';
const Hero = () => {
	return (
		<div className="container flex items-center mt-8">
			<div className="">
				<img src={MealIcon} alt="" />
			</div>
			<div className="flex-1 px-2 md:px-20 text-center">
				<h1 className="mt-5 mb-2 text-4xl font-semibold">
					Welcome to TheMealDB
				</h1>
				<p>
					Welcome to TheMealDB: An open, crowd-sourced database of Recipes from
					around the world. <br /> We also offer a free JSON API for anyone
					wanting to use it, with additional features for subscribers.
				</p>
				<button className="bg-[#ffc439] text-[#003087] italic font-bold px-10 py-1 rounded-md my-2">
					Pay<span className="text-[#009cde]">Pal</span>
				</button>
				<p className="">
					Click button above to upgrade free API to premium for $3 <br />
					Currently 76 supporter
				</p>
			</div>
			<div className="">
				<img src={MealIcon} alt="" />
			</div>
		</div>
	);
};

export default Hero;
