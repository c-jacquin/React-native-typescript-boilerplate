import { AppState, ReduxAction, EpicDependancies } from './types'
import { LanguageApi } from 'store/language/api'
// Import api here

export const dependencies: EpicDependancies = {
    languageApi: new LanguageApi(),
    // Insert api here
}
