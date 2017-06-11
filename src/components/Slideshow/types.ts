import { NavigationAnimatedValue } from 'react-native'

export interface ICarouselItem {
    title: string
    screen: {
        uri: string,
    }
    poster: {
        uri: string,
    }
}

export interface ICarouselProps {
    items: ICarouselItem[]
}

export interface ICarouselState {
    width: number
    translate: NavigationAnimatedValue
    page: number
}