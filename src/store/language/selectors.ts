import { createSelector, OutputSelector, Selector } from 'reselect'
import { IAppState } from '../types'

export const selectLanguage = (state: IAppState) => state.language

export const selectLocale: Selector<IAppState, string> =  createSelector(
  selectLanguage,
  (languageState) => languageState.locale,
)
