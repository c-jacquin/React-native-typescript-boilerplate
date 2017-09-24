import { Action } from 'redux'
import { Observable } from 'rxjs'
import { RxFetch } from 'store/_api_/RxFetch'
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
    fetch: (input: RequestInfo, init: RequestInit) => Observable<any | null>
    languageApi: LanguageApi
    // Insert api here
}
