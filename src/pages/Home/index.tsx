import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { FormattedMessage } from 'components/intl'
import { AppState, ReduxAction } from 'store/types'

import {
    HomeProps,
    HomeState,
    HomeConnectedProps,
    HomeActionCreators,
} from './types'
import messages from './messages'

export class Home extends Component<HomeProps, HomeState> {
    static navigationOptions = {
        title: 'Home',
    }

    render() {
        return (
            <ScrollView>
                <FormattedMessage {...messages.title} />
            </ScrollView>
        )
    }
}

const mapStateToProps: MapStateToProps<
    HomeConnectedProps,
    HomeProps,
    AppState
> = state => ({})

const mapDispatchToProps: MapDispatchToProps<HomeActionCreators, HomeProps> = (
    dispatch: Dispatch<ReduxAction>
) => bindActionCreators({}, dispatch)

export default connect<
    HomeConnectedProps,
    HomeActionCreators,
    HomeProps,
    AppState
>(mapStateToProps, mapDispatchToProps)(Home)
