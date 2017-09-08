import React from 'react'
import { Provider, Store } from 'react-redux'
import { IntlProvider } from 'react-intl'
import renderer from 'react-test-renderer'
import { Root, mapStateToProps } from '../index'

import configureStore from 'redux-mock-store'
import { translationMessages } from 'i18n'
import initialState from 'store/__helpers__/initialState'

const mockStore = configureStore()

describe('Root component', () => {
    let store = mockStore({})
    const mockProps = {
        getLocale: () => ({ type: 'TEST' }),
        nav: {
            index: 0,
            routes: [
                {
                    key: 'test',
                    routeName: 'Home',
                },
            ],
        },
    }
    const spy = jest.spyOn(mockProps, 'getLocale')

    const tree = renderer.create(
        <Provider store={store}>
            <IntlProvider locale={'en'} messages={translationMessages.en}>
                <Root {...mockProps} />
            </IntlProvider>
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

    describe('mapStateToPropsFunction', () => {
        it('should return the navigation state in an object', () => {
            expect(mapStateToProps(initialState, null)).toEqual({
                nav: initialState.navigation,
            })
        })
    })
})
