import React from 'react'
import Class from 'classnames'

export interface IChildren {
	children: React.ReactNode
	classname?: Class.Argument
}

export interface ISection extends IChildren {
	id: 'intro' | 'about' | 'projects' | 'skills' | 'training' | 'contact'
}

export interface ISvg {
	classname?: Class.Argument
	fill?: string
	height?: number
	width?: number
}