declare module 'redux-persist' {
    import { SFC, Component } from "react";
    
    export const persistStore: (store: any, options?: any) => any
    export const persistReducer: (reducer: any, options?: any)=> any
}

declare module 'redux-persist/lib/storage' {

}

declare module 'redux-persist/es/integration/react' {
    import { ComponentClass } from "react";
    export const PersistGate: ComponentClass<any>
}