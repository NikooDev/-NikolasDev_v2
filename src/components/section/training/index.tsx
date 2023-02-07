import React from 'react'
import { Greta, MyDigitalSchool, OpenClassrooms } from '@App/components/icons/skills'
import Section from '@App/components/layout/section'
import Container from '@App/components/layout/container'
import Title from '@App/components/layout/title'

const Training = () => {
	return (
		<Section classname="mt-32 pt-14" id="training">
			<Container classname="flex flex-col justify-center items-center md:block">
				<Title>FORMATIONS</Title>
				<div className="flex relative h-full mx-auto max-w-[35rem] md:max-w-[none] mt-14">
					<svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" version="1.1" viewBox="0 0 800 800" className="absolute">
						<linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
							<stop offset="0%" stopColor="#6a98ef" />
							<stop offset="100%" stopColor="#4961db" />
						</linearGradient>
						<g className="stroke-[9] md:stroke-[3]" stroke="url(#gradient)" fill="none" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="23">
							<path d="M74.5 74.5Q739.5 132.5 400 400Q5.5 688.5 725.5 725.5 " markerEnd="url(#SvgjsMarker2364)"/>
						</g>
						<defs>
							<marker markerWidth="4" markerHeight="6" refX="1" refY="3" viewBox="0 0 6 6" orient="auto" id="SvgjsMarker2364"/>
						</defs>
					</svg>
					<div className="relative w-full h-full font-quicksand p-3 md:p-0">
						<div className="flex bg-white dark:bg-[#212529] rounded-2xl shadow-lg py-1 px-5 md:max-w-[22rem] w-full min-h-[5rem]">
							<div className="relative break-words py-3">
								<p className="flex items-center mb-2">
									<svg focusable="false" aria-hidden="true" fill="currentColor" className="mr-3" viewBox="0 0 24 24" height={24} width={24}>
										<path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/>
									</svg>
									<span className="font-semibold text-2xl">2022 - 2023</span>
								</p>
								<p className="flex items-center mb-3 mt-4">
									<svg focusable="false" aria-hidden="true" fill="currentColor" className="mr-3" viewBox="0 0 24 24" height={24} width={24}>
										<path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z"/>
									</svg>
									<span className="font-medium"><MyDigitalSchool width={200}/></span>
								</p>
								<p className="text-base">Bachelor Concepteur Développeur d'Application (BAC +3)</p>
							</div>
						</div>
						<div className="flex mx-auto mt-16 md:mt-32 bg-white dark:bg-[#212529] rounded-2xl shadow-lg py-1 px-5 md:max-w-[22rem] w-full min-h-[5rem]">
							<div className="relative break-words py-3">
								<p className="flex items-center mb-2">
									<svg focusable="false" aria-hidden="true" fill="currentColor" className="mr-3" viewBox="0 0 24 24" height={24} width={24}>
										<path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/>
									</svg>
									<span className="font-semibold text-2xl">2022</span>
								</p>
								<p className="flex items-center mb-1">
									<svg focusable="false" aria-hidden="true" fill="currentColor" className="mr-3" viewBox="0 0 24 24" height={24} width={24}>
										<path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z"/>
									</svg>
									<span className="font-medium"><OpenClassrooms height={35} width={200}/></span>
								</p>
								<p className="text-base">Titre professionnel Développeur Web (BAC +2)</p>
							</div>
						</div>
						<div className="flex ml-auto mt-16 md:mt-32 bg-white dark:bg-[#212529] rounded-2xl shadow-lg py-1 px-5 md:max-w-[22rem] w-full min-h-[5rem]">
							<div className="relative break-words py-3">
								<p className="flex items-center mb-2">
									<svg focusable="false" aria-hidden="true" fill="currentColor" className="mr-3" viewBox="0 0 24 24" height={24} width={24}>
										<path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/>
									</svg>
									<span className="font-semibold text-2xl">2019 - 2020</span>
								</p>
								<p className="flex items-center mb-3 mt-4">
									<svg focusable="false" aria-hidden="true" fill="currentColor" className="mr-3" viewBox="0 0 24 24" height={24} width={24}>
										<path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z"/>
									</svg>
									<span className="font-medium"><Greta width={200}/></span>
								</p>
								<p className="text-base">BAC Professionnel Système Numérique</p>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</Section>
	)
}

export default Training