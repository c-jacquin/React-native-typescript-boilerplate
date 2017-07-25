import devEnv from '../__env__/development.json'
import prodEnv from '../__env__/production.json'

export interface Env {
    ENV: string
    APP_NAME: string
    STORE_KEY: string
    LANGUAGE: {
        DEFAULT_LOCALE: string
        SUPPORTED_LOCALES: string[]
    }
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
