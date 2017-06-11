import { Store } from 'redux'
import { IAppState } from 'store/types'

export interface IAppProps {
    store?: Store<IAppState>
    messages?: any
}
