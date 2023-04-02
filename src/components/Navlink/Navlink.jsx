import React from 'react';

const Navlink = ({route}) => {
	return (
		<li className='md:mx-12 hover:bg-purple-700 md:p-3 p-4 px-12'>
			<a href={route.path}>{route.name}</a>
		</li>
	);
};

export default Navlink;