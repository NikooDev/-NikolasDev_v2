import React from 'react'
import Image from 'next/image'
import Masonry from 'react-masonry-css'
import Tippy, { useSingleton } from '@tippyjs/react'
import { SocketIO, TailwindCSS } from '@App/components/icons/skills'
import Section from '@App/components/layout/section'
import Container from '@App/components/layout/container'
import Title from '@App/components/layout/title'

const Projects = () => {
	const [source, target] = useSingleton()
	const card = "flex flex-col bg-white dark:bg-[#212529] rounded-2xl shadow-lg mb-4 md:mb-8 font-quicksand dark:opacity-80 opacity-80 dark:hover:opacity-100 hover:opacity-100 transition-opacity duration-300"

	return (
		<Section classname="mt-32 pt-14" id="projects">
			<Container>
				<Title>RÉALISATIONS</Title>
				<Masonry breakpointCols={{default: 2, 768: 1}} className="flex mt-16 w-auto p-3 md:p-0" columnClassName="col">
					<div className={card}>
						<div className="relative min-h-[302.41px]">
							<span className="absolute -top-3.5 left-6 text-sm text-white font-semibold py-1 px-3 z-[40] rounded-3xl bg-gradient-to-tr from-[#6a98ef] to-[#4961db]">Développement en cours</span>
							<Image src="/static/projects/wakychat.jpg" blurDataURL="/static/projects/wakychat.jpg" placeholder="blur" sizes="100%, 100%" fill className="rounded-t-2xl object-cover" alt="wakychat" />
						</div>
						<div className="relative z-30 p-4 bg-white dark:bg-[#212529] rounded-b-2xl">
							<p className="text-lg font-semibold">WakyChat</p>
							<div className="flex items-center justify-center mt-3 mb-8 relative">
								<Tippy singleton={source} moveTransition="transform .2s ease-out" />
								<Tippy content="ReactJS" singleton={target}>
									<div className="pt-3">
										<div className="relative w-[3.5rem] h-[1.8rem]">
											<Image src="/static/skills/react.svg" fill alt="react"/>
										</div>
									</div>
								</Tippy>
								<Tippy content="NodeJS" singleton={target}>
									<div className="pt-3">
										<div className="relative w-[3.5rem] h-[1.8rem]">
											<Image src="/static/skills/nodejs.svg" fill alt="node"/>
										</div>
									</div>
								</Tippy>
								<Tippy content="Socket.io" singleton={target}>
									<div className="pt-3">
										<div className="flex justify-center w-[3.5rem] h-[1.8rem]">
											<SocketIO height={30} width={30}/>
										</div>
									</div>
								</Tippy>
								<Tippy content="AdonisJS" singleton={target}>
									<div className="pt-3">
										<div className="relative w-[3.5rem] h-[1.8rem]">
											<Image src="/static/skills/adonisjs.svg" fill alt="adonisjs"/>
										</div>
									</div>
								</Tippy>
								<Tippy content="PostgreSQL" singleton={target}>
									<div className="pt-3">
										<div className="relative w-[3.5rem] h-[1.8rem]">
											<Image src="/static/skills/postgresql.svg" fill alt="postgresql"/>
										</div>
									</div>
								</Tippy>
							</div>
							<p>Chat en temps réel avec globe intéractif permettant de voir les utilisateurs connectés selon leur localisation sur le globe.</p>
						</div>
					</div>
					<div className={card}>
						<div className="relative min-h-[302.41px]">
							<Image src="/static/projects/portfolio.jpg" blurDataURL="/static/projects/portfolio.jpg" fill placeholder="blur" sizes="100%, 100%" className="relative rounded-t-2xl object-cover" alt="portfolio" />
						</div>
						<div className="relative z-30 p-4 bg-white dark:bg-[#212529] rounded-b-2xl">
							<p className="text-lg font-semibold">Portfolio NikolasDev.com</p>
							<div className="flex items-center justify-center mt-3 mb-3 relative">
								<Tippy singleton={source} moveTransition="transform .2s ease-out" />
								<Tippy content="ReactJS" singleton={target}>
									<div className="pt-3">
										<div className="relative w-[3.5rem] h-[1.8rem]">
											<Image src="/static/skills/react.svg" fill alt="react"/>
										</div>
									</div>
								</Tippy>
								<Tippy content="NodeJS" singleton={target}>
									<div className="pt-3">
										<div className="relative w-[3.5rem] h-[1.8rem]">
											<Image src="/static/skills/nodejs.svg" fill alt="node"/>
										</div>
									</div>
								</Tippy>
								<Tippy content="Socket.io" singleton={target}>
									<div className="pt-3">
										<div className="flex justify-center w-[3.5rem] h-[1.8rem]">
											<SocketIO height={30} width={30}/>
										</div>
									</div>
								</Tippy>
								<Tippy content="Tailwind CSS" singleton={target}>
									<div className="pt-3">
										<div className="flex justify-center w-[3.5rem] h-[1.8rem]">
											<TailwindCSS height={30} width={30}/>
										</div>
									</div>
								</Tippy>
							</div>
						</div>
					</div>
					<div className={card}>
						<div className="relative min-h-[302.41px]">
							<Image src="/static/projects/groupomania.jpg" blurDataURL="/static/projects/groupomania.jpg" fill placeholder="blur" sizes="100%, 100%" className="relative rounded-t-2xl object-cover" alt="groupomania" />
						</div>
						<div className="relative z-30 p-4 bg-white dark:bg-[#212529] rounded-b-2xl">
							<p className="text-lg font-semibold">Réseau social</p>
							<div className="flex items-center justify-center mt-3 mb-8 relative">
								<Tippy singleton={source} moveTransition="transform .2s ease-out" />
								<Tippy content="ReactJS" singleton={target}>
									<div className="pt-3">
										<div className="relative w-[3.5rem] h-[1.8rem]">
											<Image src="/static/skills/react.svg" fill alt="react"/>
										</div>
									</div>
								</Tippy>
								<Tippy content="NodeJS" singleton={target}>
									<div className="pt-3">
										<div className="relative w-[3.5rem] h-[1.8rem]">
											<Image src="/static/skills/nodejs.svg" fill alt="node"/>
										</div>
									</div>
								</Tippy>
								<Tippy content="AdonisJS" singleton={target}>
									<div className="pt-3">
										<div className="relative w-[3.5rem] h-[1.8rem]">
											<Image src="/static/skills/adonisjs.svg" fill alt="adonisjs"/>
										</div>
									</div>
								</Tippy>
								<Tippy content="PostgreSQL" singleton={target}>
									<div className="pt-3">
										<div className="relative w-[3.5rem] h-[1.8rem]">
											<Image src="/static/skills/postgresql.svg" fill alt="postgresql"/>
										</div>
									</div>
								</Tippy>
							</div>
							<p>Réalisation d'un réseau social professionnel (Projet étudiant).</p>
						</div>
					</div>
					<div className={card}>
						<div className="relative min-h-[302.41px]">
							<Image src="/static/projects/kanap.jpg" blurDataURL="/static/projects/kanap.jpg" fill placeholder="blur" sizes="100%, 100%" className="relative rounded-t-2xl object-cover" alt="kanap" />
						</div>
						<div className="relative z-30 p-4 bg-white dark:bg-[#212529] rounded-b-2xl">
							<p className="text-lg font-semibold">E-commerce</p>
							<div className="flex items-center justify-center mt-3 mb-8 relative">
								<Tippy singleton={source} moveTransition="transform .2s ease-out" />
								<Tippy content="HTML" singleton={target}>
									<div className="pt-3">
										<div className="relative w-[3.5rem] h-[1.8rem]">
											<Image src="/static/skills/html.svg" fill alt="html"/>
										</div>
									</div>
								</Tippy>
								<Tippy content="CSS3" singleton={target}>
									<div className="pt-3">
										<div className="relative w-[3.5rem] h-[1.8rem]">
											<Image src="/static/skills/css.svg" fill alt="css"/>
										</div>
									</div>
								</Tippy>
								<Tippy content="Javascript" singleton={target}>
									<div className="pt-3">
										<div className="relative w-[3.5rem] h-[1.8rem]">
											<Image src="/static/skills/js.svg" fill alt="javascript"/>
										</div>
									</div>
								</Tippy>
								<Tippy content="NodeJS" singleton={target}>
									<div className="pt-3">
										<div className="relative w-[3.5rem] h-[1.8rem]">
											<Image src="/static/skills/nodejs.svg" fill alt="node"/>
										</div>
									</div>
								</Tippy>
							</div>
							<p>Récupération de données d'une API REST (Projet étudiant).</p>
						</div>
					</div>
					<div className={card}>
						<div className="relative min-h-[302.41px]">
							<Image src="/static/projects/ohmyfood.jpg" blurDataURL="/static/projects/ohmyfood.jpg" fill placeholder="blur" sizes="100%, 100%" className="relative rounded-t-2xl object-cover" alt="ohmyfood" />
						</div>
						<div className="relative z-30 p-4 bg-white dark:bg-[#212529] rounded-b-2xl">
							<p className="text-lg font-semibold">Intégration web</p>
							<div className="flex items-center justify-center mt-3 mb-8 relative">
								<Tippy singleton={source} moveTransition="transform .2s ease-out" />
								<Tippy content="HTML" singleton={target}>
									<div className="pt-3">
										<div className="relative w-[3.5rem] h-[1.8rem]">
											<Image src="/static/skills/html.svg" fill alt="html"/>
										</div>
									</div>
								</Tippy>
								<Tippy content="CSS3" singleton={target}>
									<div className="pt-3">
										<div className="relative w-[3.5rem] h-[1.8rem]">
											<Image src="/static/skills/css.svg" fill alt="css"/>
										</div>
									</div>
								</Tippy>
								<Tippy content="Javascript" singleton={target}>
									<div className="pt-3">
										<div className="relative w-[3.5rem] h-[1.8rem]">
											<Image src="/static/skills/js.svg" fill alt="javascript"/>
										</div>
									</div>
								</Tippy>
							</div>
							<p>Intégration d'une maquette desktop vers mobile (Projet étudiant).</p>
						</div>
					</div>
					<div className={card}>
						<div className="relative min-h-[302.41px]">
							<Image src="/static/projects/agence.jpg" blurDataURL="/static/projects/agence.jpg" fill placeholder="blur" sizes="100%, 100%" className="relative rounded-t-2xl object-cover" alt="agence" />
						</div>
						<div className="relative z-30 p-4 bg-white dark:bg-[#212529] rounded-b-2xl">
							<p className="text-lg font-semibold">Optimisation SEO</p>
							<div className="flex items-center justify-center mt-3 mb-8 relative">
								<Tippy singleton={source} moveTransition="transform .2s ease-out" />
								<Tippy content="HTML" singleton={target}>
									<div className="pt-3">
										<div className="relative w-[3.5rem] h-[1.8rem]">
											<Image src="/static/skills/html.svg" fill alt="html"/>
										</div>
									</div>
								</Tippy>
								<Tippy content="CSS3" singleton={target}>
									<div className="pt-3">
										<div className="relative w-[3.5rem] h-[1.8rem]">
											<Image src="/static/skills/css.svg" fill alt="css"/>
										</div>
									</div>
								</Tippy>
							</div>
							<p>Optimisation SEO d'un site internet existant (Projet étudiant).</p>
						</div>
					</div>
					<div className={card}>
						<div className="relative min-h-[302.41px]">
							<Image src="/static/projects/booki.jpg" blurDataURL="/static/projects/booki.jpg" fill placeholder="blur" sizes="100%, 100%" className="relative rounded-t-2xl object-cover" alt="booki" />
						</div>
						<div className="relative z-30 p-4 bg-white dark:bg-[#212529] rounded-b-2xl">
							<p className="text-lg font-semibold">Site vitrine</p>
							<div className="flex items-center justify-center mt-3 mb-8 relative">
								<Tippy singleton={source} moveTransition="transform .2s ease-out" />
								<Tippy content="HTML" singleton={target}>
									<div className="pt-3">
										<div className="relative w-[3.5rem] h-[1.8rem]">
											<Image src="/static/skills/html.svg" fill alt="html"/>
										</div>
									</div>
								</Tippy>
								<Tippy content="CSS3" singleton={target}>
									<div className="pt-3">
										<div className="relative w-[3.5rem] h-[1.8rem]">
											<Image src="/static/skills/css.svg" fill alt="css"/>
										</div>
									</div>
								</Tippy>
							</div>
							<p>Création d'un site responsive HTML + CSS à partir d'une maquette (Projet étudiant).</p>
						</div>
					</div>
				</Masonry>
			</Container>
		</Section>
	)
}

export default Projects