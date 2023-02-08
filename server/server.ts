import express, { Express } from 'express'
import { Server, Socket } from 'socket.io'
import * as http from 'http'
import bodyParser from 'body-parser'

const port = process.env.PORT || 3333 as number

const app: Express = express()
const server = http.createServer(app)
const io: Server = new Server({path: '/ws', transports: ['websocket', 'polling']})

const like: Array<string> = []
let vues: number = 0

io.attach(server)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

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
	console.log(`> Ready on localhost:${port}`)
})