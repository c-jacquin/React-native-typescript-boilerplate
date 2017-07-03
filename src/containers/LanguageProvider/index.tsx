import React, { Component, PropTypes, StatelessComponent } from 'react'
import { IntlProvider } from 'react-intl'
import { connect } from 'react-redux'

import config from 'config'
import { selectLocale } from 'store/language/selectors'
import { AppState } from 'store/types'

import { LanguageProviderConnectedProps, LanguageProviderProps } from './types'

const LanguageProvider: StatelessComponent<LanguageProviderProps> = ({
    locale = config.language.defaultLocale,
    children,
    messages,
}) =>
    <IntlProvider locale={locale} messages={messages[locale]}>
        {children}
    </IntlProvider>

export default connect<
    LanguageProviderConnectedProps,
    null,
    LanguageProviderProps
>(state => ({
    locale: selectLocale(state),
}))(LanguageProvider)
