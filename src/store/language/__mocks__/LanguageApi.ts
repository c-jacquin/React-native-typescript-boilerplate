import { Observable } from 'rxjs/Observable'

export class LanguageApi {
    formatLocale(locale: string): string {
        return locale.split('_')[1]
    }

    getLanguage() {
        return Observable.of('en')
    }
}
