import { Epic } from 'redux-observable'
import { AppState, ReduxAction } from '../types'

const logEpic: Epic<ReduxAction, AppState> = action$ => {
    return action$
        .filter(() => process.env.NODE_ENV === 'development')
        .do(console.log)
        .filter(() => false)
}

export default logEpic
