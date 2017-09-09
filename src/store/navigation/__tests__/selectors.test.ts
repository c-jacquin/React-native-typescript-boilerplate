import { selectNavigation } from '../selectors'
import appState from 'store/_helpers_/initialState'

describe('navigation selectors', () => {
    it('should return the navigation state', () => {
        expect(selectNavigation(appState)).toBe(appState.navigation)
    })
})
