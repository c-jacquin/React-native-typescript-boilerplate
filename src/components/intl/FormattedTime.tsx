import React, { StatelessComponent } from 'react'
import { FormattedTime } from 'react-intl'
import { Text } from 'react-native'

import { IFormattedTime } from './types'

const NativeFormattedTime: StatelessComponent<IFormattedTime> = props => {
    return (
        <FormattedTime {...props}>
            {(localized: string) =>
                <Text style={props.style}>
                    {localized}
                </Text>}
        </FormattedTime>
    )
}

export default NativeFormattedTime
