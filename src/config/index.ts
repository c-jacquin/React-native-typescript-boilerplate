import devConfig from './env/development'
import prodConfig from './env/production'

const extraConfig =
    process.env.NODE_ENV === 'production' ? prodConfig : devConfig

export default {
    appName: 'MyApp',
    storeKey: 'myAppStoreKey',
    language: {
        defaultLocale: 'en',
        supportedLocales: ['fr', 'en'],
    },
    actionsToPersist: [],
    ...extraConfig,
}
