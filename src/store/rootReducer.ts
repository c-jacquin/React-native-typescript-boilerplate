import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { AppState } from './types'
import languageReducer from './language/reducer'
import navigationReducer from './navigation/reducer'
import pushNotificationReducer from './pushNotification/reducer'
import bootReducer from './boot/reducer'
// Import reducer here

const rootReducer = combineReducers<AppState>({
    language: persistReducer(
        {
            key: 'language',
            blacklist: ['pending'],
            storage,
        },
        languageReducer
    ),
    navigation: navigationReducer,
    pushNotification: persistReducer(
        {
            key: 'pushNotifications',
            blacklist: ['register'],
            storage,
        },
        pushNotificationReducer
    ),
    boot: bootReducer,
    // Insert reducer here
})

export default rootReducer
