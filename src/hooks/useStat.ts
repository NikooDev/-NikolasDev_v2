import React, { useCallback, useEffect, useState } from 'react'
import Ws from '@App/services/socket'
import { publicIpv4 } from 'public-ip'

const useStat = () => {
	const { current: socket } = React.useRef(Ws)
	const [countLike, setCountLike] = useState<number>()
	const [countVues, setCountVues] = useState<number>()

	const handleLike = async (event: React.MouseEvent) => {
		event.preventDefault()

		const publicIP = await publicIpv4()
		socket.emit('like', publicIP)
	}

	const handleSocketEvents = useCallback(() => {
		socket.on('count', (count) => {
			setCountLike(count)
		})
		socket.on('vue', (vue) => {
			setCountVues(vue)
		})
	}, [socket])

	useEffect(() => handleSocketEvents(), [handleSocketEvents])

	return {
		handleLike, socket, countLike, countVues
	}
}

export default useStat