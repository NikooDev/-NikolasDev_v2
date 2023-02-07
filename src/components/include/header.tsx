import React, { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { HomeIcon } from '@App/components/icons/navigation'
import { Dark, Light } from '@App/components/icons/darkmode'
import useAnchor from '@App/hooks/useAnchor'
import useTheme from '@App/hooks/useTheme'
import useOutside from '@App/hooks/useOutside'
import Container from '@App/components/layout/container'
import Class from 'classnames'
import { Facebook, Github, Linkedin } from '@App/components/icons/social'

const Header = () => {
	const [menu, setMenu] = useState<boolean>(false)
	const headerRef = useRef() as React.MutableRefObject<HTMLDivElement>
	const menuRef = useRef() as React.MutableRefObject<HTMLUListElement>
	const { handleAnchor, anchor } = useAnchor()
	const { handleTheme } = useTheme()

	const link = "flex py-5 px-3 text-sm hover:text-[#4163c7] dark:hover:text-[#6a98ef] font-semibold font-quicksand transition-colors"
	const linkActive = "text-[#4163c7] dark:text-[#6a98ef]"
	const linkResponsive = "flex py-5 px-3 text-2xl text-white hover:text-[#6a98ef] font-semibold font-quicksand transition-colors"
	const linkResponsiveActive = "text-[#6a98ef]"

	useOutside(menuRef, () => {
		setMenu(false)
	})

	const handleToggleMenu = (event: React.MouseEvent) => {
		event.preventDefault()
		setMenu(menu => !menu)
	}

	const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement> | React.TouchEvent) => {
		setMenu(false)
		handleAnchor(event)
	}

	const handleScrollHeader = useCallback(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 850) {
				if (headerRef) headerRef.current.classList.remove('dark:bg-opacity-80')
			} else if (headerRef) headerRef.current.classList.add('dark:bg-opacity-80')
		})
	}, [headerRef])

	useEffect(() => handleScrollHeader(), [handleScrollHeader])

	return (
		<>
			<header className="fixed w-full z-50" role="banner">
				<div className="flex flex-col justify-center bg-white dark:bg-[#0f1113] dark:bg-opacity-80 shadow-header dark:shadow-header-dark h-[4.15rem]" ref={headerRef}>
					<Container>
						<div className="flex items-center px-5 md:px-0">
							<Link href="/" passHref onClick={(event) => handleAnchor(event)} data-anchor="intro" aria-label="logo" role="link">
								<img src="/static/logo.svg" height="35" width="51.48" alt="logo" />
							</Link>
							<ul className="items-center ml-auto hidden md:flex">
								<li>
									<Link href="/" onClick={(event) => handleAnchor(event)} data-anchor="intro" aria-label="home" className={Class(anchor === 'intro' && linkActive, 'flex py-5 px-3 text-sm hover:text-[#4163c7] dark:hover:text-[#6a98ef] transition-colors')}>
										<HomeIcon/>
									</Link>
								</li>
								<li>
									<Link href="/" onClick={(event) => handleAnchor(event)} data-anchor="about" className={Class(anchor === 'about' && linkActive, link)}>
										QUI SUIS-JE ?
									</Link>
								</li>
								<li>
									<Link href="/" onClick={(event) => handleAnchor(event)} data-anchor="projects" className={Class(anchor === 'projects' && linkActive, link)}>
										RÉALISATIONS
									</Link>
								</li>
								<li>
									<Link href="/" onClick={(event) => handleAnchor(event)} data-anchor="skills" className={Class(anchor === 'skills' && linkActive, link)}>
										COMPÉTENCES
									</Link>
								</li>
								<li>
									<Link href="/" onClick={(event) => handleAnchor(event)} data-anchor="training" className={Class(anchor === 'training' && linkActive, link)}>
										FORMATIONS
									</Link>
								</li>
								<li>
									<Link href="/" onClick={(event) => handleAnchor(event)} data-anchor="contact" className={Class(anchor === 'contact' && linkActive, link)}>
										GET IN TOUCH
									</Link>
								</li>
								<li>
									<button onClick={(event) => handleTheme(event)} aria-label="darkmode"
													className="flex justify-center py-5 px-3 ml-2 h-[34px] w-[34px] outline-0 relative darkmode hover:text-[#4163c7] dark:hover:text-[#6a98ef] transition-colors">
										<Light classname="absolute top-0.5 translate-y-[-350%] dark:translate-y-0 transition-transform duration-500" fill="currentColor"/>
										<Dark classname="absolute top-0.5 translate-y-0 dark:translate-y-[-350%] transition-transform duration-500" fill="currentColor"/>
									</button>
								</li>
							</ul>
							<ul className="flex items-center ml-auto md:hidden">
								<a href="https://github.com/NikooDev" target="_blank" className="mr-5 text-[#4163c7] hover:text-[#383838] dark:text-[#e2e8f0] dark:hover:text-[#6a98ef] scale-90 transition-colors duration-200" aria-label="Github">
									<Github/>
								</a>
								<a href="https://www.facebook.com/nikoola44/" target="_blank" className="mr-5 text-[#4163c7] hover:text-[#383838] dark:text-[#e2e8f0] dark:hover:text-[#6a98ef] scale-90 transition-colors duration-200" aria-label="Facebook">
									<Facebook/>
								</a>
								<a href="https://www.linkedin.com/in/nicolas-tual-677092161/" aria-label="Linkedin" className="text-[#4163c7] hover:text-[#383838] dark:text-[#e2e8f0] dark:hover:text-[#6a98ef] scale-90 transition-colors duration-200" target="_blank">
									<Linkedin/>
								</a>
							</ul>
						</div>
					</Container>
				</div>
			</header>
			<aside className={Class('fixed left-0 right-0 w-full h-full z-50 md:hidden duration-500 transition-all', menu ? 'top-0' : 'top-[-100%]')} role="complementary">
				<div className="flex justify-center bg-[#0f1113] bg-opacity-90 w-full h-full">
					<ul className="flex flex-col justify-center items-center" ref={menuRef}>
						<li>
							<Link href="/" onClick={(event) => handleAnchorClick(event)} data-anchor="intro" aria-label="home" className={Class(anchor === 'intro' && linkResponsiveActive, linkResponsive)}>
								ACCUEIL
							</Link>
						</li>
						<li>
							<Link href="/" onClick={(event) => handleAnchorClick(event)} data-anchor="about" className={Class(anchor === 'about' && linkResponsiveActive, linkResponsive)}>
								QUI SUIS-JE ?
							</Link>
						</li>
						<li>
							<Link href="/" onClick={(event) => handleAnchorClick(event)} data-anchor="projects" className={Class(anchor === 'projects' && linkResponsiveActive, linkResponsive)}>
								RÉALISATIONS
							</Link>
						</li>
						<li>
							<Link href="/" onClick={(event) => handleAnchorClick(event)} data-anchor="skills" className={Class(anchor === 'skills' && linkResponsiveActive, linkResponsive)}>
								COMPÉTENCES
							</Link>
						</li>
						<li>
							<Link href="/" onClick={(event) => handleAnchorClick(event)} data-anchor="training" className={Class(anchor === 'training' && linkResponsiveActive, linkResponsive)}>
								FORMATIONS
							</Link>
						</li>
						<li>
							<Link href="/" onClick={(event) => handleAnchorClick(event)} data-anchor="contact" className={Class(anchor === 'contact' && linkResponsiveActive, linkResponsive)}>
								GET IN TOUCH
							</Link>
						</li>
					</ul>
				</div>
			</aside>
			<button onClick={(event) => handleToggleMenu(event)} className="flex fixed bottom-20 right-0 bg-[#4961db] bg-gradient-to-r from-[#6a98ef] to-[#4961db] dark:bg-[#0f1113] dark:from-[#212529] dark:to-[#0f1113] shadow-md z-40 py-3 pl-4 pr-3 rounded-tl-full rounded-bl-full md:hidden" aria-label="Afficher le menu">
				<svg focusable="false" aria-hidden="true" fill="#fff" height={34} width={34} viewBox="0 0 24 24">
					<path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"/>
				</svg>
			</button>
			<button onClick={(event) => handleTheme(event)} aria-label="darkmode"
							className="flex fixed bottom-40 right-0 bg-[#4961db] bg-gradient-to-r from-[#6a98ef] to-[#4961db] dark:bg-[#0f1113] dark:from-[#212529] dark:to-[#0f1113] shadow-md z-40 py-3 pl-4 pr-3 rounded-tl-full rounded-bl-full h-[58px] w-[62px] md:hidden">
				<Light classname="absolute top-3 left-3 translate-x-[350%] dark:translate-x-[10%] transition-transform duration-500" fill="#fff"/>
				<Dark classname="absolute top-3 left-3 translate-x-[35%] dark:translate-x-[350%] transition-transform duration-500" fill="#fff"/>
			</button>
		</>
	)
}

export default Header