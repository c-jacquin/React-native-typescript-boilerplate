import React, { createElement, isValidElement, StatelessComponent } from 'react'
import { FormattedMessage } from 'react-intl'
import { Text } from 'react-native'
import { IFormattedMessageProps } from './types'

const NativeFormattedMessage: StatelessComponent<
    IFormattedMessageProps
> = props =>
    <FormattedMessage {...props}>
        {(...nodes: any[]) => {
            const newNodes = nodes.map(node => {
                if (!isValidElement(node)) {
                    return (
                        <Text style={props.style}>
                            {node}
                        </Text>
                    )
                }
                return node
            })
            return createElement(Text, { style: props.style }, ...newNodes)
        }}
    </FormattedMessage>

export default NativeFormattedMessage
