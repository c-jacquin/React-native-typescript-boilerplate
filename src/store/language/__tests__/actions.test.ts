import * as languagesActions from '../actions'

describe('languages actions', () => {
    it('should create an action to get the locale', () => {
        const expectedAction = {
            type: languagesActions.GET_LOCALE_PENDING,
        }
        expect(languagesActions.getLocale()).toEqual(expectedAction)
    })

    it('should create an action when getting the locale work fine', () => {
        const expectedAction = {
            type: languagesActions.GET_LOCALE_SUCCESS,
            payload: 'test',
        }

        expect(languagesActions.getLocaleSuccess('test')).toEqual(
            expectedAction
        )
    })

    it('should create an action when getting the locale failed', () => {
        const expectedAction = {
            type: languagesActions.GET_LOCALE_FAILED,
            error: 'test',
        }

        expect(languagesActions.getLocaleFailed('test')).toEqual(expectedAction)
    })
})
