import React from 'react'
import renderer from 'react-test-renderer'
import { LanguageProvider, mapStateToProps } from '../index'
import initialState from 'store/_helpers_/initialState'

describe('Language Provider', () => {
    it('should renders correctly', () => {
        const tree = renderer
            .create(
                <LanguageProvider messages={{}}>
                    <div>test</div>
                </LanguageProvider>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })

    describe('mapStateToProps function', () => {
        it('should return an object with the locale', () => {
            expect(
                mapStateToProps(initialState, { messages: [], children: {} })
            ).toEqual({
                locale: initialState.language.locale,
            })
        })
    })
})
