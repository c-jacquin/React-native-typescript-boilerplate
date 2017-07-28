import { Action } from 'redux'

export interface Route {
    routeName: string
    key: string
}

export interface NavigationState {
    index: number
    routes: Route[]
}

export interface NavigationAction extends Action {
    routeName: string
}
