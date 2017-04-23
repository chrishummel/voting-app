'use strict'

import makeStore from './src/store'
import startServer from './src/server'
import config from './config'

export const store = makeStore()
startServer(store)

store.dispath({
  type: 'SET_ENTRIES',
  entries: require('./entries/entries.json')
})
store.dispath({type: 'NEXT'})


