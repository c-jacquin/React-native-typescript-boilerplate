import React, { StatelessComponent } from 'react'
import { FormattedDate } from 'react-intl'
import { Text } from 'react-native'
import { IFormattedDateProps } from './types'

const NativeFormattedDate: StatelessComponent<IFormattedDateProps> = props =>
    <FormattedDate {...props}>
        {(localized: string) =>
            <Text style={props.style}>
                {localized}
            </Text>}
    </FormattedDate>

export default NativeFormattedDate
