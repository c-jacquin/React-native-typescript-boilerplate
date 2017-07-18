import * as React from 'react'
import { Animated } from 'react-native'
import * as renderer from 'react-test-renderer'

import Slide from '../index'

describe('Slide', () => {
    it('should renders correctly', () => {
        const tree = renderer.create(
            <Slide
                item={{ screen: { uri: '' }, poster: { uri: '' }, title: '' }}
                page={1}
                width={1}
                index={2}
                translate={new Animated.Value(4)}
            />
        )
        expect(tree).toBeDefined()
    })
})
