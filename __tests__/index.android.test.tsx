import * as React from 'react'
import 'react-native'
// Note: test renderer must be required after react-native.
import * as renderer from 'react-test-renderer'

import App from '../src/index.android'

it('renders correctly', () => {
  const tree = renderer.create(
    <App />,
  )
  expect(tree).toBeDefined()
})
