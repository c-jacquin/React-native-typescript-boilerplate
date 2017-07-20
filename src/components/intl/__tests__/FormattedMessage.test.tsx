import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { IntlProvider } from 'react-intl'

import FormattedMessage from '../FormattedMessage'

describe('FormattedMessage', () => {
    it('should renders correctly', () => {
        const tree = renderer.create(
            <IntlProvider locale="en" messages={{ bar: 'foo' }}>
                <FormattedMessage style={{}} value={'foo'} id={'bar'} />
            </IntlProvider>
        )
        expect(tree).toBeDefined()
    })
})
