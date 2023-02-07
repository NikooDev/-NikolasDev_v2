/**
 * NoFlash.js
 * Permet de charger le mode sombre avant l'exécution de la page
 * Empêche le scintillement des pages avec Firefox et Safari
 */
(() => {
	let theme = localStorage.getItem('theme'), classname = 'dark'

	if(theme === 'light') document.documentElement.classList.remove(classname)
	else document.documentElement.classList.add(classname)
})()