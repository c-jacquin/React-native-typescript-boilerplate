import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/fromPromise'

export class RxFetch {
    fetch(input: RequestInfo, init: RequestInit = {}): Observable<any | null> {
        let headers = init.headers || new Headers()
        if (!(headers instanceof Headers)) {
            headers = new Headers(headers)
        }

        this.setHeaderDefault(headers, 'Accept', 'application/json')

        if (typeof init.body === 'object' && init.body !== null) {
            this.setHeaderDefault(headers, 'Content-Type', 'application/json')
            init.body = JSON.stringify(init.body)
        }

        return Observable.fromPromise(
            fetch(input, { ...init, headers })
                .then(this.checkStatus)
                .then(this.parseJson)
        )
    }

    private setHeaderDefault(
        headers: Headers,
        name: string,
        defaultValue: string
    ) {
        if (!headers.has(name)) {
            headers.set(name, defaultValue)
        }
    }

    private checkStatus(response: Response): Response {
        if (response.ok) {
            return response
        }

        const error: any = new Error(response.statusText)
        error.response = response
        throw error
    }

    private parseJson(response: Response): Promise<any> | null {
        if (response.status === 204) {
            return null
        }

        return response.json()
    }
}

export default new RxFetch()
