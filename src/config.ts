import { Dimensions } from 'react-native'

import devEnv from '../env/development.json'
import prodEnv from '../env/production.json'

const { width, height } = Dimensions.get('window')

export interface Env {
    ENV: string
    APP_NAME: string
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
        WINDOW: {
            WIDTH: width,
            HEIGHT: height,
        },
        IS_SMALL: width < 375,
    }
}

export default config
