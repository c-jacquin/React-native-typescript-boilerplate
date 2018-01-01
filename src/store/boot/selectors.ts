import { createSelector, Selector } from 'reselect'
import { AppState } from '../types'
import { BootState } from './types'

export const selectBoot: Selector<AppState, BootState> = (state: AppState) =>
    state.boot

export const isAppReady: Selector<AppState, boolean> = state =>
    !selectBoot(state).loading
