import React from 'react'
import { ISection } from '@App/types/global'
import Class from 'classnames'

const Section: React.FC<ISection> = ({ id, classname, children }) => {
	return (
		<section className={Class(classname)} id={id}>
			{ children }
		</section>
	)
}

export default Section