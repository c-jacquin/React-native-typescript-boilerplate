import Expo from 'expo'
import React, { Component } from 'react'
import { Provider } from 'react-redux'

import { translationMessages } from './i18n'
import configureStore from 'store/index'

import LanguageProvider from 'containers/LanguageProvider'
import Root from 'containers/Root'

const store = configureStore()

export class App extends Component<any, any> {
    render() {
        return (
            <Provider store={store}>
                <LanguageProvider messages={translationMessages}>
                    <Root />
                </LanguageProvider>
            </Provider>
        )
    }
}

Expo.registerRootComponent(App)
