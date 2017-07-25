import { Epic } from 'redux-observable'
import { Observable } from 'rxjs'

import config from 'config'
import { AppState, ReduxAction } from '../types'
import * as languageActions from './actions'
import * as languageApi from './api'

const getLocaleEpic: Epic<ReduxAction, AppState> = (action$, store) => {
    return action$.ofType(languageActions.GET_LOCALE_PENDING).mergeMap(() => {
        return languageApi
            .getLanguage()
            .map(locale => {
                const formattedLocale = config.LANGUAGE.SUPPORTED_LOCALES.includes(
                    locale
                )
                    ? locale
                    : config.LANGUAGE.DEFAULT_LOCALE

                return languageActions.getLocaleSuccess(formattedLocale)
            })
            .catch(err => Observable.of(languageActions.getLocaleFailed(err)))
    })
}

export default getLocaleEpic
