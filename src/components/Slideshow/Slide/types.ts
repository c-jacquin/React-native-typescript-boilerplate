import { NavigationAnimatedValue } from 'react-native'
import { ICarouselItem } from '../types'

export interface ISlideProps {
    item: ICarouselItem
    page: number
    translate: NavigationAnimatedValue
    width: number
    index: number
    paralaxFactor?: number
}
