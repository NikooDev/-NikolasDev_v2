import React from 'react'
import { SocketIO } from '@App/components/icons/skills'
import Section from '@App/components/layout/section'
import Container from '@App/components/layout/container'
import Title from '@App/components/layout/title'

const Skills = () => {
	return (
		<Section classname="mt-32 py-14 px-4 bg-gradient-to-tl from-[#4961db] to-[#212529] dark:from-transparent dark:to-transparent dark:bg-transparent" id="skills">
			<Container>
				<Title classname="text-white">COMPÉTENCES</Title>
				<div className="flex mb-5 mt-14">
					<div className="col5of12">
						<h2 className="mb-14 font-semibold font-quicksand text-center text-gray-100 text-lg">Intégration</h2>
						<div className="flex flex-wrap justify-center pb-20 md:flex-nowrap">
							<div className="flex flex-col items-center w-1/2">
								<img src="/static/skills/html.svg" className="rounded-2xl bg-gray-100 dark:bg-[#212529] shadow-lg w-[3.125rem] h-[3.125rem] p-2.5 md:w-[4rem] md:h-[4rem] md:p-3 lg:w-[5rem] lg:h-[5rem] lg:p-3.5" height={80} width={80} alt="html" />
								<h3 className="mt-2 text-xs md:text-sm font-semibold text-gray-100">HTML5</h3>
							</div>
							<div className="flex flex-col items-center w-1/2">
								<img src="/static/skills/css.svg" className="rounded-2xl bg-gray-100 dark:bg-[#212529] shadow-lg w-[3.125rem] h-[3.125rem] p-2.5 md:w-[4rem] md:h-[4rem] md:p-3 lg:w-[5rem] lg:h-[5rem] lg:p-3.5" height={80} width={80} alt="css" />
								<h3 className="mt-2 text-xs md:text-sm font-semibold text-gray-100">CSS3</h3>
							</div>
						</div>
					</div>
					<div className="col2of12 overflow-hidden relative">
						<div className="flex items-center justify-center relative z-30 rounded-2xl p-1 mx-auto bg-[#2d3761] dark:bg-[#0f1113] h-[1.875rem] w-[1.875rem]">
							<div className="rounded-2xl bg-white dark:bg-[#597de6] h-[.75rem] w-[.75rem]" />
						</div>
						<div className="mx-auto h-full w-[1px] border-r border-[#6e7bb3] dark:border-[#45515c] line line-top" />
					</div>
					<div className="col5of12">
						<h2 className="mb-14 font-semibold font-quicksand text-center text-gray-100 text-lg">Back-End</h2>
						<div className="flex flex-wrap justify-center pb-20 md:flex-nowrap">
							<div className="flex flex-col items-center w-1/2 mb-5">
								<img src="/static/skills/nodejs.svg" className="rounded-2xl bg-gray-100 dark:bg-[#212529] shadow-lg w-[3.125rem] h-[3.125rem] p-2.5 md:w-[4rem] md:h-[4rem] md:p-3 lg:w-[5rem] lg:h-[5rem] lg:p-3.5" height={80} width={80} alt="node" />
								<h3 className="mt-2 text-xs md:text-sm font-semibold text-gray-100">NODE.JS</h3>
							</div>
							<div className="flex flex-col items-center w-1/2 mb-5">
								<div className="flex justify-center rounded-2xl bg-gray-100 dark:bg-[#212529] shadow-lg w-[3.125rem] h-[3.125rem] p-2.5 md:w-[4rem] md:h-[4rem] md:p-3 lg:w-[5rem] lg:h-[5rem] lg:p-3.5">
									<SocketIO />
								</div>
								<h3 className="mt-2 text-xs md:text-sm font-semibold text-gray-100">SOCKET.IO</h3>
							</div>
							<div className="flex flex-col items-center w-1/2">
								<img src="/static/skills/adonisjs.svg" className="rounded-2xl bg-gray-100 dark:bg-[#212529] shadow-lg w-[3.125rem] h-[3.125rem] p-2.5 md:w-[4rem] md:h-[4rem] md:p-3 lg:w-[5rem] lg:h-[5rem] lg:p-3.5" height={80} width={80} alt="adonis" />
								<h3 className="mt-2 text-xs md:text-sm font-semibold text-gray-100">ADONIS.JS</h3>
							</div>
						</div>
					</div>
				</div>
				<div className="mx-auto col7of12 relative overflow-hidden">
					<hr className="bg-none h-full border-t border-[#6e7bb3] dark:border-[#45515c] line line-right" />
				</div>
				<div className="flex">
					<div className="col5of12">
						<div className="-mt-4 h-36">
							<div className="flex items-center justify-center relative rounded-2xl p-1 mx-auto bg-[#2e3862] dark:bg-[#0f1113] h-[1.875rem] w-[1.875rem]">
								<div className="rounded-2xl bg-white dark:bg-[#597de6] h-[.75rem] w-[.75rem]" />
							</div>
							<div className="mx-auto h-60 -mt-40 md:h-full md:-mt-14 w-[1px] border-r border-[#6e7bb3] dark:border-[#45515c]" />
						</div>
						<h2 className="mb-14 font-semibold font-quicksand text-center text-gray-100 text-lg">Front-End</h2>
						<div className="flex flex-wrap justify-center pb-20 md:flex-nowrap">
							<div className="flex flex-col items-center w-1/2 mb-5">
								<img src="/static/skills/js.svg" className="rounded-2xl bg-gray-100 dark:bg-[#212529] shadow-lg w-[3.125rem] h-[3.125rem] p-2.5 md:w-[4rem] md:h-[4rem] md:p-3 lg:w-[5rem] lg:h-[5rem] lg:p-3.5" height={80} width={80} alt="javascript" />
								<h3 className="mt-2 text-xs md:text-sm font-semibold text-gray-100">JAVASCRIPT</h3>
							</div>
							<div className="flex flex-col items-center w-1/2 mb-5">
								<img src="/static/skills/redux.svg" className="rounded-2xl bg-gray-100 dark:bg-[#212529] shadow-lg w-[3.125rem] h-[3.125rem] p-2.5 md:w-[4rem] md:h-[4rem] md:p-3 lg:w-[5rem] lg:h-[5rem] lg:p-3.5" height={80} width={80} alt="redux" />
								<h3 className="mt-2 text-xs md:text-sm font-semibold text-gray-100">REDUX</h3>
							</div>
							<div className="flex flex-col items-center w-1/2">
								<img src="/static/skills/react.svg" className="rounded-2xl bg-gray-100 dark:bg-[#212529] shadow-lg w-[3.125rem] h-[3.125rem] p-2.5 md:w-[4rem] md:h-[4rem] md:p-3 lg:w-[5rem] lg:h-[5rem] lg:p-3.5" height={80} width={80} alt="react" />
								<h3 className="mt-2 text-xs md:text-sm font-semibold text-gray-100">REACT.JS</h3>
							</div>
						</div>
					</div>
					<div className="col2of12 -mt-4 overflow-hidden relative">
						<div className="flex items-center justify-center relative z-30 rounded-2xl p-1 mx-auto bg-[#333f76] dark:bg-[#0f1113] h-[1.875rem] w-[1.875rem]">
							<div className="rounded-2xl bg-white dark:bg-[#597de6] h-[.75rem] w-[.75rem]" />
						</div>
						<div className="mx-auto h-full w-[1px] border-r border-[#6e7bb3] dark:border-[#45515c] line line-top line-delay" />
					</div>
					<div className="col5of12">
						<div className="-mt-4 h-36">
							<div className="flex items-center justify-center relative rounded-2xl p-1 mx-auto bg-[#37458b] dark:bg-[#0f1113] h-[1.875rem] w-[1.875rem]">
								<div className="rounded-2xl bg-white dark:bg-[#597de6] h-[.75rem] w-[.75rem]" />
							</div>
							<div className="mx-auto h-full w-[1px] border-r border-[#6e7bb3] dark:border-[#45515c] -mt-14" />
						</div>
						<h2 className="mb-14 font-semibold font-quicksand text-center text-gray-100 text-lg">Databases</h2>
						<div className="flex flex-wrap justify-center pb-20 md:flex-nowrap">
							<div className="flex flex-col items-center w-1/2 mb-5">
								<img src="/static/skills/mysql.svg" className="rounded-2xl bg-gray-100 dark:bg-[#212529] shadow-lg w-[3.125rem] h-[3.125rem] p-2.5 md:w-[4rem] md:h-[4rem] md:p-3 lg:w-[5rem] lg:h-[5rem] lg:p-3.5" height={80} width={80} alt="mysql" />
								<h3 className="mt-2 text-xs md:text-sm font-semibold text-gray-100">MYSQL</h3>
							</div>
							<div className="flex flex-col items-center w-1/2 mb-5">
								<img src="/static/skills/postgresql.svg" className="rounded-2xl bg-gray-100 dark:bg-[#212529] shadow-lg w-[3.125rem] h-[3.125rem] p-2.5 md:w-[4rem] md:h-[4rem] md:p-3 lg:w-[5rem] lg:h-[5rem] lg:p-3.5" height={80} width={80} alt="postgresql" />
								<h3 className="mt-2 text-xs md:text-sm font-semibold text-gray-100 text-center">POSTGRE</h3>
							</div>
							<div className="flex flex-col items-center w-1/2">
								<img src="/static/skills/mongodb.svg" className="rounded-2xl bg-gray-100 dark:bg-[#212529] shadow-lg w-[3.125rem] h-[3.125rem] p-2.5 md:w-[4rem] md:h-[4rem] md:p-3 lg:w-[5rem] lg:h-[5rem] lg:p-3.5" height={80} width={80} alt="mongodb" />
								<h3 className="mt-2 text-xs md:text-sm font-semibold text-gray-100">MONGODB</h3>
							</div>
						</div>
					</div>
				</div>
				<div className="mb-14 h-9">
					<div className="flex items-center justify-center relative rounded-2xl p-1 mx-auto bg-[#394894] dark:bg-[#0f1113] h-[1.875rem] w-[1.875rem]">
						<div className="rounded-2xl bg-white dark:bg-[#597de6] h-[.75rem] w-[.75rem]" />
					</div>
					<div className="mx-auto h-full w-[1px] border-r border-[#6e7bb3] dark:border-[#45515c]" />
				</div>
				<div className="flex mb-4">
					<div className="w-[70%] mx-auto">
						<h2 className="mb-14 font-semibold font-quicksand text-center text-gray-100 text-lg">Outils & langages divers</h2>
						<div className="flex flex-wrap justify-center md:flex-nowrap md:justify-between">
							<div className="flex flex-col items-center w-1/2 flex-33">
								<img src="/static/skills/typescript.svg" className="rounded-2xl bg-gray-100 dark:bg-[#212529] shadow-lg w-[3.125rem] h-[3.125rem] p-2.5 md:w-[4rem] md:h-[4rem] md:p-3 lg:w-[5rem] lg:h-[5rem] lg:p-3.5" height={80} width={80} alt="typescript" />
								<h3 className="mt-2 text-xs md:text-sm font-semibold text-gray-100">TYPESCRIPT</h3>
							</div>
							<div className="flex flex-col items-center w-1/2 flex-33">
								<img src="/static/skills/sass.svg" className="rounded-2xl bg-gray-100 dark:bg-[#212529] shadow-lg w-[3.125rem] h-[3.125rem] p-2.5 md:w-[4rem] md:h-[4rem] md:p-3 lg:w-[5rem] lg:h-[5rem] lg:p-3.5" height={80} width={80} alt="sass" />
								<h3 className="mt-2 text-xs md:text-sm font-semibold text-gray-100">SASS</h3>
							</div>
							<div className="flex flex-col items-center w-1/2 flex-33">
								<img src="/static/skills/webstorm.svg" className="rounded-2xl bg-gray-100 dark:bg-[#212529] shadow-lg w-[3.125rem] h-[3.125rem] p-2.5 md:w-[4rem] md:h-[4rem] md:p-3 lg:w-[5rem] lg:h-[5rem] lg:p-3.5" height={80} width={80} alt="webstorm" />
								<h3 className="mt-2 text-xs md:text-sm font-semibold text-gray-100">WEBSTORM</h3>
							</div>
							<div className="flex flex-col items-center w-1/2 flex-33 mt-5 md:mt-auto">
								<img src="/static/skills/debian.svg" className="rounded-2xl bg-gray-100 dark:bg-[#212529] shadow-lg w-[3.125rem] h-[3.125rem] p-2.5 md:w-[4rem] md:h-[4rem] md:p-3 lg:w-[5rem] lg:h-[5rem] lg:p-3.5" height={80} width={80} alt="debian" />
								<h3 className="mt-2 text-xs md:text-sm font-semibold text-gray-100">DEBIAN</h3>
							</div>
							<div className="flex flex-col items-center w-1/2 flex-33 mt-5 md:mt-auto">
								<img src="/static/skills/nginx.svg" className="rounded-2xl bg-gray-100 dark:bg-[#212529] shadow-lg w-[3.125rem] h-[3.125rem] p-2.5 md:w-[4rem] md:h-[4rem] md:p-3 lg:w-[5rem] lg:h-[5rem] lg:p-3.5" height={80} width={80} alt="nginx" />
								<h3 className="mt-2 text-xs md:text-sm font-semibold text-gray-100">NGINX</h3>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</Section>
	)
}

export default Skills