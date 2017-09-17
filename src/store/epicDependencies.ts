import { AppState, ReduxAction, EpicDependancies } from './types'
import languageApi from 'store/language/api'

export const dependencies: EpicDependancies = {
    languageApi,
}
