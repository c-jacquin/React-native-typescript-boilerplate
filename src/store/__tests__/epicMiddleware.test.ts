import epicMiddleware, { rootEpic, dependencies } from '../epicMiddleware'
import appState from 'store/__helpers__/initialState'

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
