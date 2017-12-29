import { AppState, ReduxAction, EpicDependancies } from './types'
import languageApi from 'store/language/api'
// Import api here

export const dependencies: EpicDependancies = {
    languageApi,
    // Insert api here
}
