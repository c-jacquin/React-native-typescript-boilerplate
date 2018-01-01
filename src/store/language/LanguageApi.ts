import { Util } from 'expo'
import { fromPromise } from 'rxjs/observable/fromPromise'
import { map } from 'rxjs/operators'

export class LanguageApi {
    formatLocale(locale: string): string {
        return locale.split('_')[1]
    }

    getLanguage() {
        return fromPromise(Util.getCurrentLocaleAsync()).pipe(
            map(this.formatLocale)
        )
    }
}
