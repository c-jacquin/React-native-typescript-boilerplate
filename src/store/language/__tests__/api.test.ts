import * as languageApi from '../api'
import { Util } from 'expo'

describe('languages api', () => {
    it('should get the current locale', () => {
        const spy = jest.spyOn(Util, 'getCurrentLocaleAsync')

        languageApi.getLanguage()
        expect(spy).toHaveBeenCalled()
    })
})
