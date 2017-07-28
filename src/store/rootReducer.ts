import { combineReducers } from 'redux'

import { AppState } from './types'
import language from 'store/language/reducer'
import navigation from './navigation/reducer'
// Import reducer here

const rootReducer = combineReducers<AppState>({
    language,
    navigation,
    // Insert reducer here
})

export default rootReducer
