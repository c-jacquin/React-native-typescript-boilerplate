import React, { PureComponent } from 'react'
import { View, Animated, Image, Dimensions, PanResponder, PanResponderInstance, NativeTouchEvent, GestureResponderEvent, PanResponderGestureState } from 'react-native'
import autobind from 'autobind-decorator'

import Slide from './Slide'

import { CarouselProps, CarouselState, CarouselItem } from './types'
import { getStyles } from './styles'

class Slideshow extends PureComponent<CarouselProps, CarouselState> {
    panResponser: PanResponderInstance

    @autobind
    private handleEndGesture(evt: GestureResponderEvent, gestureState: PanResponderGestureState) {
        const toValue = Math.abs(gestureState.dx) / this.state.width > 0.2
            ? gestureState.dx < 0 ? this.state.width * -1 : this.state.width
            : 0

        const handleAnimationEnd = () => {
            this.state.translate.setValue(0)

            if(toValue < 0) {
                this.nextPage()
            } else if(toValue > 0) {
                this.prevPage()
            }
        }

        Animated
            .timing(this.state.translate, {
                toValue,
                duration: 300,
                useNativeDriver: true
            })
            .start(handleAnimationEnd)
    }

    prevPage() {
        const { items } = this.props
        const { page } = this.state

        this.setState({
            page: page -1 < 0 ? items.length -1 : page -1
        })
    }

    nextPage() {
        const { items } = this.props
        const { page } = this.state

        this.setState({
            page: page + 1 >= items.length ? 0 : page + 1
        })
    }

    constructor(props:CarouselProps) {
        super(props)
        const { width } = Dimensions.get('window')

        this.state = {
            width,
            translate: new Animated.Value(0),
            page: 0
        }
    }

    componentWillMount() {
        this.panResponser = PanResponder.create({
            onStartShouldSetPanResponder: () => false,
            onStartShouldSetPanResponderCapture: () => false,
            onMoveShouldSetPanResponder: (evt, gestureState) => Math.abs(gestureState.dx) > 7,
            onMoveShouldSetPanResponderCapture: () => true,
            onPanResponderTerminationRequest: () => false,
            onPanResponderMove: Animated.event([false, { dx: this.state.translate }]),
            onPanResponderRelease: this.handleEndGesture
        })
    }

    render() {
        const { items } = this.props
        const { page, translate, width } = this.state
        const styles = getStyles(width,items, page, translate)

        return (
            <Animated.View style={styles.slider} {...this.panResponser.panHandlers}>
                <Slide item={items[items.length - 1]} {...this.state} index={-1} />
                { items.map((item, index) => <Slide item={item} key={index} {...this.state} index={index} />) }
                <Slide item={items[0]} {...this.state} index={items.length} />
            </Animated.View>
        )
    }
}

export default Slideshow
