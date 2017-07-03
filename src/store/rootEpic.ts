import { combineEpics, Epic } from 'redux-observable'

import languageEpic from './language/epic'
import logEpic from './logger/epic'
import { AppState, ReduxAction } from './types'

const rootEpic: Epic<ReduxAction, AppState> = combineEpics(
    languageEpic,
    logEpic
)

export default rootEpic
