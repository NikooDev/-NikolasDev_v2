import React, { useEffect, useState } from 'react'
import animateScrollTo from 'animated-scroll-to'

const useAnchor = () => {
	const [anchor, setAnchor] = useState<string>('intro')
	const [currentAnchor, setCurrentAnchor] = useState<string>('')

	useEffect(() => {
		const sections = document.querySelectorAll('section')
		window.addEventListener('scroll', () => {
			sections.forEach((section) => {
				if (window.scrollY >= section.offsetTop - 67) {
					setCurrentAnchor(section.getAttribute('id') as string)
				}
			})
		})
	}, [anchor])

	useEffect(() => {
		if (currentAnchor.length > 1) setAnchor(currentAnchor)
	}, [currentAnchor])

	const handleAnchor = (event: React.MouseEvent<HTMLAnchorElement> | React.TouchEvent) => {
		event.preventDefault()

		let target = event.currentTarget as HTMLAnchorElement,
			anchor = target.getAttribute('data-anchor') as string,
			element = document.getElementById(anchor) as HTMLDivElement

		setAnchor(anchor)

		animateScrollTo(!element ? 0 : element.offsetTop - 67, {
			speed: 750, easing: (t) => { return 1 + (--t) * t * t * t * t }
		}).then()
	}

	return {
		handleAnchor,
		anchor
	}
}

export default useAnchor