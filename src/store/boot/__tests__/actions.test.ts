import * as bootActions from '../actions'

describe('boot actions', () => {
    it('should create an action to get the boot', () => {
        const expectedAction = {
            type: bootActions.BOOTSTRAP_PENDING,
        }
        expect(bootActions.bootstrap()).toEqual(expectedAction)
    })

    it('should create an action when getting the boot work fine', () => {
        const expectedAction = {
            type: bootActions.BOOTSTRAP_SUCCESS,
            payload: 'test',
        }

        expect(bootActions.bootstrapSuccess('test')).toEqual(expectedAction)
    })

    it('should create an action when getting the boot failed', () => {
        const expectedAction = {
            type: bootActions.BOOTSRAP_FAILED,
            error: 'test',
        }

        expect(bootActions.bootstrapFailed('test')).toEqual(expectedAction)
    })
})
