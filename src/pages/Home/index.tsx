import React, { Component, PropTypes } from 'react'
import { ScrollView, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Ionicons } from '@expo/vector-icons'

import Slideshow from 'components/Slideshow'

import { AppState } from 'store/types'

import { HomeProps, HomeState } from './types'

class Home extends Component<HomeProps, HomeState> {
    static navigationOptions = {
        title: 'Home',
    }

    state = {
        items: [
            {
                title: 'Some Bullshit',
                poster: {
                    uri: 'http://lorempixel.com/150/220/',
                },
                screen: {
                    uri: 'http://lorempixel.com/400/300/',
                },
            },
            {
                title: 'Some nature',
                poster: {
                    uri: 'https://placeimg.com/150/220/nature',
                },
                screen: {
                    uri: 'https://placeimg.com/400/200/nature',
                },
            },
            {
                title: 'Some animals',
                poster: {
                    uri: 'https://placeimg.com/150/220/animals',
                },
                screen: {
                    uri: 'https://placeimg.com/400/200/animals',
                },
            },
        ],
    }

    render() {
        return (
            <ScrollView>
                <Slideshow items={this.state.items} arrows={true} />
            </ScrollView>
        )
    }
}

export default connect(
    (state: AppState) => ({}),
    dispatch => bindActionCreators({}, dispatch)
)(Home)
