import configureMockStore from 'redux-mock-store'
import { createEpicMiddleware } from 'redux-observable'

import { dependencies } from '../../epicDependencies'
import { AppState, ReduxAction, EpicDependancies } from '../../types'
import { BootApi } from '../__mocks__/BootApi'
import { LanguageApi } from '../../language/__mocks__/LanguageApi'
import * as bootActions from '../actions'
import * as languageActions from '../../language/actions'
import * as pushActions from '../../pushNotification/actions'

import bootEpic from '../epic'

describe('boot epic', () => {
    const bootApi = new BootApi()
    const languageApi = new LanguageApi()

    const epicMiddleware = createEpicMiddleware<
        ReduxAction,
        AppState,
        EpicDependancies
    >(bootEpic, {
        dependencies: {
            ...dependencies,
            bootApi,
            languageApi,
        },
    })
    const mockStore = configureMockStore([epicMiddleware])

    let store = mockStore()

    beforeEach(() => {
        store = mockStore()
    })

    afterEach(() => {
        epicMiddleware.replaceEpic(bootEpic)
    })

    it('should call bootApi. and languageApi. when BOOTSTRAP-PENDING', () => {
        const spyBoot = jest.spyOn(bootApi, 'loadAssets')
        const languageSpy = jest.spyOn(languageApi, 'getLanguage')

        store.dispatch(bootActions.bootstrap())

        expect(spyBoot).toHaveBeenCalled()
        expect(languageSpy).toHaveBeenCalled()
    })

    it('should dispatch GET_LANGUAGE_SUCCESS and BOOTSRAP_SUCCESS', () => {
        const language = languageApi.getLanguage().getValue()
        store.dispatch(bootActions.bootstrap())

        expect(store.getActions()).toEqual([
            bootActions.bootstrap(),
            languageActions.getLocaleSuccess(language),
            bootActions.bootstrapSuccess(),
            pushActions.registerPush(),
        ])
    })
})
