import nodemailer from 'nodemailer'
import { NextApiRequest, NextApiResponse } from 'next'

const capitalize = (value: string) => {
	return value.charAt(0).toUpperCase() + value.slice(1)
}

const Postmail = (req: NextApiRequest, res: NextApiResponse) => {
	if (req.body) {
		if (!req.body.name || !req.body.firstname || !req.body.from || !req.body.content) {
			return res.json({ type: 'error', message: 'LE FORMULAIRE EST INCOMPLET' })
		}

		const mail = nodemailer.createTransport({
			service: 'gmail',
			host: 'smtp.gmail.com',
			auth: {
				user: 'nikola.tual@gmail.com',
				pass: 'elxswteqdwytgeug',
			},
		})

		const content = req.body.content.replace(/\n/g,'<br/>').trim()

		const mailData = {
			from: 'NikolasDev.com <nikola.tual@gmail.com>',
			to: 'nikola.tual@gmail.com',
			subject: 'Un message a été reçu depuis NikolasDev.com',
			html: `<div style="font-size: 1rem;width: 70%;">
							<h2 style="padding: 0;margin: 0 0 1rem;">Un message a été reçu depuis NikolasDev.com :</h2>
							<p style="margin: 0 0 .3rem;">Nom : <b>${capitalize(req.body.name)}</b></p>
							<p style="margin: 0 0 .3rem;">Prénom : <b>${capitalize(req.body.firstname)}</b></p>
							<p style="margin: 0 0 .3rem;">Adresse e-mail : <b>${req.body.from}</b></p>
							<p style="margin: 0 0 .3rem;white-space: break-spaces;">Message :
								<b style="display: block;margin-left: 1rem;padding: .7rem;">${content}</b>
							</p>
						</div>`
		}

		mail.sendMail(mailData, (err) => {
			if (err) {
				console.log(err)
				return res.status(500).json({ type: 'error', message: 'ERREUR LORS DE L\'ENVOI DE\nVOTRE MESSAGE' })
			}
			return res.status(200).json({ type: 'success', message: 'VOTRE MESSAGE A BIEN ÉTÉ ENVOYÉ' })
		})
	} else {
		res.redirect('/')
	}
}

export const config = {
	api: {
		externalResolver: true
	}
}

export default Postmail