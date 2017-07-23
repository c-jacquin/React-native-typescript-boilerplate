import { Platform } from 'react-native'
import { applyMiddleware, createStore, Store, StoreEnhancer } from 'redux'
import immutableStateMiddleware from 'redux-immutable-state-invariant'
import { createEpicMiddleware } from 'redux-observable'
import * as storage from 'redux-storage'
import createEngine from 'redux-storage-engine-reactnativeasyncstorage'
import { composeWithDevTools } from 'remote-redux-devtools'

import rootEpic from './rootEpic'
import rootReducer from './rootReducer'

import config from 'config'
import { AppState } from './types'

const engine = createEngine(config.storeKey)

const middlewares = [
    createEpicMiddleware(rootEpic),
    storage.createMiddleware(engine, [], config.actionsToPersist),
]

if (process.env.NODE_ENV === 'development') {
    middlewares.push(immutableStateMiddleware())
}

const getDevEnhancer = (): StoreEnhancer<AppState> => {
    return composeWithDevTools(applyMiddleware(...middlewares))
}

const getProdEnhancer = (): StoreEnhancer<AppState> => {
    return applyMiddleware(...middlewares)
}

const store = createStore<AppState>(
    storage.reducer(rootReducer),
    process.env.NODE_ENV === 'development'
        ? getDevEnhancer()
        : getProdEnhancer()
)

storage.createLoader(engine)(store)

export default store
