import { NavLink } from 'react-router-dom';

const BrowseByName = () => {
	const alphabets = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
	];
	return (
		<div className="container text-center mb-12">
			<h4 className="font-bold text-2xl mb-4">Browse Meals</h4>
			{alphabets.map((char, idx) => (
				<NavLink
					key={idx}
					className={({ isActive }) =>
						isActive
							? 'capitalize font-bold text-xl text-amber-800'
							: 'capitalize font-bold text-xl '
					}
					to={`/search/first/${char}`}
				>
					{char}
					{idx !== alphabets.length - 1 && (
						<span className="text-white mx-1">/</span>
					)}
				</NavLink>
			))}
		</div>
	);
};

export default BrowseByName;
