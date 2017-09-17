jest.mock('config', () => {
    return {
        ENV: 'prod',
        LANGUAGE: {
            DEFAULT_LOCALE: 'test',
        },
    }
})

import { Store } from 'redux'
import configureStore from '../index'
import { AppState } from '../types'

describe('redux store in prod env', () => {
    let store: Store<AppState>

    beforeEach(() => {
        store = configureStore()
    })

    it('should has a dispatch method', () => {
        expect(store.dispatch).toBeDefined()
    })

    it('should has a getState method', () => {
        expect(store.getState).toBeDefined()
    })
})
