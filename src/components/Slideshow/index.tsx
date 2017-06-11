import React, { PureComponent } from 'react'
import {
    Animated,
    Dimensions,
    GestureResponderEvent,
    Image,
    NativeTouchEvent,
    PanResponder,
    PanResponderGestureState,
    PanResponderInstance,
    View,
} from 'react-native'

import autobind from 'autobind-decorator'

import ArrowButton from './ArrowButton'
import Slide from './Slide'

import { getStyles } from './styles'
import { ICarouselProps, ICarouselState } from './types'

class Slideshow extends PureComponent<ICarouselProps, ICarouselState> {
    private panResponser: PanResponderInstance

    @autobind
    private handleAnimationEnd(toValue: number) {
        const { items } = this.props
        const { page } = this.state

        this.state.translate.setValue(0)

        if (toValue < 0) {
            this.setState({
                page: page + 1 >= items.length ? 0 : page + 1,
            })
        } else if (toValue > 0) {
            this.setState({
                page: page - 1 < 0 ? items.length - 1 : page - 1,
            })
        }
    }

    @autobind
    private animate(toValue: number) {
        Animated
            .timing(this.state.translate, {
                toValue,
                duration: 300,
                useNativeDriver: true,
            })
            .start(() => this.handleAnimationEnd(toValue))
    }

    @autobind
    private handleEndGesture(evt: GestureResponderEvent, gestureState: PanResponderGestureState) {
        const toValue = Math.abs(gestureState.dx) / this.state.width > 0.2
            ? gestureState.dx < 0 ? this.state.width * -1 : this.state.width
            : 0
        this.animate(toValue)
    }

    @autobind
    public prevPage() {
        this.animate(this.state.width * -1)
    }

    @autobind
    public nextPage() {
        this.animate(this.state.width)
    }

    constructor(props: ICarouselProps) {
        super(props)
        const { width } = Dimensions.get('window')

        this.state = {
            width,
            translate: new Animated.Value(0),
            page: 0,
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
            onPanResponderRelease: this.handleEndGesture,
        })
    }

    render() {
        const { items, arrows } = this.props
        const { page, translate, width } = this.state
        const styles = getStyles(width, items, page, translate)

        return (
            <View style={{ position: 'relative' }}>
                { arrows &&
                    <ArrowButton style={styles.arrowLeft} direction={'back'} onPress={this.prevPage} />
                }
                <Animated.View style={styles.slider} {...this.panResponser.panHandlers}>
                    <Slide item={items[items.length - 1]} {...this.state} index={-1} />
                    { items.map((item, index) => <Slide item={item} key={index} {...this.state} index={index} />) }
                    <Slide item={items[0]} {...this.state} index={items.length} />
                </Animated.View>
                { arrows &&
                    <ArrowButton style={styles.arrowRight} direction={'forward'} onPress={this.nextPage} />
                }
            </View>
        )
    }
}

export default Slideshow
