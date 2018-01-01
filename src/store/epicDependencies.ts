import { AppState, ReduxAction, EpicDependancies } from 'store/types'
import { LanguageApi } from 'store/language/LanguageApi'
import { PushNotificationApi } from 'store/pushNotification/PushNotificationApi'
import { BootApi } from './boot/BootApi'
// Import api here

export const dependencies: EpicDependancies = {
    languageApi: new LanguageApi(),
    pushNotificationApi: new PushNotificationApi(),
    bootApi: new BootApi(),
    // Insert api here
}
