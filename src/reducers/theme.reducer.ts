import { IInitialTheme, IAction } from '@App/types/theme'

let theme = typeof window !== 'undefined' && window.localStorage.getItem('theme') as string

const initialState = {
	dark: theme
}

const ThemeReducer = (initialState: IInitialTheme, action: IAction) => {
	switch (action.type) {
		case 'SET_THEME':
			return {
				...initialState,
				dark: action.payload
			}
		default:
			return initialState
	}
}

export {
	initialState, ThemeReducer
}