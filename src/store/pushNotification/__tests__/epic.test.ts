import configureMockStore from 'redux-mock-store'
import { createEpicMiddleware } from 'redux-observable'

import { dependencies } from '../../epicDependencies'
import { AppState, ReduxAction, EpicDependancies } from '../../types'
import * as pushNotificationAction from '../actions'
import { PushNotificationApi } from '../__mocks__/PushNotificationApi'
import {
    registerPushNotificationEpic,
    subscribePushNotificationEpic,
} from '../epic'

describe('registerPushNotification epic', () => {
    const pushNotificationApi = new PushNotificationApi()

    const epicMiddleware = createEpicMiddleware<
        ReduxAction,
        AppState,
        EpicDependancies
    >(registerPushNotificationEpic, {
        dependencies: {
            ...dependencies,
            pushNotificationApi,
        },
    })
    const mockStore = configureMockStore([epicMiddleware])

    let store = mockStore()

    beforeEach(() => {
        store = mockStore()
    })

    afterEach(() => {
        epicMiddleware.replaceEpic(registerPushNotificationEpic)
    })

    it('should call the register method of the api and dispatch a success action when REGISTER_PUSH ', () => {
        const spy = jest.spyOn(pushNotificationApi, 'register')
        store.dispatch(pushNotificationAction.registerPush())

        expect(spy).toHaveBeenCalled()
        expect(store.getActions()).toEqual([
            pushNotificationAction.registerPush(),
            pushNotificationAction.registerPushSuccess(),
        ])
    })
})

describe('subscribePushNotification epic', () => {
    const pushNotificationApi = new PushNotificationApi()

    const epicMiddleware = createEpicMiddleware<
        ReduxAction,
        AppState,
        EpicDependancies
    >(subscribePushNotificationEpic, {
        dependencies: {
            ...dependencies,
            pushNotificationApi,
        },
    })
    const mockStore = configureMockStore([epicMiddleware])

    let store = mockStore()

    beforeEach(() => {
        store = mockStore()
    })

    afterEach(() => {
        epicMiddleware.replaceEpic(subscribePushNotificationEpic)
    })

    it('should call the subscribe method of the api and dispatch a newNotif action when REGISTER_PUSH_SUCCESS', () => {
        const notif = pushNotificationApi.subscribe().getValue()
        const spy = jest.spyOn(pushNotificationApi, 'subscribe')
        store.dispatch(pushNotificationAction.registerPushSuccess())

        expect(spy).toHaveBeenCalled()
        expect(store.getActions()).toEqual([
            pushNotificationAction.registerPushSuccess(),
            pushNotificationAction.newPushNotification(notif),
        ])
    })
})
