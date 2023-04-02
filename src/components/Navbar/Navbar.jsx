import React, { useState } from 'react';
import Navlink from '../Navlink/Navlink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const routes = [
		{
			id: 1,
			name: 'Home',
			path: '/'
		},
		{
			id: 2,
			name: 'About',
			path: '/about'
		},
		{
			id: 3,
			name: 'Contact',
			path: '/contact'
		},
		{
			id: 4,
			name: 'Blog',
			path: '/blog'
		},
		{
			id: 5,
			name: 'Products',
			path: '/products'
		}
	];

	return (
		<nav className='bg-purple-400'>
			<div onClick={() => setOpen(!open)} className='md:hidden'>
	   <span>{open === true ? <XMarkIcon className="h-8 w-8 text-blue-500" />
		: <Bars3Icon className="h-8 w-8 text-blue-500" />}</span>
			</div>
			<ul className={`md:flex absolute md:static duration-500 bg-purple-400 ${open? 'top-8':'-top-96'}`}>
				{
					routes.map(route =>
						<Navlink
							route={route}
						></Navlink>
					)}
			</ul>
		</nav>
	);
};

export default Navbar;