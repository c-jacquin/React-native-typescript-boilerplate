import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { IntlProvider } from 'react-intl'

import FormattedNumber from '../FormattedNumber'

describe('FormattedNumber', () => {
    it('should renders correctly', () => {
        const tree = renderer.create(
            <IntlProvider locale="en">
                <FormattedNumber style={{}} value={'foo'} />
            </IntlProvider>
        )
        expect(tree).toBeDefined()
    })
})
