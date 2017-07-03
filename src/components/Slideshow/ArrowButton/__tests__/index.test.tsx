import * as React from 'react'
import 'react-native'
import * as renderer from 'react-test-renderer'

import ArrowButton from '../index'

it('renders correctly', () => {
    const handlePress = () => {}
    const tree = renderer.create(
        <ArrowButton direction={'back'} style={{}} onPress={handlePress} />
    )
    expect(tree).toBeDefined()
})
