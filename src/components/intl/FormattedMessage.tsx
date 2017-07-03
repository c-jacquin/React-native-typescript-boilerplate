import React, { createElement, isValidElement, StatelessComponent } from 'react'
import ReactIntl from 'react-intl'
import { Text } from 'react-native'
import { IFormattedMessageProps } from './types'

const FormattedMessage: StatelessComponent<IFormattedMessageProps> = props =>
    <ReactIntl.FormattedMessage {...props}>
        {(...nodes: any[]) => {
            const newNodes = nodes.map(node => {
                if (!isValidElement(node)) {
                    return <Text style={props.style}>{node}</Text>
                }
                return node
            })
            return createElement(Text, { style: props.style }, ...newNodes)
        }}
    </ReactIntl.FormattedMessage>

export default FormattedMessage
