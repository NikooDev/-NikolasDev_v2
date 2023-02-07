import express, { Express, Request, Response } from 'express'
import { Server, Socket } from 'socket.io'
import * as http from 'http'
import next from 'next'
import bodyParser from 'body-parser'

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const nextHandle = nextApp.getRequestHandler()
const port = process.env.PORT || 3000 as number

nextApp.prepare().then(() => {
	const app: Express = express()
	const server = http.createServer(app)
	const io: Server = new Server({ path: '/ws', transports: ['websocket', 'polling'] })

	const like: Array<string> = []
	let vues: number = 0

	io.attach(server)

	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({ extended: false }))

	app.all('*', (req: Request, res: Response) => nextHandle(req, res))

	io.on('connection', (socket: Socket) => {
		io.emit('count', like.length)
		io.emit('vue', vues)
		socket.on('like', (ip: string) => {
			if (!like.includes(ip)) {
				like.push(ip)
			}
			io.emit('count', like.length)
		})
		socket.on('vue', () => {
			vues++
			io.emit('vue', vues)
		})
	})

	server.listen(port, (err?: any) => {
		if (err) throw err
		console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`)
	})
}).catch((e) => {
	console.error(e)
	process.exit(1)
})