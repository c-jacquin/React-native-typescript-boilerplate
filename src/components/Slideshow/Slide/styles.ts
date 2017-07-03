import { NavigationAnimatedValue } from 'react-native'

export const getStyles = (
    width: number,
    translateX: NavigationAnimatedValue
): any => ({
    slide: {
        height: 390,
        width,
        position: 'relative',
    },
    screen: {
        width,
        height: 300,
    },
    poster: {
        position: 'absolute',
        top: 150,
        left: 20,
        height: 220,
        width: 150,
    },
    title: {
        fontSize: 18,
        color: '#FFF',
    },
    titleContainer: {
        position: 'absolute',
        backgroundColor: 'transparent',
        left: 200,
        top: 330,
        right: 0,
        overflow: 'hidden',
    },
})
