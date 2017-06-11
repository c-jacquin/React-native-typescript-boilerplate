declare interface IProcess  {
    env: {
        NODE_ENV: string,
    }
}

declare const process: IProcess

declare function require(name: string): any
