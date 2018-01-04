import { Platform } from 'react-native'
import { applyMiddleware, createStore, Store, StoreEnhancer } from 'redux'
import { persistStore } from 'redux-persist'
import { composeWithDevTools } from 'remote-redux-devtools'

import epicMiddleware from './epicMiddleware'
import rootReducer from './rootReducer'

import config from 'config'
import { AppState } from './types'

const middlewares = [epicMiddleware]

const getDevEnhancer = () => {
    return composeWithDevTools(applyMiddleware(...middlewares))
}

const getProdEnhancer = (): StoreEnhancer<AppState> => {
    return applyMiddleware(...middlewares)
}

const configureStore = () => {
    const store = createStore<AppState>(
        rootReducer,
        config.ENV === 'dev' ? getDevEnhancer() : getProdEnhancer()
    )

    const persistor = persistStore(store)

    return { persistor, store }
}

export default configureStore
