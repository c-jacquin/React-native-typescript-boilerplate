import 'rxjs/Rx'
import { combineEpics, Epic, createEpicMiddleware } from 'redux-observable'

import { AppState, ReduxAction, EpicDependancies } from './types'
import languageEpic from 'store/language/epic'
// Import epic here

import languageApi from 'store/language/api'

const epics = [
    languageEpic,
    // Insert epic here
]

export const dependencies: EpicDependancies = {
    languageApi,
}

export const rootEpic = combineEpics<ReduxAction, AppState, EpicDependancies>(
    ...epics
)

const epicMiddleware = createEpicMiddleware<
    ReduxAction,
    AppState,
    EpicDependancies
>(rootEpic, {
    dependencies,
})

export default epicMiddleware
