import React, { StatelessComponent } from 'react'
import { FormattedPlural } from 'react-intl'
import { Text } from 'react-native'

import { IFormattedPlural } from './types'

const NativeFormattedPlural: StatelessComponent<IFormattedPlural> = props => {
    return (
        <FormattedPlural {...props}>
            {(localized: string) =>
                <Text style={props.textStyle}>
                    {localized}
                </Text>}
        </FormattedPlural>
    )
}

export default NativeFormattedPlural
