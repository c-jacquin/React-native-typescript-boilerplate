import { AppState, ReduxAction, EpicDependancies } from './types'
import rxFetch from 'store/_api_/RxFetch'
import languageApi from 'store/language/api'
// Import api here

export const dependencies: EpicDependancies = {
    fetch: rxFetch.fetch,
    languageApi,
    // Insert api here
}
