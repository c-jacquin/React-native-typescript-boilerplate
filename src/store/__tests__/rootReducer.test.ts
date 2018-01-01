import rootReducer from '../rootReducer'
import appState from '../initialState'

describe('root reducer', () => {
    it('should return the initial state', () => {
        expect(
            rootReducer(appState, {
                type: 'TEST',
            })
        ).toEqual(appState)
    })
})
