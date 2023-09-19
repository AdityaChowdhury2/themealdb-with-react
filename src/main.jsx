import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MealDetails from './Component/MealDetails/MealDetails.jsx';
import Meals from './Component/Meals/Meals.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		loader: () =>
			fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='),
		children: [
			{
				path: '/about',
				element: <h1 className="font-bold text-4xl">This is about page</h1>,
			},
			{
				path: '/meal/:idMeal',
				loader: ({ params }) => {
					// console.log(params.idMeal);
					return fetch(
						`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`
					);
				},
				element: <MealDetails />,
			},
			{
				path: '/meals/search/:searchText',
				loader: ({ params }) => {
					// console.log(params.searchText);
					return fetch(
						`https://www.themealdb.com/api/json/v1/1/search.php?s=${params?.searchText}`
					);
				},
				element: <Meals />,
			},
			{
				path: '/search/first/:firstChar',
				loader: ({ params }) => {
					// console.log(params.firstChar);
					return fetch(
						`https://www.themealdb.com/api/json/v1/1/search.php?f=${params.firstChar}`
					);
				},
				element: <Meals />,
			},
		],
	},
]);
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
