import { useMediaQuery } from 'react-responsive'

const useResponsive = () => {
	const Sm = useMediaQuery({
		query: '(max-width: 640px)'
	})

	const Md = useMediaQuery({
		query: '(max-width: 900px)'
	})

	const Lg = useMediaQuery({
		query: '(max-width: 1024px)'
	})

	return {
		Sm, Md, Lg
	}
}

export default useResponsive