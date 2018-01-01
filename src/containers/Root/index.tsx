import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { StatusBar, ScrollView, Text } from 'react-native'
import { Notifications } from 'expo'
import { View } from 'glamorous-native'
import { addNavigationHelpers } from 'react-navigation'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { AppState, ReduxAction } from 'store/types'
import { getLocale } from 'store/language'
import { registerPush } from 'store/pushNotification'
import { selectNavigation } from 'store/navigation'
import Navigator from 'pages'

import {
    RootActionCreators,
    RootConnectedProps,
    RootProps,
    RootState,
} from './types'

export class Root extends PureComponent<RootProps, RootState> {
    static contextTypes = {
        store: PropTypes.any,
    }

    componentWillMount() {
        if (this.props.getLocale) {
            this.props.getLocale()
        }

        if (this.props.registerPush) {
            this.props.registerPush()
        }
    }

    render() {
        return (
            <View flex={1}>
                <StatusBar hidden={true} />
                <Navigator
                    navigation={addNavigationHelpers({
                        dispatch: this.context.store.dispatch,
                        state: this.props.nav,
                    })}
                />
            </View>
        )
    }
}

export const mapStateToProps: MapStateToProps<
    RootConnectedProps,
    RootProps,
    AppState
> = state => ({
    nav: selectNavigation(state),
})
const mapDispatchToProps: MapDispatchToProps<
    RootActionCreators,
    RootProps
> = dispatch =>
    bindActionCreators(
        {
            getLocale,
            registerPush,
        },
        dispatch
    )

export default connect<
    RootConnectedProps,
    RootActionCreators,
    RootProps,
    AppState
>(mapStateToProps, mapDispatchToProps)(Root)
