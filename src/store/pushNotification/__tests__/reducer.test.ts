import pushNotificationReducer from '../reducer'
import * as pushNotificationActions from '../actions'
import appState from '../../initialState'

describe('pushNotification reducer', () => {
    it('should return the initial state', () => {
        expect(
            pushNotificationReducer(appState.pushNotification, {
                type: 'TEST',
            })
        ).toEqual(appState.pushNotification)
    })

    it('should handle REGISTER_PUSH_SUCCESS action', () => {
        expect(
            pushNotificationReducer(
                appState.pushNotification,
                pushNotificationActions.registerPushSuccess()
            )
        ).toEqual({
            ...appState.pushNotification,
            register: true,
        })
    })

    it('should handle GET_LOCALE_SUCCESS action', () => {
        const pushNotification = {
            isMultiple: true,
            data: {},
            origin: 'selected',
            remote: true,
        }

        expect(
            pushNotificationReducer(
                appState.pushNotification,
                pushNotificationActions.newPushNotification(pushNotification)
            )
        ).toEqual({
            ...appState.pushNotification,
            data: [pushNotification],
        })
    })
})
