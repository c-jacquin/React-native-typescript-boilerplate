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

const getDevEnhancer = (): StoreEnhancer<AppState> => {
    return composeWithDevTools(
        applyMiddleware(
            createEpicMiddleware(rootEpic),
            storage.createMiddleware(engine, [], config.actionsToPersist),
            immutableStateMiddleware()
        )
    )
}

const getProdEnhancer = (): StoreEnhancer<AppState> => {
    return applyMiddleware(
        createEpicMiddleware(rootEpic),
        storage.createMiddleware(engine, [], config.actionsToPersist)
    )
}

const store = createStore<AppState>(
    storage.reducer(rootReducer),
    process.env.NODE_ENV === 'development'
        ? getDevEnhancer()
        : getProdEnhancer()
)

storage.createLoader(engine)(store)

export default store
