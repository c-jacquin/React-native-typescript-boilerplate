import * as reactNative from 'react-native'

declare module 'react-native' {
    namespace Animated {
        export function divide(
            a: Animated,
            b: Animated,
        ): AnimatedDivision;

        export class AnimatedDivision extends AnimatedInterpolation { }

    }
}
