import { Notifications } from 'expo'
import { Observable } from 'rxjs/Observable'
import { PushNotificationApi } from '../PushNotificationApi'

describe('pushNotification api', () => {
    const pushNotificationApi = new PushNotificationApi()

    it('getToken should call the getExpoPushTokenAsync method of Notifications and return an Observable', () => {
        const spy = jest.spyOn(Notifications, 'getExponentPushTokenAsync')
        const returnedValue = pushNotificationApi.getToken()
        expect(spy).toHaveBeenCalled()
        expect(returnedValue).toBeInstanceOf(Observable)
    })

    it('register should call getToken method and return an Observable', () => {
        const spy = jest.spyOn(pushNotificationApi, 'getToken')
        const returnedValue = pushNotificationApi.register()

        expect(spy).toHaveBeenCalled()
        expect(returnedValue).toBeInstanceOf(Observable)
    })

    it('subscribe should return an Observable', () => {
        const returnedValue = pushNotificationApi.subscribe()
        expect(returnedValue).toBeInstanceOf(Observable)
    })

    it('unsubscribe should call the remove ;ethod of the subscription object', () => {
        pushNotificationApi.subscription = {
            remove: () => {},
        }
        const spy = jest.spyOn(pushNotificationApi.subscription, 'remove')
        pushNotificationApi.unsubscribe()
        expect(spy).toHaveBeenCalled()
    })
})
