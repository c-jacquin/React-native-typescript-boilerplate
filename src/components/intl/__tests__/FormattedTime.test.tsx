import * as React from 'react'
import { Text } from 'react-native'
import * as renderer from 'react-test-renderer'
import { IntlProvider } from 'react-intl'

import FormattedTime from '../FormattedTime'

describe('FormattedTime', () => {
    it('should renders correctly', () => {
        const tree = renderer
            .create(
                <IntlProvider locale="en">
                    <FormattedTime style={{}} value={1500} />
                </IntlProvider>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
