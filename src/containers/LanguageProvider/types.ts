export interface LanguageProviderConnectedProps {
    locale?: string
}

export interface LanguageProviderProps extends LanguageProviderConnectedProps {
    messages: any
    children: any
}
