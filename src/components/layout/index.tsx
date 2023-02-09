import React, { useCallback, useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import ILayout from '@App/types/layout'
import { ThemeProvider } from '@App/contexts/theme.context'
import useStat from '@App/hooks/useStat'
import Head from 'next/head'
import Header from '@App/components/include/header'
import Cubes from '@App/components/layout/cubes'
import Stats from '@App/components/include/stats'
import Class from 'classnames'

const Layout: React.FC<ILayout> = ({ children }) => {
	const { socket } = useStat()
	const [isLoaded, setIsLoaded] = useState<boolean>(true)
	const [isTop, setIsTop] = useState<boolean>(true)

	useEffect(() => {
		socket.emit('vue')
	}, [socket])

	const handleShowRect = useCallback(() => {
		if (window.scrollY > 3650 && window.scrollY < 7300 || window.scrollY < 650) {
			setIsLoaded(true)
		} else {
			setIsLoaded(false)
		}
		if (window.scrollY > 850) {
			setIsTop(false)
		} else {
			setIsTop(true)
		}
	}, [])

	useEffect(() => {
		window.addEventListener('scroll', () => {
			handleShowRect()
		})
		window.addEventListener('resize', () => {
			handleShowRect()
		})
	}, [handleShowRect])

	useEffect(() => {
		setTimeout(() => setIsLoaded(true), 500)
	}, [])

	return (
		<ThemeProvider>
			<Head>
				<title>NikolasDev • Développeur web junior</title>
				<meta name="description" content="Nicolas Tual, autodidacte, étudiant et développeur web passionné. Spécialisé en JavaScript Full-Stack : Node.js | Adonis.js | React.js | Next.js..." />
			</Head>
			<Toaster position="top-center" containerClassName="notif" gutter={10}/>
			<Header/>
			<main role="main">
				<Cubes/>
				<img src="/static/rect.svg" height="100%" width="40%" className={Class('fixed right-0 -z-10 w-[40%] rect', isLoaded && 'rect-loader', isTop ? 'rect-top' : 'rect-noTop')} alt="rectangle"/>
				{ children }
			</main>
			<Stats/>
		</ThemeProvider>
	)
}

export default Layout