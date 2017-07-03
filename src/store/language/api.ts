import { Observable } from 'rxjs'
import { Util } from 'expo'

export const getLanguage = () => {
    return Observable.fromPromise(Util.getCurrentLocaleAsync()).map(
        locale => locale.split('_')[0]
    )
}
