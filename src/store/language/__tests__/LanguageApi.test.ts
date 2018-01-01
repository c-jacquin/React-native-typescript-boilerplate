import { LanguageApi } from '../LanguageApi'
import { Util } from 'expo'

describe('languages api', () => {
    const languageApi = new LanguageApi()

    it('should properly format the locale', () => {
        expect(languageApi.formatLocale('EN_en')).toBe('en')
    })

    it('should get the current locale', () => {
        const spy = jest.spyOn(Util, 'getCurrentLocaleAsync')

        languageApi.getLanguage()
        expect(spy).toHaveBeenCalled()
    })
})
