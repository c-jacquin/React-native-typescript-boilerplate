export interface ConnectedProps {
    locale?: string
}

export interface LanguageProps extends ConnectedProps {
    messages: any
    children: any
}
