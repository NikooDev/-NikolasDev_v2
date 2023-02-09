import React, { useCallback, useEffect, useState } from 'react'
import Tippy from '@tippyjs/react'
import useStat from '@App/hooks/useStat'
import Class from 'classnames'

const Stats = () => {
	const { handleLike, countLike, countVues, socket } = useStat()
	const [anim, setAnim] = useState<boolean>(false)

	const handleSocketAnimEvents = useCallback(() => {
		socket.on('animLike', () => {
			setAnim(true)
		})

		return () => {
			setAnim(false)
		}
	}, [socket])

	useEffect(() => handleSocketAnimEvents(), [handleSocketAnimEvents])

	return (
		<div className="fixed bottom-20 left-0 md:right-14 md:left-auto lg:right-14 lg:left-auto z-40">
			<div className={Class('relative', anim ? 'heart-anim' : '')}>
				<div className="flex items-center justify-center absolute -top-9 -right-3 w-[24px] h-[24px] scale-50">
					<svg focusable="false" aria-hidden="true" fill="#fff" className="absolute w-full h-full -top-8 -right-2 opacity-0" viewBox="0 0 24 24">
						<path id="svgPath" d="M19.66 3.99c-2.64-1.8-5.9-.96-7.66 1.1-1.76-2.06-5.02-2.91-7.66-1.1-1.4.96-2.28 2.58-2.34 4.29-.14 3.88 3.3 6.99 8.55 11.76l.1.09c.76.69 1.93.69 2.69-.01l.11-.1c5.25-4.76 8.68-7.87 8.55-11.75-.06-1.7-.94-3.32-2.34-4.28zM12.1 18.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/>
					</svg>
					<a href="/" aria-label="like" className="block overflow-hidden w-full h-full relative hearts-clip heart-1 opacity-0"/>
				</div>
				<div className="flex items-center justify-center absolute -top-6 right-0 w-[24px] h-[24px] scale-75">
					<svg focusable="false" aria-hidden="true" fill="#fff" className="absolute w-full h-full -top-5 right-0 opacity-0" viewBox="0 0 24 24">
						<path id="svgPath" d="M19.66 3.99c-2.64-1.8-5.9-.96-7.66 1.1-1.76-2.06-5.02-2.91-7.66-1.1-1.4.96-2.28 2.58-2.34 4.29-.14 3.88 3.3 6.99 8.55 11.76l.1.09c.76.69 1.93.69 2.69-.01l.11-.1c5.25-4.76 8.68-7.87 8.55-11.75-.06-1.7-.94-3.32-2.34-4.28zM12.1 18.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/>
					</svg>
					<a href="/" aria-label="like" className="block overflow-hidden w-full h-full relative hearts-clip heart-2 opacity-0"/>
				</div>
			</div>
			<Tippy content={'Likes\n'+ countLike} hideOnClick={false} className="whitespace-pre-line text-center" offset={[0, 17]} placement="left">
				<button className="flex justify-center items-center shadow-lg bg-red-500 h-12 w-12 heart-container rounded-tr-3xl rounded-br-3xl md:rounded-full">
					<div onClick={handleLike} className="flex items-center justify-center relative w-[24px] h-[24px] hover:cursor-pointer heart-wrapper">
						<svg focusable="false" aria-hidden="true" fill="#fff" className="absolute top-0 left-0 w-full h-full" viewBox="0 0 24 24">
							<path id="svgPath" d="M19.66 3.99c-2.64-1.8-5.9-.96-7.66 1.1-1.76-2.06-5.02-2.91-7.66-1.1-1.4.96-2.28 2.58-2.34 4.29-.14 3.88 3.3 6.99 8.55 11.76l.1.09c.76.69 1.93.69 2.69-.01l.11-.1c5.25-4.76 8.68-7.87 8.55-11.75-.06-1.7-.94-3.32-2.34-4.28zM12.1 18.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/>
						</svg>
						<a href="/" aria-label="like" className="block overflow-hidden w-full h-full relative heart-clip"/>
					</div>
				</button>
			</Tippy>
			<Tippy content={'Visites\n'+ countVues} className="whitespace-pre-line text-center" offset={[0, 17.5]} placement="left">
				<button className="flex justify-center items-center shadow-md bg-gradient-to-r from-[#6997f0] to-[#4962dd] h-12 w-12 mt-3 rounded-tr-3xl rounded-br-3xl md:rounded-full">
					<div className="flex items-center justify-center relative w-[24px] h-[24px]">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" viewBox="0 0 16 16">
							<path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
							<path fillRule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
							<path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
						</svg>
					</div>
				</button>
			</Tippy>
		</div>
	)
}

export default Stats