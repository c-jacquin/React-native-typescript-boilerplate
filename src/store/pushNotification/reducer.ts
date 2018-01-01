import { Reducer } from 'redux'
import * as pushActions from 'store/pushNotification/actions'

import { PushNotificationState } from './types'

export const initialState: PushNotificationState = {
    register: false,
    data: [],
}

const pushNotificationReducer: Reducer<PushNotificationState> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case pushActions.REGISTER_PUSH_SUCCESS:
            return {
                ...state,
                register: true,
            }
        case pushActions.NEW_PUSH_NOTIFICATION:
            return {
                ...state,
                data: [...state.data, action.payload],
            }
        default:
            return state
    }
}

export default pushNotificationReducer
