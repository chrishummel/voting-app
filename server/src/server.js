'use strict'

import Server from 'socket.io'
import config from '../config'

export default function startServer(port) {
  const io = new Server().attach('8090')
  console.log('Server listening on port 8090')
}