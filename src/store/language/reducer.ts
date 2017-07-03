import { Reducer } from 'redux'

import config from 'config'
import { ReduxAction } from '../types'
import * as LanguageActions from './actions'
import { LanguageState } from './types'

const initialState: LanguageState = {
    locale: config.language.defaultLocale,
    supportedLanguages: config.language.supportedLocales,
    pending: false,
}

const languageReducer: Reducer<LanguageState> = (
    state = initialState,
    action: ReduxAction
) => {
    switch (action.type) {
        case LanguageActions.GET_LOCALE_PENDING:
            return {
                ...state,
                pending: true,
            }
        case LanguageActions.GET_LOCALE_SUCCESS:
            return {
                ...state,
                pending: false,
                locale: config.language.supportedLocales.includes(
                    action.payload
                )
                    ? action.payload
                    : state.locale,
            }
        default:
            return state
    }
}

export default languageReducer
