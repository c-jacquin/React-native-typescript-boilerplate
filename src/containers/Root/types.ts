import { Store } from 'redux'
import { IAppState } from 'store/types'

export interface IRootProps {
    store?: Store<IAppState>
    messages?: any
}

export interface IRootState {
    items: any[]
}
