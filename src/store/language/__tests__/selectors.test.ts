import { selectLanguage, selectLocale } from '../selectors'
import appState from 'store/_helpers_/initialState'

describe('language selectors', () => {
    it('should return the language state', () => {
        expect(selectLanguage(appState)).toBe(appState.language)
    })

    it('should return the current locale', () => {
        expect(selectLocale(appState)).toBe(appState.language.locale)
    })
})
