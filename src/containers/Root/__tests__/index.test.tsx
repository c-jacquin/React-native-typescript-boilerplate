import 'rxjs'
import React from 'react'
import 'react-native'
import { Provider, Store } from 'react-redux'
import renderer from 'react-test-renderer'
import { Root } from '../index'

import configureStore from 'redux-mock-store'

const mockStore = configureStore()

describe('Root component', () => {
    let store = mockStore({})
    const mockProps = {
        getLocale: () => ({ type: 'TEST' }),
    }
    const spy = jest.spyOn(mockProps, 'getLocale')

    const tree = renderer.create(
        <Provider store={store}>
            <Root {...mockProps} />
        </Provider>
    )
    beforeEach(() => {
        store = mockStore({})
    })

    it('should renders correctly', () => {
        expect(tree).toBeDefined()
    })

    it('should call getLocale prop', () => {
        expect(spy).toHaveBeenCalled()
    })
})
