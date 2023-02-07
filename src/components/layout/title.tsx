import React from 'react'
import Class from 'classnames'
import { IChildren } from '@App/types/global'

const Title: React.FC<IChildren> = ({
	children,
	classname}) => {
	return <h2 className={Class('text-center font-extrabold text-2xl dark:text-[#6a98ef]', classname)}>{ children }</h2>
}

export default Title