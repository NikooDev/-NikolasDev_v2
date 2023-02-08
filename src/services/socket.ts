import io from 'socket.io-client'

const wsOptions = {
	url: 'http://127.0.0.1:3333/',
	config: {
		path: '/ws',
		autoConnect: true,
		reconnection: true,
		transports: ['websocket', 'polling']
	}
}

const Ws  = io(wsOptions.url, wsOptions.config)

export default Ws