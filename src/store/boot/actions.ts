import { ActionCreator } from 'redux'
import { ErrorReduxAction, ReduxAction } from '../types'

export const BOOTSTRAP_PENDING = 'BOOTSTRAP_PENDING'
export const BOOTSTRAP_SUCCESS = 'BOOTSTRAP_SUCCESS'
export const BOOTSRAP_FAILED = 'BOOTSRAP_FAILED'

export const bootstrap: ActionCreator<ReduxAction> = () => ({
    type: BOOTSTRAP_PENDING,
})

export const bootstrapSuccess: ActionCreator<ReduxAction> = payload => ({
    type: BOOTSTRAP_SUCCESS,
    payload,
})

export const bootstrapFailed: ActionCreator<ErrorReduxAction> = error => ({
    type: BOOTSRAP_FAILED,
    error,
})
