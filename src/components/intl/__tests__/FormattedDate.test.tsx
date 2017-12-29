import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { IntlProvider } from 'react-intl'

import FormattedDate from '../FormattedDate'

describe('FormattedDate', () => {
    it('should renders correctly', () => {
        const tree = renderer
            .create(
                <IntlProvider locale="en">
                    <FormattedDate style={{}} value={1500} />
                </IntlProvider>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
