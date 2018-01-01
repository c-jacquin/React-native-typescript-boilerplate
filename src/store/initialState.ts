import { AppState } from './types'
import { initialState as languageState } from './language/reducer'
import { initialState as navigationState } from './navigation/reducer'
import { initialState as pushNotificationState } from './pushNotification/reducer'
// Import state here

const initialState: AppState = {
    language: languageState,
    navigation: navigationState,
    pushNotification: pushNotificationState,
    // Insert state here
}

export default initialState
