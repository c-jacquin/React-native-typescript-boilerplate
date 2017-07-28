import { Reducer } from 'redux'
import Navigator from 'pages'
import { NavigationState, NavigationAction } from './types'

export const initialState: NavigationState = Navigator.router.getStateForAction(
    Navigator.router.getActionForPathAndParams('Home'),
    null
)

const navigationReducer: Reducer<NavigationState> = (
    state = initialState,
    action: NavigationAction
) => {
    const nextState = Navigator.router.getStateForAction(action, state)

    return nextState || state
}

export default navigationReducer
