import * as navigationActions from '../actions'

describe('languages actions', () => {
    it('should create an action to get the locale', () => {
        const expectedAction = {
            type: navigationActions.NAVIGATE_ACTION,
            routeName: 'Test',
        }
        expect(navigationActions.navigate('Test')).toEqual(expectedAction)
    })
})
