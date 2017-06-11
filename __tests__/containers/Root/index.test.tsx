import * as React from 'react'
import 'react-native'
import { Provider } from 'react-redux'
import * as renderer from 'react-test-renderer'
import store from '../../../src/store'

import Root from '../../../src/containers/Root'

it('renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}><Root/></Provider>,
  )
  expect(tree).toBeDefined()
})
