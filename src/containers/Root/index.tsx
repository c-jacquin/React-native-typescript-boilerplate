import React, { PureComponent } from 'react'
import { ScrollView } from 'react-native'
import { connect, DispatchProp } from 'react-redux'
import { bindActionCreators } from 'redux'

import Slideshow from 'components/Slideshow'

import { getLocale } from 'store/language/actions'

import {
    RootActionCreators,
    RootConnectedProps,
    RootProps,
    RootState,
} from './types'

export class Root extends PureComponent<RootProps, RootState> {
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

    componentWillMount() {
        if (this.props.getLocale) {
            this.props.getLocale()
        }
    }

    render() {
        const { items } = this.state

        return (
            <ScrollView>
                <Slideshow items={items} />
            </ScrollView>
        )
    }
}

export default connect<null, RootActionCreators, RootProps>(null, dispatch =>
    bindActionCreators(
        {
            getLocale,
        },
        dispatch
    )
)(Root)
