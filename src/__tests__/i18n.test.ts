jest.mock('../../i18n/en.json', () => ({
    test: 'test EN',
    testBis: 'testbis EN',
}))

jest.mock('../../i18n/fr.json', () => ({
    test: 'test FR',
    testBis: undefined,
}))

import { translationMessages, formatTranslationMessages } from '../i18n'
import config from '../config'

describe('translation messages', () => {
    it('should have the supportd languages as property', () => {
        expect(Object.keys(translationMessages)).toEqual(
            config.LANGUAGE.SUPPORTED_LOCALES
        )
    })
})

describe('formatTranslationMessage (classic))', () => {
    it('should format the messages', () => {
        const frMessages = {
            test: 'test FR',
        }
        expect(formatTranslationMessages('fr', frMessages)).toEqual(frMessages)
    })

    it('should format the messages and use enMessages when missing in current language', () => {
        const frMessages = {
            test: 'test FR',
            testBis: undefined,
        }

        expect(formatTranslationMessages('fr', frMessages)).toEqual({
            ...frMessages,
            testBis: 'testbis EN',
        })
    })
})
