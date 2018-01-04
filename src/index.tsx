import Expo, { AppLoading } from 'expo'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'glamorous-native'
import { PersistGate } from 'redux-persist/es/integration/react'

import configureStore from 'store/index'

import LanguageProvider from 'containers/LanguageProvider'
import Root from 'containers/Root'

import { translationMessages } from './i18n'
import { theme } from './theme'

const { store, persistor } = configureStore()

export class App extends React.Component<{}, {}> {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={<AppLoading />} persistor={persistor}>
                    <LanguageProvider messages={translationMessages}>
                        <ThemeProvider theme={theme}>
                            <Root />
                        </ThemeProvider>
                    </LanguageProvider>
                </PersistGate>
            </Provider>
        )
    }
}

Expo.registerRootComponent(App)
