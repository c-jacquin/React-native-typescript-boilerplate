import React, { PureComponent } from 'react'
import { Animated, Image, View } from 'react-native'

import { getStyles } from './styles'
import { ISlideProps } from './types'

class Slide extends PureComponent<ISlideProps, any> {
    private translateX(animation: Animated.AnimatedDivision) {
        return {
            transform: [
                {
                    translateX: animation,
                },
            ],
        }
    }

    private posterTranslate(index: number) {
        const { page, translate, width, paralaxFactor = 2 } = this.props

        if (index === page) {
            return this.translateX(
                Animated.divide(translate, new Animated.Value(paralaxFactor))
            )
        }

        if (index === page + 1) {
            return this.translateX(
                Animated.divide(
                    Animated.add(translate, width),
                    new Animated.Value(paralaxFactor)
                )
            )
        }

        if (index === page - 1) {
            return this.translateX(
                Animated.divide(
                    Animated.add(translate, width * -1),
                    new Animated.Value(paralaxFactor)
                )
            )
        }
    }

    render() {
        const { item, index, width, translate } = this.props
        const styles = getStyles(width, translate)

        return (
            <View style={styles.slide}>
                <Image source={item.screen} style={styles.screen} />
                <Animated.Image
                    source={item.poster}
                    style={[styles.poster, this.posterTranslate(index)]}
                />
                <View style={styles.titleContainer}>
                    <Animated.Text
                        style={[styles.title, this.posterTranslate(index)]}
                    >
                        {item.title}
                    </Animated.Text>
                </View>
            </View>
        )
    }
}

export default Slide
