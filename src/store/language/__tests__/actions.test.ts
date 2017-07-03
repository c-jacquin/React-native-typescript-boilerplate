import * as languagesActions from '../actions'

describe('actions', () => {
    it('should create an action to get the locale', () => {
        const expectedAction = {
            type: languagesActions.GET_LOCALE_PENDING,
        }
        expect(languagesActions.getLocale()).toEqual(expectedAction)
    })
})
