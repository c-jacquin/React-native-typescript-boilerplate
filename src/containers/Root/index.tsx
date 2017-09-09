import React, { PureComponent } from 'react'
import { StatusBar, ScrollView, Text, View } from 'react-native'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { addNavigationHelpers } from 'react-navigation'
import PropTypes from 'prop-types'

import { AppState, ReduxAction } from 'store/types'
import { getLocale } from 'store/language'
import { selectNavigation } from 'store/navigation'
import Navigator from 'pages'

import {
    RootActionCreators,
    RootConnectedProps,
    RootProps,
    RootState,
} from './types'
import styles from './styles'

export class Root extends PureComponent<RootProps, RootState> {
    static contextTypes = {
        store: PropTypes.any,
    }

    componentWillMount() {
        if (this.props.getLocale) {
            this.props.getLocale()
        }
    }

    render() {
        return (
            <View style={styles.root}>
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
    RootProps | null
> = (state: AppState) => ({
    nav: selectNavigation(state),
})
const mapDispatchToProps: MapDispatchToProps<RootActionCreators, RootProps> = (
    dispatch: Dispatch<ReduxAction>
) => {
    return bindActionCreators(
        {
            getLocale,
        },
        dispatch
    )
}

export default connect<RootConnectedProps, RootActionCreators, RootProps>(
    mapStateToProps,
    mapDispatchToProps
)(Root)
