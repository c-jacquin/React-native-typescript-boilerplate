import Expo from 'expo'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'glamorous-native'

import configureStore from 'store/index'

import LanguageProvider from 'containers/LanguageProvider'
import Root from 'containers/Root'

import { translationMessages } from './i18n'
import { theme } from './theme'

const store = configureStore()

export class App extends Component<any, any> {
    render() {
        return (
            <Provider store={store}>
                <LanguageProvider messages={translationMessages}>
                    <ThemeProvider theme={theme}>
                        <Root />
                    </ThemeProvider>
                </LanguageProvider>
            </Provider>
        )
    }
}

Expo.registerRootComponent(App)
