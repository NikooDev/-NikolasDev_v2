import React from 'react'
import { Toaster } from 'react-hot-toast'
import ILayout from '@App/types/layout'
import { ThemeProvider } from '@App/contexts/theme.context'
import Head from 'next/head'
import Header from '@App/components/include/header'
import Cubes from '@App/components/layout/cubes'

const Layout: React.FC<ILayout> = ({ children }) => {
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
				<img src="/static/rect.svg" height="100%" width="100%" className="absolute right-0 -z-10 w-[40%] top-0" alt="cubes"/>
				{ children }
			</main>
		</ThemeProvider>
	)
}

export default Layout