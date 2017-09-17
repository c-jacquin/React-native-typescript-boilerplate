import { Env } from '../config'

describe('config in prod environment', () => {
    let config: Env

    beforeEach(() => {
        process.env.NODE_ENV = 'production'
        config = require('../config').default
        process.env.NODE_ENV = 'test'
    })

    it('should have ENV property = prod', () => {
        expect(config.ENV).toEqual('prod')
    })
})
