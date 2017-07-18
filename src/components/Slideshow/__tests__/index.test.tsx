import * as React from 'react'
import 'react-native'
import * as renderer from 'react-test-renderer'

import SlideShow from '../index'

describe('SlideShow', () => {
    it('should renders correctly', () => {
        const tree = renderer.create(
            <SlideShow
                items={[
                    { screen: { uri: '' }, poster: { uri: '' }, title: '' },
                ]}
            />
        )
        expect(tree).toBeDefined()
    })
})
