import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Hero from './Component/Hero/Hero';
import Meals from './Component/Meals/Meals';
import Search from './Component/Search/Search';
import Footer from './Component/Footer/Footer';
// import { useState } from 'react';
// import { useEffect, useState } from 'react';

function App() {
	// const [searchText, setSearchText] = useState('');
	const navigate = useNavigate();

	const handleSearch = e => {
		// console.log(e.target.closest('.join').querySelector('input').value);
		// setSearchText(e.target.closest('.join').querySelector('input').value);
		navigate(
			`/meals/search/${e.target.closest('.join').querySelector('input').value}`
		);
	};
	const location = useLocation();
	// const navigation = useNavigation();
	// console.log(navigation.state);

	return (
		<>
			<Header />

			{location.pathname === '/' ? (
				<>
					<Hero />
					<Search handleSearch={handleSearch} />
					<Meals />
				</>
			) : (
				<Outlet />
			)}
			<Footer />
		</>
	);
}

export default App;
