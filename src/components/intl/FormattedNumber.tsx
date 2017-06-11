import React, { StatelessComponent } from 'react'
import ReactIntl from 'react-intl'
import { Text } from 'react-native'

import { IFormattedNumberProps } from './types'

const FormattedNumber: StatelessComponent<IFormattedNumberProps> = ({
    style,
    formatStyle,
    ...other,
}) => {
  const formatOptions = {
      ...other,
      style: formatStyle,
  }

  return (
    <ReactIntl.FormattedNumber {...formatOptions}>
      {(localized: string) => <Text style={style}>{localized}</Text>}
    </ReactIntl.FormattedNumber>
  )
}

export default FormattedNumber
