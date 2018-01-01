import { combineEpics, Epic, createEpicMiddleware } from 'redux-observable'

import { AppState, ReduxAction, EpicDependancies } from './types'
import pushNotificationEpic from './pushNotification/epic'
import bootEpic from './boot/epic'
// Import epic here

import { dependencies } from './epicDependencies'

const epics = [
    pushNotificationEpic,
    bootEpic,
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
