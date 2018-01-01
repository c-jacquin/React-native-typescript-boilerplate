import { Epic, combineEpics } from 'redux-observable'
import { merge, switchMap, map } from 'rxjs/operators'

import config from 'config'
import { MyEpic } from '../types'
import * as pushNotificationActions from './actions'

export const registerPushNotificationEpic: MyEpic = (
    action$,
    store,
    { pushNotificationApi }
) => {
    return action$
        .ofType(pushNotificationActions.REGISTER_PUSH)
        .pipe(
            switchMap(() => pushNotificationApi.register()),
            map(pushNotificationActions.registerPushSuccess)
        )
}

export const subscribePushNotificationEpic: MyEpic = (
    action$,
    store,
    { pushNotificationApi }
) => {
    return action$
        .ofType(pushNotificationActions.REGISTER_PUSH_SUCCESS)
        .pipe(
            switchMap(() => pushNotificationApi.subscribe()),
            map(pushNotificationActions.newPushNotification)
        )
}

export default combineEpics(
    registerPushNotificationEpic,
    subscribePushNotificationEpic
)
