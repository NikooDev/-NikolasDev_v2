import React, { useCallback, useEffect, useRef } from 'react'
import Typewriter from '@App/libs/typewriter'
import { Facebook, Github, Linkedin } from '@App/components/icons/social'
import useAnchor from '@App/hooks/useAnchor'
import Section from '@App/components/layout/section'
import Container from '@App/components/layout/container'

const Intro = () => {
	const wordsRef = useRef<HTMLSpanElement>() as React.MutableRefObject<HTMLSpanElement>
	const { handleAnchor } = useAnchor()

	const handleTypeWords = useCallback(() => {
		if(!wordsRef.current) return
		let getWords = wordsRef.current.getAttribute('data-words') as string
		const words = JSON.parse(getWords)
		new Typewriter(wordsRef.current, words, 2000)
	}, [wordsRef])

	useEffect(() => handleTypeWords(), [handleTypeWords])

	return (
		<Section classname="overflow-hidden md:overflow-auto" id="intro">
			<Container>
				<div className="flex flex-col items-center justify-around h-full pt-28 md:pt-0 md:h-screen md:flex-row">
					<div className="flex flex-col w-full md:w-1/2 mb-2">
						<img src="/static/logo.svg" height="90" width="132.38" className="mx-auto mb-12 w-24 md:w-auto" alt="logo"/>
						<h1 className="title font-extrabold text-center tracking-wide">NikolasDev</h1>
						<div className="flex justify-center w-full relative h-2 md:mt-2 mt-0">
							<span ref={wordsRef} className="uppercase text-lg font-semibold" data-words='["Étudiant en alternance", "Autodidacte", "Développeur web Full-Stack", "Front-end React / Next.js", "Back-end Node.js"]' />
							<span className="ml-0.5 -mt-[.3rem] text-2xl animate-cursor">|</span>
						</div>
						<div className="flex items-center justify-center mt-16">
							<a href="/static/cv.pdf" target="_blank" className="flex rounded-2xl px-5 py-3 bg-[#4961db] bg-gradient-to-r from-[#6a98ef] to-[#4961db] hover:bg-[#3244a2] text-white hover:to-transparent transition-colors duration-300">
								<span className="font-medium">TÉLÉCHARGER MON CV</span>
								<svg height={25} width={25} className="ml-2" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
									<path fill="currentColor" d="M16.59 9H15V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5H7.41c-.89 0-1.34 1.08-.71 1.71l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.63-.63.19-1.71-.7-1.71zM5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1z" />
								</svg>
							</a>
						</div>
						<div className="flex items-center justify-center mt-6">
							<a href="https://github.com/NikooDev" target="_blank" className="mr-5 text-[#4163c7] hover:text-[#383838] dark:text-[#e2e8f0] dark:hover:text-[#6a98ef] transition-colors duration-200" aria-label="Github">
								<Github/>
							</a>
							<a href="https://www.facebook.com/nikoola44/" target="_blank" className="mr-5 text-[#4163c7] hover:text-[#383838] dark:text-[#e2e8f0] dark:hover:text-[#6a98ef] transition-colors duration-200" aria-label="Facebook">
								<Facebook/>
							</a>
							<a href="https://www.linkedin.com/in/nicolas-tual-677092161/" aria-label="Linkedin" className="text-[#4163c7] hover:text-[#383838] dark:text-[#e2e8f0] dark:hover:text-[#6a98ef] transition-colors duration-200" target="_blank">
								<Linkedin/>
							</a>
						</div>
					</div>
					<div className="flex flex-col mt-14 md:mt-0">
						<div className="rounded-2xl tracking-[-.8px] mb-10 px-5 py-3.5 w-full md:w-auto md:px-5 leading-7 bg-white shadow-lg dark:bg-[#212529] text-[.75rem] md:text-[.85rem] md:tracking-tight">
							<pre><span className="font-bold">1</span>  class <strong className="dark:text-[#6898ef] text-[#4163c7]">Person</strong> &#123;</pre>
							<pre><span className="font-bold">2</span>    constructor() &#123;</pre>
							<pre><span className="font-bold">3</span>      this.name = "<strong className="dark:text-[#6898ef] text-[#4163c7]">Nicolas Tual</strong>";</pre>
							<pre><span className="font-bold">4</span>      this.status = "<strong className="dark:text-[#6898ef] text-[#4163c7]">Étudiant</strong>";</pre>
							<pre><span className="font-bold">5</span>      this.traits = ["<strong className="dark:text-[#6898ef] text-[#4163c7]">DEV</strong>", "<strong className="dark:text-[#6898ef] text-[#4163c7]">FULL-STACK</strong>", "<strong className="dark:text-[#6898ef] text-[#4163c7]">CREATIVE</strong>"];</pre>
							<pre><span className="font-bold">6</span>      this.age = new Date().getFullYear() - 1990;</pre>
							<pre><span className="font-bold">7</span>    &#125;</pre>
							<pre><span className="font-bold">8</span>  &#125;</pre>
						</div>
					</div>
					<div className="relative bottom-0 md:absolute md:bottom-10 animate-bounce">
						<a href="/" onClick={(event) => handleAnchor(event)} data-anchor="about" aria-label="À propos">
							<svg focusable="false" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" height={40} width={40}>
								<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.79 9.71-3.08 3.08c-.39.39-1.02.39-1.42 0l-3.08-3.08c-.39-.39-.39-1.03 0-1.42.39-.39 1.02-.39 1.41 0L12 12.67l2.38-2.38c.39-.39 1.02-.39 1.41 0 .39.39.39 1.03 0 1.42z"/>
							</svg>
						</a>
					</div>
				</div>
			</Container>
		</Section>
	)
}

export default Intro