import { BehaviorSubject } from 'rxjs/BehaviorSubject'

export class RxFetch {
    fetch() {
        return new BehaviorSubject({
            test: 'test',
        })
    }
}

export default new RxFetch()
