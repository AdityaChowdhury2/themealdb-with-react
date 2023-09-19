import { Icon } from '@iconify/react';

const Footer = () => {
	return (
		<div className="bg-neutral">
			<footer className="container flex flex-col md:flex-row p-2 md:p-10 text-neutral-content">
				<aside className="flex justify-center md:w-3/12">
					<p className="text-lg flex">
						&copy; 2023 TheMealDB
						<br />
						Proudly built in the UK{' '}
						<Icon icon="flagpack:gb-ukm" className="mt-8 ml-2" />
					</p>
				</aside>
				<nav className="flex-grow flex flex-col gap-y-6">
					<div className="flex justify-center gap-1 items-center">
						<p>Socials: </p>
						<Icon icon="devicon:facebook" />
						<Icon icon="skill-icons:twitter" />
						<Icon icon="skill-icons:discord" />
					</div>
					<div className="flex justify-center gap-3">
						<img src="https://www.themealdb.com/images/logo-tcdb.png" alt="" />
						<img src="https://www.themealdb.com/images/logo-tadb.png" alt="" />
						<img src="https://www.themealdb.com/images/logo-tsdb.png" alt="" />
					</div>
				</nav>
				<nav className="flex justify-center gap-4 md:w-3/12">
					<a className="link link-hover">About</a>
					<a className="link link-hover">FAQ</a>
					<a className="link link-hover">Contact</a>
				</nav>
			</footer>
		</div>
	);
};

export default Footer;
