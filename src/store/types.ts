import { Action } from 'redux'
import { Observable } from 'rxjs'
import { LanguageState } from 'store/language/types'
import { NavigationState } from './navigation/types'
// Import types here

import { LanguageApi } from 'store/language'

export interface AppState {
    language: LanguageState
    navigation: NavigationState
    // Insert types here
}

export interface ReduxAction extends Action {
    payload?: any
    meta?: any
}

export interface ErrorReduxAction extends Action {
    error: Error
    meta?: any
}

export interface EpicDependancies {
    languageApi: LanguageApi
}
