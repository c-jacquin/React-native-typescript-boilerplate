import { MyEpic } from '../types'
import * as bootActions from './actions'
import * as languagesActions from 'store/language/actions'
import * as pushActions from 'store/pushNotification/actions'
import { map, switchMap, catchError, flatMap, tap } from 'rxjs/operators'
import { of as observableOf } from 'rxjs/observable/of'
// import { forkJoin } from 'rxjs/observable/forkJoin'

const bootEpic: MyEpic = (action$, store, { bootApi, languageApi }) => {
    return action$.ofType(bootActions.BOOTSTRAP_PENDING).pipe(
        // switchMap(() => forkJoin([
        //     bootApi.loadAssets(),
        //     languageApi.getLanguage(),
        // ])),
        switchMap(() => bootApi.loadAssets()),
        switchMap(() => languageApi.getLanguage()),
        flatMap(result => [
            languagesActions.getLocaleSuccess(result),
            bootActions.bootstrapSuccess(),
            pushActions.registerPush(),
        ])
    )
}

export default bootEpic
