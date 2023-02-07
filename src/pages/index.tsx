import React from 'react'
import { Intro, About, Projects, Skills, Training, Contact } from '@App/components/section'

const Home = () => {
	return (
		<>
			<Intro/>
			<About/>
			<Projects/>
			<Skills/>
			<Training/>
			<Contact/>
		</>
	)
}

export default Home