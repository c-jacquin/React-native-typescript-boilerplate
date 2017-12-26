import { Reducer } from 'redux'
import Navigator from 'pages'
import { NavigationState } from './types'

export const initialState: NavigationState = Navigator.router.getStateForAction(
    Navigator.router.getActionForPathAndParams('Home'),
    null
)

const navigationReducer: Reducer<NavigationState> = (
    state = initialState,
    action
) => {
    return Navigator.router.getStateForAction(action, state)
}

export default navigationReducer
