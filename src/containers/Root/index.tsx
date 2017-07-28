import React, { PureComponent } from 'react'
import { StatusBar, ScrollView, Text, View } from 'react-native'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addNavigationHelpers } from 'react-navigation'
import PropTypes from 'prop-types'

import { getLocale } from 'store/language/actions'
import { selectNavigation } from 'store/navigation/selectors'
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

const mapStateToProps: MapStateToProps<
    RootConnectedProps,
    RootProps
> = state => ({
    nav: selectNavigation(state),
})
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
