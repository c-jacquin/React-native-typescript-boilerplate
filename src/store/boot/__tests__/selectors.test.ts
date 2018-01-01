import { selectBoot } from '../selectors'
import appState from '../../initialState'

describe('boot selectors', () => {
    it('should return the boot state', () => {
        expect(selectBoot(appState)).toBe(appState.boot)
    })
})
