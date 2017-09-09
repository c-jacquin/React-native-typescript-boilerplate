import { AppState } from '../types'
import { initialState as languageState } from '../language/reducer'
import { initialState as navigationState } from '../navigation/reducer'
// Import state here

const initialState: AppState = {
    language: languageState,
    navigation: navigationState,
    // Insert state here
}

export default initialState
