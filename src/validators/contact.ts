import { IContact, IContactError } from '@App/types/contact'
import { CSSProperties } from 'react'

export const notifStyle: CSSProperties = {
	borderRadius: '15px', color: '#fff', fontSize: '.9rem',
	fontWeight: 600, fontFamily: 'Quicksand', textAlign: 'center', lineHeight: 1.5, textTransform: 'uppercase'
}

const validContact = (contact: IContact): IContactError => {
	const isEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}])|(([a-zA-Z\-\d]+\.)+[a-zA-Z]{2,}))$/i)
	let valid: IContactError = { id: '0', message: null, field: null, isValid: true }

	if (!contact.name || !contact.name.trim()) {
		valid = { id: '1', message: 'Veuillez renseigner votre nom', field: 'name', isValid: false }
		return valid
	} else if (!contact.firstname || !contact.firstname.trim()) {
		valid = { id: '2', message: 'Veuillez renseigner votre prénom', field: 'firstname', isValid: false }
		return valid
	} else if (!contact.from) {
		valid = { id: '3', message: 'Votre adresse e-mail est requise', field: 'from', isValid: false }
		return valid
	} else if (!isEmail.test(contact.from)) {
		valid = { id: '4', message: 'L\'adresse e-mail n\'est pas valide', field: 'from', isValid: false }
		return valid
	} else if (!contact.content || !contact.content.trim()) {
		valid = { id: '5', message: 'Veuillez renseigner un message', field: 'content', isValid: false }
		return valid
	}

	return valid
}

export default validContact