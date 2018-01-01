import { Epic, ActionsObservable } from 'redux-observable'

import { map, mergeMap, catchError } from 'rxjs/operators'
import { of as observableOf } from 'rxjs/observable/of'

import config from 'config'
import { MyEpic } from '../types'
import * as languageActions from './actions'

const getLocaleEpic: MyEpic = (action$, store, { languageApi }) => {
    return action$.ofType(languageActions.GET_LOCALE_PENDING).pipe(
        mergeMap(() => {
            return languageApi.getLanguage().pipe(
                map(locale => {
                    const formattedLocale = config.LANGUAGE.SUPPORTED_LOCALES.includes(
                        locale
                    )
                        ? locale
                        : config.LANGUAGE.DEFAULT_LOCALE

                    return languageActions.getLocaleSuccess(formattedLocale)
                }),
                catchError(err =>
                    observableOf(languageActions.getLocaleFailed(err))
                )
            )
        })
    )
}

export default getLocaleEpic
