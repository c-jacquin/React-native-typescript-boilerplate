import React, { StatelessComponent } from 'react'
import ReactIntl from 'react-intl'
import { Text } from 'react-native'

import { IFormattedTime } from './types'

const FormattedTime: StatelessComponent<IFormattedTime> = (props) => (
  <ReactIntl.FormattedTime {...props}>
    { (localized: string) =>
        <Text style={props.style}>{localized}</Text>
    }
  </ReactIntl.FormattedTime>
)
