import { Subscription } from 'rxjs'
import nock, { Scope } from 'nock'
import rxFetch from '../RxFetch'

describe('RxFetch class', () => {
    let scope: Scope
    let subscription: Subscription
    const url = 'http://test.com'
    const response = {
        test: 'test',
    }

    afterAll(() => {
        nock.cleanAll()
    })

    afterEach(() => {
        subscription.unsubscribe()
    })

    it('should make a simple http call', done => {
        scope = nock(url)
            .get('/')
            .reply(200, response)

        subscription = rxFetch.fetch(url).subscribe(data => {
            scope.done()
            expect(data).toEqual(response)
            done()
        })
    })

    it('should return null when status is 204', done => {
        scope = nock(url)
            .get('/walou')
            .reply(204, response)

        subscription = rxFetch.fetch(`${url}/walou`).subscribe(data => {
            scope.done()
            expect(data).toBeNull()
            done()
        })
    })

    it('should work even if headers is not an instance of Headers', done => {
        scope = nock(url)
            .get('/')
            .reply(200, response)

        subscription = rxFetch
            .fetch(url, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .subscribe(data => {
                scope.done()
                expect(data).toEqual(response)
                done()
            })
    })

    it('should call JSON.stringify if a body is speciified', done => {
        const spy = jest.spyOn(JSON, 'stringify')
        const body = {
            test: 'test',
        }
        scope = nock(url)
            .post('/')
            .reply(200, response)

        subscription = rxFetch
            .fetch(url, {
                method: 'POST',
                body,
            })
            .subscribe(data => {
                scope.done()
                expect(spy).toHaveBeenCalledWith(body)
                done()
            })
    })

    it('should throw an error if the status is not correct', done => {
        scope = nock(url)
            .get('/')
            .reply(500, new Error('test error'))

        subscription = rxFetch.fetch(url).subscribe(
            data => {},
            err => {
                scope.done()
                expect(err).toBeDefined()
                done()
            }
        )
    })
})
