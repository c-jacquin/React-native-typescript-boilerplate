import React, { createElement, isValidElement, StatelessComponent } from 'react'
import { FormattedMessage } from 'react-intl'
import { Text } from 'react-native'
import { IFormattedMessageProps } from './types'

const NativeFormattedMessage: StatelessComponent<
    IFormattedMessageProps
> = props => {
    return (
        <FormattedMessage {...props}>
            {(...nodes: any[]) => {
                const newNodes = nodes.map((node, index) => {
                    return (
                        <Text key={index} style={props.style}>
                            {node}
                        </Text>
                    )
                })
                return createElement(Text, { style: props.style }, ...newNodes)
            }}
        </FormattedMessage>
    )
}

export default NativeFormattedMessage
