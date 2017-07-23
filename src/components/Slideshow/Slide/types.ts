import { NavigationAnimatedValue } from 'react-native'
import { CarouselItem } from '../types'

export interface SlideProps {
    item: CarouselItem
    page: number
    translate: NavigationAnimatedValue
    width: number
    index: number
    paralaxFactor?: number
}
