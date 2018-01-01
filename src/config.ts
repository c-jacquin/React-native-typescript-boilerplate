import devEnv from '../env/development.json'
import prodEnv from '../env/production.json'

export interface Env {
    ENV: string
    APP_NAME: string
    STORE_KEY: string
    LANGUAGE: {
        DEFAULT_LOCALE: string
        SUPPORTED_LOCALES: string[]
    }
    PUSH_ENDPOINT: string
}

let config: Env = {
    ...devEnv,
}

if (process.env.NODE_ENV === 'production') {
    config = {
        ...config,
        ...prodEnv,
    }
}

export default config
