import * as React from 'react'
import * as renderer from 'react-test-renderer'

import { App } from '../index'

describe('App', () => {
    it('should renders correctly', () => {
        const tree = renderer.create(<App />)
        expect(tree).toBeDefined()
    })
})
