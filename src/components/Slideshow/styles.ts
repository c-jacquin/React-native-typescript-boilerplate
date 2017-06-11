import { NavigationAnimatedValue } from 'react-native'

export const getStyles = (width: number, items: any[], page: number, translateX: NavigationAnimatedValue): any => ({
    slider: {
        flexDirection: 'row',
        position: 'relative',
        width: (items.length + 2) * width,
        height: 390,
        backgroundColor: '#1B1B1B',
        left: (page + 1) * -1 * width,
        transform: [{
            translateX,
        }],
    },
    arrowLeft: {
        position: 'absolute',
        top: 0,
        left: 15,
        width: '15%',
        height: '100%',
        opacity: 0.3,
    },
    arrowRight: {
        position: 'absolute',
        top: 0,
        right: 15,
        width: '15%',
        height: '100%',
        opacity: 0.3,
    },
})
