import React, { StatelessComponent } from 'react'
import { FormattedNumber } from 'react-intl'
import { Text } from 'react-native'

import { IFormattedNumberProps } from './types'

const NativeFormattedNumber: StatelessComponent<IFormattedNumberProps> = ({
    style,
    formatStyle,
    ...other,
}) => {
    const formatOptions = {
        ...other,
        style: formatStyle,
    }

    return (
        <FormattedNumber {...formatOptions}>
            {(localized: string) => <Text style={style}>{localized}</Text>}
        </FormattedNumber>
    )
}

export default NativeFormattedNumber
