import React, { PureComponent } from 'react'
import { Animated, Image, View } from 'react-native'

import { SlideProps, SlideState } from './types'
import { getStyles } from './styles'

class Slide extends PureComponent<SlideProps, SlideState> {
    static defaultProps = {
        paralaxFactor: 2
    }

    private translateX(animation: number) {
        return {
            transform: [{
                translateX: animation
            }]
        }
    }

    private posterTranslate(index: number) {
        const { page, translate, width, paralaxFactor } = this.props

        if (index === page) {
            return this.translateX(Animated.divide(translate, paralaxFactor))
        }

        if(index === page + 1) {
            return this.translateX(Animated.divide(Animated.add(translate, width), paralaxFactor))
        }

        if (index === page -1) {
            return this.translateX(Animated.divide(Animated.add(translate, width * -1), paralaxFactor))
        }
    }

    render() {
        const { item, index, width, translate } = this.props
        const styles = getStyles(width, translate)

        return (
            <View style={ styles.slide }>
                <Image source={ item.screen } style={ styles.screen } />
                <Animated.Image source={ item.poster } style={[styles.poster, this.posterTranslate(index)]} />
                <View style={styles.titleContainer}>
                    <Animated.Text style={[styles.title, this.posterTranslate(index)]} >{ item.title }</Animated.Text>
                </View>
            </View>
        )
    }
}

export default Slide
