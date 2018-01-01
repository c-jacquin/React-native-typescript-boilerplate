import { combineEpics, Epic, createEpicMiddleware } from 'redux-observable'

import { AppState, ReduxAction, EpicDependancies } from './types'
import languageEpic from 'store/language/epic'
import pushNotificationEpic from './pushNotification/epic'
// Import epic here

import { dependencies } from './epicDependencies'

const epics = [
    languageEpic,
    pushNotificationEpic,
    // Insert epic here
]

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
