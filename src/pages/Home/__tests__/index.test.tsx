import 'rxjs'
import * as React from 'react'
import 'react-native'
import { Provider } from 'react-redux'
import * as renderer from 'react-test-renderer'
import store from 'store'

import Home from 'pages/Home'

it('renders correctly', () => {
    const tree = renderer.create(
        <Provider store={store}>
            <Home />
        </Provider>
    )
    expect(tree).toBeDefined()
})
