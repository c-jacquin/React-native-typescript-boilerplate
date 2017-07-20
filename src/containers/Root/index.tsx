import React, { PureComponent } from 'react'
import { ScrollView, Text } from 'react-native'
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

export class Root extends PureComponent<RootProps, RootState> {
    componentWillMount() {
        if (this.props.getLocale) {
            this.props.getLocale()
        }
    }

    render() {
<<<<<<< HEAD
        const { items } = this.state

        return (
            <ScrollView>
                <Slideshow items={items} />
            </ScrollView>
        )
=======
        return <Navigator />
>>>>>>> 3c07c81... feat(routing): add react-navigation (StackNavigator) (#4)
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

export default connect<null, RootActionCreators, RootProps>(
    mapStateToProps,
    mapDispatchToProps
)(Root)
