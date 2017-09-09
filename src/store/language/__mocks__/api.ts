import { Observable } from 'rxjs'

export class LanguageApi {
    formatLocale(locale: string): string {
        return locale.split('_')[1]
    }

    getLanguage() {
        return Observable.of('en')
    }
}

export default new LanguageApi()
