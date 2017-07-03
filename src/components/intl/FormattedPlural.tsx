import React, { StatelessComponent } from 'react'
import ReactIntl from 'react-intl'
import { Text } from 'react-native'

import { IFormattedPlural } from './types'

const FormattedPlural: StatelessComponent<IFormattedPlural> = props =>
    <ReactIntl.FormattedPlural {...props}>
        {(localized: string) => <Text style={props.style}>{localized}</Text>}
    </ReactIntl.FormattedPlural>

export default FormattedPlural
