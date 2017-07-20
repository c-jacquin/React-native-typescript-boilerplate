import 'rxjs'
import * as React from 'react'
import 'react-native'
import { Provider } from 'react-redux'
import * as renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'

import Home from 'pages/Home'

const mockStore = configureStore()

describe('Home component', () => {
    let store = mockStore({})
    beforeEach(() => {
        store = mockStore({})
    })

    it('should renders correctly', () => {
        const tree = renderer.create(
            <Provider store={store}>
                <Home />
            </Provider>
        )
        expect(tree).toBeDefined()
    })
})
