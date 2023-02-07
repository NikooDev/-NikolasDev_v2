class Typewriter {
	public txtElement: HTMLSpanElement
	public words: string[] = []
	public txt: string
	public wordIndex: number
	public wait: number
	public isDeleting: boolean

	constructor(txtElement: HTMLSpanElement, words: string[], wait = 3000) {
		this.txtElement = txtElement
		this.words = words
		this.txt = ""
		this.wordIndex = 0
		this.wait = wait
		this.isDeleting = false
		this.type()
	}

	public type() {
		const current = this.wordIndex % this.words.length, fullTxt = this.words[current]
		let typeSpeed = 50

		if(this.isDeleting) {
			this.txt = fullTxt.substring(0, this.txt.length - 1)
		} else {
			this.txt = fullTxt.substring(0, this.txt.length + 1)
		}

		this.txtElement.innerHTML = '<span>'+this.txt+'</span>'

		if(this.isDeleting) typeSpeed /= 2

		if(!this.isDeleting && this.txt === fullTxt) {
			typeSpeed = this.wait
			this.isDeleting = true
		} else if (this.isDeleting && this.txt === "") {
			this.isDeleting = false
			this.wordIndex++
			typeSpeed = 50
		}

		setTimeout(() => this.type(), typeSpeed)
	}
}

export default Typewriter