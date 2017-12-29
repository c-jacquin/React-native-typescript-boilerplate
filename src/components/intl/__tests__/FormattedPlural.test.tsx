import * as React from 'react'
import { Text } from 'react-native'
import * as renderer from 'react-test-renderer'
import { IntlProvider } from 'react-intl'

import FormattedPlural from '../FormattedPlural'

describe('FormattedPlural', () => {
    it('should renders correctly', () => {
        const tree = renderer
            .create(
                <IntlProvider locale="en">
                    <FormattedPlural
                        style={'ordinal'}
                        value={'foo'}
                        other={<Text>Foo</Text>}
                    />
                </IntlProvider>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
