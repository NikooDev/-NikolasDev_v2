import React from 'react'

const Cubes = () => {
	const cubes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

	return (
		<div className="cubes fixed top-0 left-0 w-full h-full overflow-hidden -z-20">
			{ cubes.map((_, index) => (
				<span className="absolute flex w-7 h-7" key={index} />
			)) }
		</div>
	)
}

export default Cubes