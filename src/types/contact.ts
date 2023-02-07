export interface IContact {
	name: string | null
	firstname: string | null
	from: string | null
	content: string | null
}

export interface IContactError {
	id: string
	message: string | null
	field: string | null
	isValid: boolean
}