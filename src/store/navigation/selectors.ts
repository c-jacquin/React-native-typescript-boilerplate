import { createSelector, Selector } from 'reselect'
import { AppState } from '../types'
import { NavigationState } from './types'

export const selectNavigation: Selector<AppState, NavigationState> = (
    state: AppState
) => state.navigation
