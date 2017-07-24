import { combineReducers } from 'redux'

import { AppState } from './types'
import language from 'store/language/reducer'
// Import reducer here

const rootReducer = combineReducers<AppState>({
    language,
    // Insert reducer here
})

export default rootReducer
