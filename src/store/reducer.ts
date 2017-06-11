import { combineReducers, Reducer } from 'redux'
import language from 'store/language/reducer'
import { IAppState } from './types'

const rootReducer: Reducer<IAppState> = combineReducers<IAppState>({
    language,
})

export default rootReducer
