import navigationReducer from '../reducer'
import appState from 'store/_helpers_/initialState'

describe('navigation reducer', () => {
    it('should return the initial state', () => {
        expect(
            navigationReducer(appState.navigation, {
                type: 'TEST',
            })
        ).toEqual(appState.navigation)
    })
})
