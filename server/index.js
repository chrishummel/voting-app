'use strict'

import makeStore from './src/store'
import startServer from './src/server'
import config from './config'

export const store = makeStore()
startServer()


