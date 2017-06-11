import React, { StatelessComponent } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import styles from './styles'
import { IArrowButtonProps } from './types'

const ArrowButton: StatelessComponent<IArrowButtonProps> = ({
    onPress = () => {},
    direction = 'back',
    style = {},
}) => (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
        <Icon name={`ios-arrow-${direction}`} size={100} color={'black'}/>
    </TouchableOpacity>
)

export default ArrowButton
