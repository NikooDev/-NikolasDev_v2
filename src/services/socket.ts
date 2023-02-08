import io from 'socket.io-client'

const wsOptions = {
	url: 'http://socket.nikolasdev.com',
	config: {
		path: '/ws',
		autoConnect: true,
		reconnection: true,
		transports: ['websocket', 'polling']
	}
}

const Ws  = io(wsOptions.url, wsOptions.config)

export default Ws