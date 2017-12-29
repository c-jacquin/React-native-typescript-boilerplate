import React, { Component, StatelessComponent } from 'react'
import { IntlProvider } from 'react-intl'
import {
    connect,
    MapStateToProps,
    MapDispatchToProps,
    Dispatch,
} from 'react-redux'
import { bindActionCreators } from 'redux'

import * as languageStore from 'store/language'
import { AppState, ReduxAction } from 'store/types'

import config from 'config'

import { LanguageConnectedProps, LanguageProps } from './types'

export const LanguageProvider: StatelessComponent<LanguageProps> = ({
    locale = config.LANGUAGE.DEFAULT_LOCALE,
    children,
    messages,
}) => {
    return (
        <IntlProvider locale={locale} messages={messages[locale]}>
            {children}
        </IntlProvider>
    )
}

export const mapStateToProps: MapStateToProps<
    LanguageConnectedProps,
    LanguageProps,
    AppState
> = state => ({
    locale: languageStore.selectLocale(state),
})

export default connect<LanguageConnectedProps, any, LanguageProps, AppState>(
    mapStateToProps
)(LanguageProvider)
