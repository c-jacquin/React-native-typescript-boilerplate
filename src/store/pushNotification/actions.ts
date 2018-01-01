import { ActionCreator } from 'redux'
import { Notifications } from 'expo'

import { ErrorReduxAction, ReduxAction } from '../types'

export const REGISTER_PUSH = 'REGISTER_PUSH'
export const REGISTER_PUSH_SUCCESS = 'REGISTER_PUSH_SUCCESS'
export const NEW_PUSH_NOTIFICATION = 'NEW_PUSH_NOTIFICATION'

export const registerPush = () => ({
    type: REGISTER_PUSH,
})

export const registerPushSuccess = () => ({
    type: REGISTER_PUSH_SUCCESS,
})

export const newPushNotification = (payload: Notifications.Notification) => ({
    type: NEW_PUSH_NOTIFICATION,
    payload,
})
