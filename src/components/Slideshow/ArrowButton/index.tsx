import React, { StatelessComponent } from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { Ionicons } from '@expo/vector-icons'

import styles from './styles'
import { IArrowButtonProps } from './types'

const ArrowButton: StatelessComponent<IArrowButtonProps> = ({
    onPress = () => {},
    direction = 'back',
    style = {},
}) =>
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
        <Ionicons name={`ios-arrow-${direction}`} size={100} color={'black'} />
    </TouchableOpacity>

export default ArrowButton
