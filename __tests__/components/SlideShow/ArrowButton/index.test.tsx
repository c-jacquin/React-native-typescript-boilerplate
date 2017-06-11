import * as React from 'react'
import 'react-native'
// Note: test renderer must be required after react-native.
import * as renderer from 'react-test-renderer'

import ArrowButton from '../../../../src/components/Slideshow/ArrowButton'

it('renders correctly', () => {
  const tree = renderer.create(
    <ArrowButton />,
  )
  expect(tree).toBeDefined()
})
