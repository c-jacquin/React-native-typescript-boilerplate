import React, { StatelessComponent } from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { Ionicons } from '@expo/vector-icons'

import styles from './styles'
import { ArrowButtonProps } from './types'

const ArrowButton: StatelessComponent<ArrowButtonProps> = ({
    onPress = () => {},
    direction = 'back',
    style = {},
}) => {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <Ionicons
                name={`ios-arrow-${direction}`}
                size={100}
                color={'black'}
            />
        </TouchableOpacity>
    )
}

export default ArrowButton
