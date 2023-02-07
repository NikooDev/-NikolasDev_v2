import React, { useEffect, useState } from 'react'
import { useThemeContext, useThemeDispatch } from '@App/contexts/theme.context'

const useTheme = () => {
	const [themeToggle, setThemeToggle] = useState<boolean>(false)
	const theme = useThemeContext()
	const dispatch = useThemeDispatch()

	useEffect(() => {
		if (theme.dark === 'light') {
			setThemeToggle(true)
			document.documentElement.classList.remove('dark')
		} else {
			setThemeToggle(false)
			document.documentElement.classList.add('dark')
		}
	}, [theme])

	const handleTheme = (event: React.MouseEvent): void => {
		event.preventDefault()
		let theme: string

		setThemeToggle((prevToggle) => !prevToggle)

		if (themeToggle) {
			theme = 'dark'
			window.localStorage.removeItem('theme')
		} else {
			theme = 'light'
			window.localStorage.setItem('theme', 'light')
		}

		dispatch({ type: 'SET_THEME', payload: theme })
	}

	return { handleTheme }
}

export default useTheme