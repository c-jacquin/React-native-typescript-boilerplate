import { Epic } from 'redux-observable'
import { AppState, ReduxAction } from '../types'

const logEpic: Epic<ReduxAction, AppState> = action$ => {
    return action$.do(console.log).filter(() => false)
}

export default logEpic
