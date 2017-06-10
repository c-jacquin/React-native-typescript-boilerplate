import { NavigationAnimatedValue } from 'react-native'

export interface CarouselItem {
    title: string
    screen: {
        uri: string
    }
    poster: {
        uri: string
    }
}

export interface CarouselProps {
    items: CarouselItem[]
}

export interface CarouselState {
    width: number
    translate: NavigationAnimatedValue
    page: number
}
