import { Platform } from 'react-native'
import { applyMiddleware, createStore, Store, StoreEnhancer } from 'redux'
import * as storage from 'redux-storage'
import createEngine from 'redux-storage-engine-reactnativeasyncstorage'
import { composeWithDevTools } from 'remote-redux-devtools'

import epicMiddleware from './epicMiddleware'
import rootReducer from './rootReducer'

import config from 'config'
import { AppState } from './types'

const engine = createEngine(config.STORE_KEY)

const blackListedAction = ['Navigation/NAVIGATE', 'Navigation/BACK']

const middlewares = [
    epicMiddleware,
    storage.createMiddleware(engine, blackListedAction),
]

const getDevEnhancer = () => {
    return composeWithDevTools(applyMiddleware(...middlewares))
}

const getProdEnhancer = (): StoreEnhancer<AppState> => {
    return applyMiddleware(...middlewares)
}

const configureStore = () => {
    const store = createStore<AppState>(
        storage.reducer(rootReducer),
        config.ENV === 'dev' ? getDevEnhancer() : getProdEnhancer()
    )
    storage.createLoader(engine)(store)

    return store
}

export default configureStore
