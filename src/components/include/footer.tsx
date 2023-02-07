import React, { useCallback, useEffect, useState } from 'react'
import Tippy from '@tippyjs/react'
import Ws from '@App/services/socket'
import { publicIpv4 } from 'public-ip'
import Container from '@App/components/layout/container'

const Footer = () => {
	const { current: socket } = React.useRef(Ws)
	const [countLike, setCountLike] = useState<number>()
	const [countVues, setCountVues] = useState<number>()

	const handleLike = async (event: React.MouseEvent) => {
		event.preventDefault()

		const publicIP = await publicIpv4()
		socket.emit('like', publicIP)
	}

	useEffect(() => {
		socket.emit('vue')
	}, [socket])

	const handleSocketEvents = useCallback(() => {
		socket.on('count', (count) => {
			setCountLike(count)
		})
		socket.on('vue', (vue) => {
			setCountVues(vue)
		})
	}, [socket])

	useEffect(() => handleSocketEvents(), [handleSocketEvents])

	return (
		<footer className="relative pb-10" role="contentinfo">
			<Container classname="flex justify-center items-center mt-5 md:mt-0">
				<span className="inline-flex items-center font-quicksand text-sm font-semibold dark:text-white">
					<img src="/static/logo.svg" width="40" height="27.19" className="dark:brightness-[4] mr-3" alt="logo"/>
					NikolasDev © { new Date().getFullYear() }
					<span className="ml-2.5 mr-2">•</span>
					<svg focusable="false" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" height={0} width={0}>
						<defs>
							<clipPath id="svgPath">
								<path d="M13.35 20.13c-.76.69-1.93.69-2.69-.01l-.11-.1C5.3 15.27 1.87 12.16 2 8.28c.06-1.7.93-3.33 2.34-4.29 2.64-1.8 5.9-.96 7.66 1.1 1.76-2.06 5.02-2.91 7.66-1.1 1.41.96 2.28 2.59 2.34 4.29.14 3.88-3.3 6.99-8.55 11.76l-.1.09z"/>
							</clipPath>
						</defs>
					</svg>
					<Tippy content={'Likes\n'+ countLike} className="whitespace-pre-line text-center" offset={[0, 17]} placement="top">
					<div onClick={handleLike} className="flex items-center justify-center relative w-[24px] h-[24px] hover:cursor-pointer heart-wrapper">
						<svg focusable="false" aria-hidden="true" fill="currentColor" className="absolute top-0 left-0 w-full h-full" viewBox="0 0 24 24">
							<path d="M19.66 3.99c-2.64-1.8-5.9-.96-7.66 1.1-1.76-2.06-5.02-2.91-7.66-1.1-1.4.96-2.28 2.58-2.34 4.29-.14 3.88 3.3 6.99 8.55 11.76l.1.09c.76.69 1.93.69 2.69-.01l.11-.1c5.25-4.76 8.68-7.87 8.55-11.75-.06-1.7-.94-3.32-2.34-4.28zM12.1 18.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/>
						</svg>
						<a href="/" aria-label="like" className="block overflow-hidden w-full h-full relative heart-clip"/>
					</div>
					</Tippy>
					<span className="ml-1 font-bold">{ countLike }</span>
					<span className="ml-2.5 mr-2">•</span>
					<Tippy content={'Visites\n'+ countVues} className="whitespace-pre-line text-center" offset={[0, 17.5]} placement="top">
						<div className="flex items-center justify-center relative w-[24px] h-[24px]">
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
								<path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
								<path fillRule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
								<path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
							</svg>
						</div>
					</Tippy>
					<span className="ml-1 font-bold">{ countVues }</span>
				</span>
			</Container>
		</footer>
	)
}

export default Footer