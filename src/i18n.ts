import 'intl'
import { addLocaleData } from 'react-intl'

import enLocaleData from 'react-intl/locale-data/en'
import frLocaleData from 'react-intl/locale-data/fr'

import enTranslationMessages from '../i18n/en.json'
import frTranslationMessages from '../i18n/fr.json'

import config from 'config'

/**
 * add helpers to format date strings and all the i18n magic
 */
addLocaleData(enLocaleData)
addLocaleData(frLocaleData)

export interface TranslationMessages {
    en: any
    fr: any
}

export const formatTranslationMessages = (
    locale: string,
    messages: any
): TranslationMessages => {
    const defaultFormattedMessages: any =
        locale !== config.LANGUAGE.DEFAULT_LOCALE
            ? formatTranslationMessages(
                  config.LANGUAGE.DEFAULT_LOCALE,
                  enTranslationMessages
              )
            : {}
    const formattedMessages: TranslationMessages | any = {}
    const messageKeys = Object.keys(messages)

    for (const messageKey of messageKeys) {
        formattedMessages[messageKey] =
            locale === config.LANGUAGE.DEFAULT_LOCALE
                ? messages[messageKey]
                : (formattedMessages[messageKey] =
                      messages[messageKey] ||
                      defaultFormattedMessages[messageKey])
    }

    return formattedMessages
}

export const translationMessages: TranslationMessages = {
    en: formatTranslationMessages('en', enTranslationMessages),
    fr: formatTranslationMessages('fr', frTranslationMessages),
}
