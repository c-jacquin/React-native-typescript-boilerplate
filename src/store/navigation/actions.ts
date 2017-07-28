import { ActionCreator } from 'redux'
import { NavigationAction } from './types'

export const NAVIGATE_ACTION = 'Navigation/NAVIGATE'

export const navigate: ActionCreator<NavigationAction> = routeName => ({
    type: NAVIGATE_ACTION,
    routeName,
})
