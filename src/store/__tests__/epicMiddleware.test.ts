import epicMiddleware, { rootEpic } from '../epicMiddleware'
import { dependencies } from '../epicDependencies'
import appState from '../initialState'

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
            const depKey = [
                'languageApi',
                'pushNotificationApi',
                'bootApi',
                // Insert api here
            ]
            expect(Object.keys(dependencies)).toEqual(depKey)
        })
    })
})
