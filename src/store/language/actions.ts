import { ActionCreator } from 'redux'
import { ErrorReduxAction, ReduxAction } from '../types'

export const GET_LOCALE_PENDING = 'GET_LOCALE_PENDING'
export const GET_LOCALE_SUCCESS = 'GET_LOCALE_SUCCESS'
export const GET_LOCALE_FAILED = 'GET_LOCALE_FAILED'

export const getLocale: ActionCreator<ReduxAction> = () => ({
    type: GET_LOCALE_PENDING,
})

export const getLocaleSuccess: ActionCreator<ReduxAction> = payload => ({
    type: GET_LOCALE_SUCCESS,
    payload,
})

export const getLocaleFailed: ActionCreator<ErrorReduxAction> = error => ({
    type: GET_LOCALE_FAILED,
    error,
})
