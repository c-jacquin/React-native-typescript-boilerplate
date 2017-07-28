import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { FormattedMessage } from 'components/intl'
import { AppState } from 'store/types'

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

export default connect(
    (state: AppState) => ({}),
    dispatch => bindActionCreators({}, dispatch)
)(Home)
