import { Epic, ActionsObservable } from 'redux-observable'

import { Observable } from 'rxjs'

import config from 'config'
import { AppState, ReduxAction, EpicDependancies } from '../types'
import * as languageActions from './actions'

const getLocaleEpic: Epic<ReduxAction, AppState, EpicDependancies> = (
    action$,
    store,
    { languageApi }
) => {
    return action$.ofType(languageActions.GET_LOCALE_PENDING).mergeMap(() => {
        return languageApi
            .getLanguage()
            .map((locale: string) => {
                const formattedLocale = config.LANGUAGE.SUPPORTED_LOCALES.includes(
                    locale
                )
                    ? locale
                    : config.LANGUAGE.DEFAULT_LOCALE

                return languageActions.getLocaleSuccess(formattedLocale)
            })
            .catch((err: Error) =>
                Observable.of(languageActions.getLocaleFailed(err))
            )
    })
}

export default getLocaleEpic
