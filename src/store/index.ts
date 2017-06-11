import { applyMiddleware, createStore, Store } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import * as storage from 'redux-storage'
import createEngine from 'redux-storage-engine-reactnativeasyncstorage'
import { composeWithDevTools } from 'remote-redux-devtools'

import rootEpic from './middleware'
import rootReducer from './reducer'

import config from 'config'
import { IAppState } from './types'

const engine = createEngine(config.storeKey)

const store = createStore<IAppState>(
    storage.reducer(rootReducer),
    composeWithDevTools(
        applyMiddleware(
            createEpicMiddleware(rootEpic),
            storage.createMiddleware(engine, [], config.actionsToPersist),
        ),
    ),
)

storage.createLoader(engine)(store)

export default store
