import 'rxjs'
import * as React from 'react'
import 'react-native'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'
import * as renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'

import Home from '../index'

import { translationMessages } from '../../../i18n'

const mockStore = configureStore()

describe('Home component', () => {
    let store = mockStore({})
    beforeEach(() => {
        store = mockStore({})
    })

    it('should renders correctly', () => {
        const tree = renderer
            .create(
                <Provider store={store}>
                    <IntlProvider
                        locale={'en'}
                        messages={translationMessages.en}
                    >
                        <Home />
                    </IntlProvider>
                </Provider>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
