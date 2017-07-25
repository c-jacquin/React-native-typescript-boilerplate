import { Observable } from 'rxjs'
import { Util } from 'expo'

export const formatLocale = (locale: string) => locale.split('_')[1]

export const getLanguage = () => {
    return Observable.fromPromise(Util.getCurrentLocaleAsync()).map(
        formatLocale
    )
}
