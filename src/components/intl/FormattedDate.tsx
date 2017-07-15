import React, { StatelessComponent } from 'react'
import ReactIntl from 'react-intl'
import { Text } from 'react-native'
import { IFormattedDateProps } from './types'

const FormattedDate: StatelessComponent<IFormattedDateProps> = props =>
    <ReactIntl.FormattedDate {...props}>
        {(localized: string) =>
            <Text style={props.style}>
                {localized}
            </Text>}
    </ReactIntl.FormattedDate>

export default FormattedDate
