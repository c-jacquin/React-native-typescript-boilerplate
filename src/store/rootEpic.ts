import { combineEpics, Epic } from 'redux-observable'

import languageEpic from './language/epic'
import logEpic from './logger/epic'
import { AppState, ReduxAction } from './types'

const epics = [languageEpic]

if (process.env.NODE_ENV === 'development') {
    epics.push(logEpic)
}

const rootEpic: Epic<ReduxAction, AppState> = combineEpics(...epics)

export default rootEpic
