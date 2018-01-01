import * as pushNotificationActions from '../actions'

describe('pushNotification actions', () => {
    it('should create an action to register pushNotification', () => {
        const expectedAction = {
            type: pushNotificationActions.REGISTER_PUSH,
        }
        expect(pushNotificationActions.registerPush()).toEqual(expectedAction)
    })

    it('should create an action when registering the pushNotification work fine', () => {
        const expectedAction = {
            type: pushNotificationActions.REGISTER_PUSH_SUCCESS,
        }

        expect(pushNotificationActions.registerPushSuccess()).toEqual(
            expectedAction
        )
    })

    it('should create an action when receiving a new push', () => {
        const payload = {
            isMultiple: true,
            data: {},
            origin: 'selected',
            remote: true,
        }

        const expectedAction = {
            type: pushNotificationActions.NEW_PUSH_NOTIFICATION,
            payload,
        }

        expect(pushNotificationActions.newPushNotification(payload)).toEqual(
            expectedAction
        )
    })
})
