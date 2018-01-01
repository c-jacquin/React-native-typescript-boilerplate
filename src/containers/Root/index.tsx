import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { StatusBar, ScrollView, Text, Platform } from 'react-native'
import { Notifications, AppLoading } from 'expo'
import { View } from 'glamorous-native'
import { addNavigationHelpers } from 'react-navigation'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { AppState, ReduxAction } from 'store/types'
import { bootstrap, isAppReady } from 'store/boot'
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
        if (this.props.bootstrap) {
            this.props.bootstrap()
        }
    }

    render() {
        const { appReady, nav } = this.props

        if (appReady) {
            return (
                <View flex={1}>
                    {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
                    {Platform.OS === 'android' && (
                        <View height={24} backgroundColor="rgba(0,0,0,0.2)" />
                    )}
                    <Navigator
                        navigation={addNavigationHelpers({
                            dispatch: this.context.store.dispatch,
                            state: nav,
                        })}
                    />
                </View>
            )
        } else {
            return <AppLoading />
        }
    }
}

export const mapStateToProps: MapStateToProps<
    RootConnectedProps,
    RootProps,
    AppState
> = state => ({
    appReady: isAppReady(state),
    nav: selectNavigation(state),
})
const mapDispatchToProps: MapDispatchToProps<
    RootActionCreators,
    RootProps
> = dispatch =>
    bindActionCreators(
        {
            bootstrap,
        },
        dispatch
    )

export default connect<
    RootConnectedProps,
    RootActionCreators,
    RootProps,
    AppState
>(mapStateToProps, mapDispatchToProps)(Root)
