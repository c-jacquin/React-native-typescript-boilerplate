import { BehaviorSubject } from 'rxjs/BehaviorSubject'

export class PushNotificationApi {
    getToken() {
        return new BehaviorSubject('')
    }

    register() {
        return new BehaviorSubject(null)
    }

    subscribe() {
        return new BehaviorSubject({
            isMultiple: true,
            data: {},
            origin: 'selected',
            remote: true,
        })
    }

    unsubscribe() {}
}
