import { NavigationAnimatedValue } from 'react-native'

export const getStyles = (width: number, items: any[], page: number, translateX: NavigationAnimatedValue): any => ({
    slider: {
        flexDirection: 'row',
        width: (items.length + 2) * width,
        height: 390,
        backgroundColor: '#1B1B1B',
        left: (page + 1) * -1 * width,
        transform: [{
            translateX
        }]
    },
})
