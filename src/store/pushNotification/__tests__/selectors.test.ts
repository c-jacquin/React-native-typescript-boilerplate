import { selectPushNotification } from '../selectors'
import appState from '../../initialState'

describe('pushNotification selectors', () => {
    it('should return the pushNotification state', () => {
        expect(selectPushNotification(appState)).toBe(appState.pushNotification)
    })
})
