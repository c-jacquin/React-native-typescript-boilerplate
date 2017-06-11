import DeviceInfo from 'react-native-device-info'
import { Action, Reducer } from 'redux'

import config from 'config'

import { ILanguageState } from './types'

const phoneLocale: string = DeviceInfo.getDeviceLocale()

const initialState: ILanguageState = {
  locale: config.language.supportedLocales.includes(phoneLocale) ? phoneLocale : config.language.defaultLocale,
  supportedLanguages: config.language.supportedLocales,
}

const languageReducer: Reducer<ILanguageState> = (state = initialState, action: Action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default languageReducer
