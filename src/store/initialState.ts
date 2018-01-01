import { AppState } from './types'
import { initialState as languageState } from './language/reducer'
import { initialState as navigationState } from './navigation/reducer'
import { initialState as pushNotificationState } from './pushNotification/reducer'
import { initialState as bootState } from './boot/reducer'
// Import state here

const initialState: AppState = {
    language: languageState,
    navigation: navigationState,
    pushNotification: pushNotificationState,
    boot: bootState,
    // Insert state here
}

export default initialState
