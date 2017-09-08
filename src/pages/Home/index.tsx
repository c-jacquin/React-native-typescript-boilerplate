import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { FormattedMessage } from 'components/intl'
import { AppState, ReduxAction } from 'store/types'

import { HomeProps, HomeState } from './types'
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

export default connect<any, any, HomeProps>(
    (state: AppState) => ({}),
    (dispatch: Dispatch<ReduxAction>) => bindActionCreators({}, dispatch)
)(Home)
