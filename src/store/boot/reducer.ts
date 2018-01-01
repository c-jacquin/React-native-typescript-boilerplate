import { Reducer } from 'redux'

import * as bootActions from './actions'
import { BootState } from './types'

export const initialState: BootState = {
    loading: false,
}

const bootReducer: Reducer<BootState> = (state = initialState, action) => {
    switch (action.type) {
        case bootActions.BOOTSTRAP_PENDING:
            return {
                ...state,
                loading: true,
            }
        case bootActions.BOOTSTRAP_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}

export default bootReducer
