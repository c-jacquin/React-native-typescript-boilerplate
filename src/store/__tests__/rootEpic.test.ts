import rootEpic from '../rootEpic'
import appState from 'store/__helpers__/initialState'

describe('root epic', () => {
    it('should be defined', () => {
        expect(rootEpic).toBeDefined()
    })
})
