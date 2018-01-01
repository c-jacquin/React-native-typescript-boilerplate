import { Util } from 'expo'
import { fromPromise } from 'rxjs/observable/fromPromise'

import config from 'config'

export class LanguageApi {
    formatLocale(brutLocale: string): string {
        const locale = brutLocale.split('_')[1]

        return config.LANGUAGE.SUPPORTED_LOCALES.includes(locale)
            ? locale
            : config.LANGUAGE.DEFAULT_LOCALE
    }

    getLanguage() {
        return fromPromise(Util.getCurrentLocaleAsync().then(this.formatLocale))
    }
}
