import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Hero from './Component/Hero/Hero';
import Meals from './Component/Meals/Meals';
import Search from './Component/Search/Search';
import Footer from './Component/Footer/Footer';
import BrowseByName from './Component/BrowseByName/BrowseByName';
import { useState } from 'react';

function App() {
	const [searchText, setSearchText] = useState('');

	const navigate = useNavigate();
	const location = useLocation();

	const handleSearch = e => {
		const route =
			e.target.closest('.join')?.querySelector('input').value ||
			e.target?.value;
		setSearchText(e.target?.value);
		// console.log(`/meals/search/${route}`);
		route && navigate(`/meals/search/${route}`);
	};

	return (
		<>
			<Header handleSearch={handleSearch} searchText={searchText} />

			{location.pathname === '/' ? (
				<>
					<Hero />
					<Search handleSearch={handleSearch} />
					<Meals />
				</>
			) : (
				<Outlet />
			)}
			<BrowseByName />
			<Footer />
		</>
	);
}

export default App;
