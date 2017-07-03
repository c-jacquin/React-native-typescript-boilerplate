import { combineReducers } from 'redux'
import language from 'store/language/reducer'
import { AppState } from './types'

const rootReducer = combineReducers<AppState>({
    language,
})

export default rootReducer
