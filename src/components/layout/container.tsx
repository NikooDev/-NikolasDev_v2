import React from 'react'
import { IChildren } from '@App/types/global'
import Class from 'classnames'

const Container: React.FC<IChildren> = ({
	children, classname }) => {
	return (
		<div className={Class('mx-auto max-w-6xl px-0 md:px-4 w-full', classname)}>
			{ children }
		</div>
	)
}

export default Container