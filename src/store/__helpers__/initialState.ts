import { AppState } from '../types'
import { initialState as languageState } from '../language/reducer'
// Import state here

const initialState: AppState = {
    language: languageState,
    // Insert state here
}

export default initialState
