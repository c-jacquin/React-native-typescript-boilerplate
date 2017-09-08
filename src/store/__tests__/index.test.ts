import store from '../index'

describe('redux store', () => {
    it('should has a dispatch method', () => {
        expect(store.dispatch).toBeDefined()
    })

    it('should has a getState method', () => {
        expect(store.getState).toBeDefined()
    })
})
