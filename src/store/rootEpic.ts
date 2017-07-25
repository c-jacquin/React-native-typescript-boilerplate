import 'rxjs/Rx'
import { combineEpics, Epic } from 'redux-observable'

import { AppState, ReduxAction } from './types'
import languageEpic from './language/epic'
// Import epic here

const epics = [
    languageEpic,
    // Insert epic here
]

const rootEpic: Epic<ReduxAction, AppState> = combineEpics(...epics)

export default rootEpic
