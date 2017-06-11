import * as React from 'react'
import 'react-native'
// Note: test renderer must be required after react-native.
import * as renderer from 'react-test-renderer'

import SlideShow from '../../../src/components/Slideshow/index'

it('renders correctly', () => {
  const tree = renderer.create(
    <SlideShow items={[{ screen: { uri: '' }, poster: { uri: '' }, title: '' }]} />,
  )
  expect(tree).toBeDefined()
})
