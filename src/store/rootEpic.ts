import 'rxjs/Rx'
import { combineEpics, Epic } from 'redux-observable'

import { AppState, ReduxAction } from './types'
import languageEpic from './language/epic'
import logEpic from './logger/epic'
// Import epic here

const epics = [
    languageEpic,
    // Insert epic here
]

if (process.env.NODE_ENV === 'development') {
    epics.push(logEpic)
}

const rootEpic: Epic<ReduxAction, AppState> = combineEpics(...epics)

export default rootEpic
