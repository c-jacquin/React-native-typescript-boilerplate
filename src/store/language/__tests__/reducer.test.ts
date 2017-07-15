import languageReducer, { initialState } from '../reducer'
import * as languagesActions from '../actions'

describe('language reducer', () => {
    it('should return the initial state', () => {
        expect(
            languageReducer(initialState, {
                type: 'TEST',
            })
        ).toEqual(initialState)
    })

    it('should handle GET_LOCALE_PENDING action', () => {
        expect(
            languageReducer(initialState, languagesActions.getLocale())
        ).toEqual({
            ...initialState,
            pending: true,
        })
    })

    it('should handle GET_LOCALE_SUCCESS action', () => {
        expect(
            languageReducer(
                initialState,
                languagesActions.getLocaleSuccess('test')
            )
        ).toEqual({
            ...initialState,
            locale: 'test',
        })
    })
})
