import { combineEpics, Epic } from 'redux-observable'

const rootEpic: Epic<any, any> = combineEpics()

export default rootEpic
