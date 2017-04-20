'use strict'

import Server from 'socket.io'
import config from './config'

export default function startServer() {
  const io = new Server().attach(config.serverPort)
}