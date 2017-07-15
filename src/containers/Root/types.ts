import { ActionCreator, Store } from 'redux'

import { ReduxAction } from 'store/types'
import { AppState } from 'store/types'

export interface RootActionCreators {
    getLocale?: ActionCreator<ReduxAction>
}

export interface RootConnectedProps {}

export interface RootProps extends RootActionCreators, RootConnectedProps {
    store?: Store<AppState>
    messages?: any
}

export interface RootState {}
