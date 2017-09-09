import { Observable } from 'rxjs'
import { Util } from 'expo'

export class LanguageApi {
    formatLocale(locale: string): string {
        return locale.split('_')[1]
    }

    getLanguage() {
        return Observable.fromPromise(Util.getCurrentLocaleAsync()).map(
            this.formatLocale
        )
    }
}

export default new LanguageApi()
