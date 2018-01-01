import { BehaviorSubject } from 'rxjs/BehaviorSubject'

export class LanguageApi {
    formatLocale(locale: string): string {
        return locale.split('_')[1]
    }

    getLanguage() {
        return new BehaviorSubject('en')
    }
}
