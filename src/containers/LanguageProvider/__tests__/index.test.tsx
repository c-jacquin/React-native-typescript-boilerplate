import React from 'react'
import renderer from 'react-test-renderer'
import { LanguageProvider } from '../index'

describe('Language Provider', () => {
    it('should renders correctly', () => {
        const tree = renderer.create(
            <LanguageProvider messages={{}}>
                <div>test</div>
            </LanguageProvider>
        )
        expect(tree).toBeDefined()
    })
})
