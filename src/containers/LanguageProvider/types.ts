import { ActionCreator } from 'redux'
import { ReduxAction } from 'store/types'

export interface LanguageConnectedProps {
    locale?: string
}

export interface LanguageProps extends LanguageConnectedProps {
    messages: any
    children: any
}
