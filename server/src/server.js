'use strict'

import Server from 'socket.io'
import config from '../config'

export default function startServer(store) {
  const io = new Server().attach('8090')
  console.log('Server listening on port 8090')

  store.subscribe(
    () => io.emit('state', store.getState().toJS)
  )

  io.on('connection', (socket) => {
    socket.emit('state', store.getState().toJS)
    socket.on('action', store.dispath.bind(store))
  })

}