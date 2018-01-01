import { createSelector, Selector } from 'reselect'
import { AppState } from '../types'
import { PushNotificationState } from './types'

export const selectPushNotification: Selector<
    AppState,
    PushNotificationState
> = (state: AppState) => state.pushNotification
