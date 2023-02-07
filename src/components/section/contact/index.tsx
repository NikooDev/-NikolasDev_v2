import React, { useEffect, useRef, useState } from 'react'
import { IContact } from '@App/types/contact'
import validContact, { notifStyle } from '@App/validators/contact'
import toast from 'react-hot-toast'
import Section from '@App/components/layout/section'
import Container from '@App/components/layout/container'
import Title from '@App/components/layout/title'
import Class from 'classnames'
import Footer from '@App/components/include/footer'

const Contact = () => {
	const [errorField, setErrorField] = useState<string | null>(null)
	const [contact, setContact] = useState<IContact>({ name: null, firstname: null, from: null, content: null })
	const [loading, setLoading] = useState<boolean>(false)
	const timer = useRef<ReturnType<typeof setTimeout>>()

	useEffect(() => {
		const training = document.getElementById('training') as HTMLDivElement

		window.addEventListener('scroll', () => {
			if (window.scrollY < training.offsetTop + 800) {
				toast.dismiss()
			}
		})
	}, [])

	const handleChange = (event: React.ChangeEvent) => {
		const target = event.currentTarget as HTMLInputElement

		setErrorField(null)
		setContact({ ...contact, [target.name]: target.value })
	}

	const handleSendMessage = async (event: React.FormEvent) => {
		event.preventDefault()

		clearTimeout(timer.current)

		toast.dismiss()
		const error = validContact(contact)

		if (!error.isValid && error.field) {
			setErrorField(error.field)
			const input = document.getElementById(error.field) as HTMLInputElement
			input.focus()
			return toast.error(error.message, { id: error.id, duration: 5000, icon: null, style: { ...notifStyle, backgroundColor: '#ef5454' } })
		} else {
			setErrorField(null)
		}

		setLoading(true)

		const req = await fetch('/api/postmail', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(contact)
		})

		const res = await req.json()
		setLoading(false)

		if (res.message.length !== 0) {
			if (res.type === 'success') {
				toast.success(res.message, { id: 'success', duration: 5000, icon: null, style: { ...notifStyle, backgroundColor: '#4fad58' } })
				setContact({ name: '', firstname: '', from: '', content: '' })
			} else {
				toast.error(res.message, { id: 'error', duration: 5000, icon: null, style: { ...notifStyle, backgroundColor: '#ef5454' } })
			}
		}
	}

	return (
		<Section classname="mt-32 pt-[4rem] h-screen" id="contact">
			<Container>
				<Title>GET IN TOUCH</Title>
				<div className="flex justify-center items-center mt-14 relative">
					<form method="post" autoComplete="off" onSubmit={handleSendMessage} className="flex flex-col p-3 md:p-8 w-full md:max-w-[80%] sm:max-w-[80%] lg:max-w-[60%] max-w-[100%] font-quicksand">
						<div className="flex justify-between">
							<input type="text"
										 name="name"
										 id="name"
										 onChange={handleChange}
										 disabled={loading}
										 value={contact.name ? contact.name : ''}
										 className={Class(
											 'rounded-2xl mb-5 mr-2.5 py-3 px-4 w-full outline-none bg-white dark:bg-[#212529] border-2 border-white dark:border-[#212529] shadow-lg outline-0 font-medium capitalize transition-border',
											 errorField === 'name' && 'border-2 border-red-500 dark:border-red-500 animate-pulse'
										 )}
										 placeholder="Nom"/>
							<input type="text"
										 name="firstname"
										 id="firstname"
										 onChange={handleChange}
										 disabled={loading}
										 value={contact.firstname ? contact.firstname : ''}
										 className={Class(
											 'rounded-2xl mb-5 ml-2.5 py-3 px-4 w-full outline-none bg-white dark:bg-[#212529] border-2 border-white dark:border-[#212529] shadow-lg outline-0 font-medium capitalize',
											 errorField === 'firstname' && 'border-2 border-red-500 dark:border-red-500 animate-pulse'
										 )}
										 placeholder="Prénom"/>
						</div>
						<input type="text"
									 name="from"
									 id="from"
									 onChange={handleChange}
									 disabled={loading}
									 value={contact.from ? contact.from : ''}
									 className={Class(
										 'rounded-2xl mb-5 py-3 px-4 outline-none bg-white dark:bg-[#212529] border-2 border-white dark:border-[#212529] shadow-lg outline-0 font-medium',
										 errorField === 'from' && 'border-2 border-red-500 dark:border-red-500 animate-pulse'
									 )}
									 placeholder="Adresse e-mail"/>
						<textarea name="content"
											id="content"
											className={Class(
												'rounded-2xl mb-5 py-3 px-4 outline-none bg-white dark:bg-[#212529] border-2 border-white dark:border-[#212529] shadow-lg resize-none outline-0 font-medium',
												errorField === 'content' && 'border-2 border-red-500 dark:border-red-500 animate-pulse'
											)}
											rows={4}
											maxLength={500}
											onChange={handleChange}
											disabled={loading}
											value={contact.content ? contact.content : ''}
											placeholder="Votre message"/>
						<button disabled={loading} className="inline-flex justify-center items-center rounded-2xl p-3 outline-none disabled:opacity-70 disabled:hover:to-[#4961db] bg-[#4961db] bg-gradient-to-r from-[#7f9efa] to-[#394fbf] hover:bg-[#394fbf] text-white hover:to-transparent transition-colors duration-300 shadow-lg text-base font-semibold text-white" type="submit">
							<svg className={Class(loading ? '' : 'hidden','animate-spin -ml-1 mr-3 h-5 w-5 text-white')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
								<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
								<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
							</svg>
							<span>{ loading ? 'ENVOI EN COURS...' : 'ENVOYER' }</span>
						</button>
					</form>
				</div>
			</Container>
			<Footer/>
		</Section>
	)
}

export default Contact