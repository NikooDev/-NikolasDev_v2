const markerSvg = `<svg focusable="false" fill="#fff" viewBox="0 0 24 24">
	<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
</svg>`

const renderMarker = () => {
	const el = document.createElement('div') as HTMLDivElement
	el.innerHTML = markerSvg+`
		<div id="popup" class="marker-popup">
			<p><b>Nicolas TUAL</b><br/>
			56700 Kervignac</p>
			<p>07 83 88 72 96</p>
		</div>`
	el.style.opacity = '0'
	el.style.marginTop = '-.85rem'
	el.style.position = 'relative'
	el.classList.add('fade-in-markers')
	el.style.width = '2rem'
	el.style.pointerEvents = 'auto'
	return el
}

export default renderMarker