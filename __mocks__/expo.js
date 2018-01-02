import React from 'react'
import { View } from "react-native"

export class Notifications {
    static getExponentPushTokenAsync() {
        return Promise.resolve('')
    }

    static addListener() {}
}

export class Util {
    static getCurrentLocaleAsync() {
        return Promise.resolve('')
    }    
}

export class Constants {
    static isDevice = true
}

export class Asset {
    static loadAsync() {
        return Promise.resolve()
    }
}

export class Font {
    static loadAsync() {
        return Promise.resolve()
    }
}

export const AppLoading = () => {
    return <View />
}

export default {
    registerRootComponent() {}
}