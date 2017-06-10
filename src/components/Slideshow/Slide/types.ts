import { CarouselItem } from '../types'
import { NavigationAnimatedValue } from 'react-native'

export interface SlideProps {
    item: CarouselItem
    page: number
    translate: NavigationAnimatedValue
    width: number
    index: number
    paralaxFactor?: number
}

export interface SlideState {

}
