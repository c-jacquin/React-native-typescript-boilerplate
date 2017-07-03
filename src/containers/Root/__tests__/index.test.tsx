import 'rxjs'
import * as React from 'react'
import 'react-native'
import { Provider, Store } from 'react-redux'
import * as renderer from 'react-test-renderer'

import { Root } from '../index'

it('renders correctly', () => {
    const tree = renderer.create(<Root />)
    expect(tree).toBeDefined()
})
