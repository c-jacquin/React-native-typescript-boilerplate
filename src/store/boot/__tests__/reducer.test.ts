import bootReducer from '../reducer'
import * as bootActions from '../actions'
import appState from '../../initialState'

describe('boot reducer', () => {
    it('should return the initial state', () => {
        expect(
            bootReducer(appState.boot, {
                type: 'TEST',
            })
        ).toEqual(appState.boot)
    })

    it('should set loading to true when BOOTSTRAP_PENDING', () => {
        expect(bootReducer(appState.boot, bootActions.bootstrap())).toEqual({
            ...appState.boot,
            loading: true,
        })
    })

    it('should set loading to true when BOOTSTRAP_PENDING', () => {
        expect(
            bootReducer(appState.boot, bootActions.bootstrapSuccess())
        ).toEqual({
            ...appState.boot,
            loading: false,
        })
    })
})
