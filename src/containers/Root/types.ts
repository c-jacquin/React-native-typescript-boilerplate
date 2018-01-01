import { ActionCreator, Store } from 'redux'

import { ReduxAction, AppState } from 'store/types'
import { NavigationState } from 'store/navigation/types'

export interface RootActionCreators {
    getLocale?: ActionCreator<ReduxAction>
    registerPush?: ActionCreator<ReduxAction>
}

export interface RootConnectedProps {
    nav?: NavigationState
}

export interface RootProps extends RootActionCreators, RootConnectedProps {}

export interface RootState {}
