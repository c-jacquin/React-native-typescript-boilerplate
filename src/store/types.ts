import { Action } from 'redux'
import { Observable } from 'rxjs'
import { LanguageState, LanguageApi } from 'store/language'
import { NavigationState } from 'store/navigation'
// Import types here

export interface ReduxAction extends Action {
    payload?: any
    meta?: any
}

export interface ErrorReduxAction extends Action {
    error: Error
    meta?: any
}

export interface AppState {
    language: LanguageState
    navigation: NavigationState
    // Insert types here
}

export interface EpicDependancies {
    languageApi: LanguageApi
    // Insert api here
}
