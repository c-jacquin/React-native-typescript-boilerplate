import React, { PureComponent } from 'react'
import { StatusBar, ScrollView, Text, View } from 'react-native'
import { connect, MapDispatchToProps } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getLocale } from 'store/language/actions'
import Navigator from 'pages'

import {
    RootActionCreators,
    RootConnectedProps,
    RootProps,
    RootState,
} from './types'
import styles from './styles'

export class Root extends PureComponent<RootProps, RootState> {
    componentWillMount() {
        if (this.props.getLocale) {
            this.props.getLocale()
        }
    }

    render() {
        return (
            <View style={styles.root}>
                <StatusBar hidden={true} />
                <Navigator />
            </View>
        )
    }
}

const mapStateToProps = null
const mapDispatchToProps: MapDispatchToProps<
    RootActionCreators,
    RootProps
> = dispatch => {
    return bindActionCreators(
        {
            getLocale,
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Root)
