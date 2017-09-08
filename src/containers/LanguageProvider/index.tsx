import React, { Component, StatelessComponent } from 'react'
import { IntlProvider } from 'react-intl'
import { connect, MapStateToProps } from 'react-redux'

import config from 'config'
import { selectLocale } from 'store/language/selectors'
import { AppState } from 'store/types'

import { ConnectedProps, LanguageProps } from './types'

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

const mapStateToProps: MapStateToProps<
    ConnectedProps,
    LanguageProps
> = state => ({
    locale: selectLocale(state),
})

export default connect(mapStateToProps)(LanguageProvider)
