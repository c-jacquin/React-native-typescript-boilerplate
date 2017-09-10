interface Process {
    env: {
        NODE_ENV: string
    }
}

declare const process: Process

declare function require(name: string): any
