import { Font, Asset } from 'expo'

import { BootApi } from '../BootApi'

describe('boot api', () => {
    const bootApi = new BootApi()

    it('should call loadAsync of Font when loadFont is called', () => {
        const spy = jest.spyOn(Font, 'loadAsync')
        bootApi.loadFont()
        expect(spy).toHaveBeenCalled()
    })

    it('should call loadAsync of Asset when loadImages is called', () => {
        const spy = jest.spyOn(Asset, 'loadAsync')
        bootApi.loadImages()
        expect(spy).toHaveBeenCalled()
    })

    it('should call loadFont and loadImage of bootApi when loadAssets is called', () => {
        const spyFont = jest.spyOn(bootApi, 'loadFont')
        const spyImg = jest.spyOn(bootApi, 'loadImages')

        bootApi.loadAssets()
        expect(spyFont).toHaveBeenCalled()
        expect(spyImg).toHaveBeenCalled()
    })
})
