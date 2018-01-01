import languageReducer from '../reducer'
import * as languagesActions from '../actions'
import appState from '../../initialState'

describe('language reducer', () => {
    it('should return the initial state', () => {
        expect(
            languageReducer(appState.language, {
                type: 'TEST',
            })
        ).toEqual(appState.language)
    })

    it('should handle GET_LOCALE_PENDING action', () => {
        expect(
            languageReducer(appState.language, languagesActions.getLocale())
        ).toEqual({
            ...appState.language,
            pending: true,
        })
    })

    it('should handle GET_LOCALE_SUCCESS action', () => {
        expect(
            languageReducer(
                appState.language,
                languagesActions.getLocaleSuccess('test')
            )
        ).toEqual({
            ...appState.language,
            locale: 'test',
        })
    })
})
