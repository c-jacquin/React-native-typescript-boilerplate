import React, { Component, PropTypes, StatelessComponent } from 'react'
import { IntlProvider } from 'react-intl'
import { connect } from 'react-redux'

import config from 'config'
import { selectLocale } from 'store/language/selectors'
import { IAppState } from 'store/types'

import { ILanguageProviderProps } from './types'

const LanguageProvider: StatelessComponent<ILanguageProviderProps> = ({
    locale = config.language.defaultLocale,
    children,
    messages,
}) => (
    <IntlProvider locale={locale} messages={messages[locale]}>
      { children }
    </IntlProvider>
)

export default connect(
    (state: IAppState, props: ILanguageProviderProps) => ({
        ...props,
        locale: selectLocale(state),
    }),
)(LanguageProvider)
