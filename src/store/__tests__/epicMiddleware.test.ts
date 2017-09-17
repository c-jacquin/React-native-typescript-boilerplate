import epicMiddleware, { rootEpic } from '../epicMiddleware'
import { dependencies } from '../epicDependencies'
import appState from 'store/_helpers_/initialState'

describe('epic middleware', () => {
    it('should be defined', () => {
        expect(epicMiddleware).toBeDefined()
    })

    describe('root epic', () => {
        it('should be defined', () => {
            expect(rootEpic).toBeDefined()
        })
    })

    describe('epic depenencies', () => {
        it('should have the correct properties', () => {
            expect(Object.keys(dependencies)).toEqual(['languageApi'])
        })
    })
})
