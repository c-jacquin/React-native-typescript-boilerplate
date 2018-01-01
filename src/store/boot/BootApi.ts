import { Asset, Font } from 'expo'
import { Ionicons } from '@expo/vector-icons'

export class BootApi {
    loadFont() {
        return Font.loadAsync({
            ...Ionicons.font,
            'space-mono': require('../../../assets/fonts/SpaceMono-Regular.ttf'),
        })
    }

    loadImages() {
        return Asset.loadAsync([
            require('../../../assets/images/robot-dev.png'),
            require('../../../assets/images/robot-prod.png'),
        ])
    }

    loadAssets() {
        return Promise.all([this.loadFont(), this.loadImages()])
    }
}
