import { createSelector, OutputSelector, Selector } from 'reselect'
import { AppState } from '../types'

export const selectLanguage = (state: AppState) => state.language

export const selectLocale: Selector<AppState, string> = createSelector(
    [selectLanguage],
    languageState => languageState.locale
)
